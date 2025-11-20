import * as vscode from 'vscode'
import { ToonValidator } from './validator'
import { ToonFormatter } from './formatter'
import { encode, decode } from '@toon-format/toon'

export function activate(context: vscode.ExtensionContext) {
  console.log('TOON extension is now active')

  const validator = new ToonValidator()
  const formatter = new ToonFormatter()

  // Register document formatting provider
  context.subscriptions.push(
    vscode.languages.registerDocumentFormattingEditProvider('toon', formatter)
  )

  // Register validation on document change
  context.subscriptions.push(
    vscode.workspace.onDidChangeTextDocument((event) => {
      if (event.document.languageId === 'toon') {
        validator.validate(event.document)
      }
    })
  )

  // Register validation on document open
  context.subscriptions.push(
    vscode.workspace.onDidOpenTextDocument((document) => {
      if (document.languageId === 'toon') {
        validator.validate(document)
      }
    })
  )

  // Validate all open TOON documents
  vscode.workspace.textDocuments.forEach((document) => {
    if (document.languageId === 'toon') {
      validator.validate(document)
    }
  })

  // Register commands
  context.subscriptions.push(
    vscode.commands.registerCommand('toon.validate', () => {
      const editor = vscode.window.activeTextEditor
      if (editor && editor.document.languageId === 'toon') {
        validator.validate(editor.document)
        vscode.window.showInformationMessage('TOON validation complete')
      }
    })
  )

  context.subscriptions.push(
    vscode.commands.registerCommand('toon.convertToJson', async () => {
      const editor = vscode.window.activeTextEditor
      if (!editor) {
        vscode.window.showWarningMessage('No active editor found')
        return
      }

      if (editor.document.languageId !== 'toon') {
        vscode.window.showWarningMessage('Current file is not a TOON file')
        return
      }

      try {
        const toonContent = editor.document.getText().trim()

        if (!toonContent) {
          vscode.window.showWarningMessage('Document is empty')
          return
        }

        const jsonData = decode(toonContent)
        const jsonString = JSON.stringify(jsonData, null, 2)

        const doc = await vscode.workspace.openTextDocument({
          content: jsonString,
          language: 'json',
        })
        await vscode.window.showTextDocument(doc, { preview: false })
        vscode.window.showInformationMessage('Successfully converted TOON to JSON')
      }
      catch (error) {
        vscode.window.showErrorMessage(
          `Failed to convert TOON to JSON: ${error instanceof Error ? error.message : String(error)}`
        )
      }
    })
  )

  context.subscriptions.push(
    vscode.commands.registerCommand('toon.convertFromJson', async () => {
      const editor = vscode.window.activeTextEditor
      if (!editor) {
        vscode.window.showWarningMessage('No active editor found')
        return
      }

      if (editor.document.languageId !== 'json') {
        vscode.window.showWarningMessage('Current file is not a JSON file')
        return
      }

      try {
        const jsonContent = editor.document.getText().trim()

        if (!jsonContent) {
          vscode.window.showWarningMessage('Document is empty')
          return
        }

        const jsonData = JSON.parse(jsonContent)

        const config = vscode.workspace.getConfiguration('toon.format')
        const toonString = encode(jsonData, {
          indent: config.get('indent', 2),
          delimiter: config.get('delimiter', ','),
          lengthMarker: config.get('lengthMarker', false) ? '#' : false,
        })

        const doc = await vscode.workspace.openTextDocument({
          content: toonString,
          language: 'toon',
        })
        await vscode.window.showTextDocument(doc, { preview: false })
        vscode.window.showInformationMessage('Successfully converted JSON to TOON')
      }
      catch (error) {
        vscode.window.showErrorMessage(
          `Failed to convert JSON to TOON: ${error instanceof Error ? error.message : String(error)}`
        )
      }
    })
  )


}

export function deactivate() {
  console.log('TOON extension is now deactivated')
}
