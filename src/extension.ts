import * as vscode from 'vscode'
import { ToonValidator } from './validator'
import { ToonFormatter } from './formatter'

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
      if (editor && editor.document.languageId === 'toon') {
        try {
          const { decode } = await import('@toon-format/toon')
          const toonContent = editor.document.getText()
          const jsonData = decode(toonContent)
          const jsonString = JSON.stringify(jsonData, null, 2)

          const doc = await vscode.workspace.openTextDocument({
            content: jsonString,
            language: 'json',
          })
          await vscode.window.showTextDocument(doc)
        }
        catch (error) {
          vscode.window.showErrorMessage(
            `Failed to convert TOON to JSON: ${error instanceof Error ? error.message : String(error)}`
          )
        }
      }
    })
  )

  context.subscriptions.push(
    vscode.commands.registerCommand('toon.convertFromJson', async () => {
      const editor = vscode.window.activeTextEditor
      if (editor && editor.document.languageId === 'json') {
        try {
          const { encode } = await import('@toon-format/toon')
          const { flattenObject, hasNestedObjects } = await import('./flatten')
          const jsonContent = editor.document.getText()
          let jsonData = JSON.parse(jsonContent)

          // Check if data has nested objects
          if (hasNestedObjects(jsonData)) {
            const choice = await vscode.window.showQuickPick(
              [
                {
                  label: '$(symbol-structure) Nested (Preserve Structure)',
                  description: 'Keep nested objects as-is',
                  value: 'nested',
                },
                {
                  label: '$(symbol-namespace) Flattened (Save Tokens)',
                  description: 'Flatten nested objects with dot notation (e.g., user.name)',
                  value: 'flat',
                },
              ],
              {
                placeHolder: 'Choose TOON format style',
                title: 'Convert JSON to TOON',
              }
            )

            if (!choice) {
              return // User cancelled
            }

            if (choice.value === 'flat') {
              jsonData = flattenObject(jsonData)
            }
          }

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
          await vscode.window.showTextDocument(doc)
        }
        catch (error) {
          vscode.window.showErrorMessage(
            `Failed to convert JSON to TOON: ${error instanceof Error ? error.message : String(error)}`
          )
        }
      }
    })
  )

  context.subscriptions.push(
    vscode.commands.registerCommand('toon.convertFromJsonFlat', async () => {
      const editor = vscode.window.activeTextEditor
      if (editor && editor.document.languageId === 'json') {
        try {
          const { encode } = await import('@toon-format/toon')
          const { flattenObject } = await import('./flatten')
          const jsonContent = editor.document.getText()
          const jsonData = JSON.parse(jsonContent)
          const flatData = flattenObject(jsonData)

          const config = vscode.workspace.getConfiguration('toon.format')
          const toonString = encode(flatData, {
            indent: config.get('indent', 2),
            delimiter: config.get('delimiter', ','),
            lengthMarker: config.get('lengthMarker', false) ? '#' : false,
          })

          const doc = await vscode.workspace.openTextDocument({
            content: toonString,
            language: 'toon',
          })
          await vscode.window.showTextDocument(doc)
        }
        catch (error) {
          vscode.window.showErrorMessage(
            `Failed to convert JSON to TOON (flat): ${error instanceof Error ? error.message : String(error)}`
          )
        }
      }
    })
  )
}

export function deactivate() {
  console.log('TOON extension is now deactivated')
}
