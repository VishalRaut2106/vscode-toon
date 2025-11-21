import * as vscode from 'vscode'
import { decode, encode } from '@toon-format/toon'

export class ToonFormatter implements vscode.DocumentFormattingEditProvider {
  async provideDocumentFormattingEdits(
    document: vscode.TextDocument,
    options: vscode.FormattingOptions,
    token: vscode.CancellationToken
  ): Promise<vscode.TextEdit[]> {
    const text = document.getText().trim()

    // Skip formatting for empty documents
    if (!text) {
      return []
    }

    try {
      const config = vscode.workspace.getConfiguration('toon.format')

      // Decode and re-encode to format
      const data = decode(text, { strict: false })
      const formatted = encode(data, {
        indent: config.get('indent', options.tabSize),
        delimiter: config.get('delimiter', ','),
      })

      // Replace entire document
      const fullRange = new vscode.Range(
        document.positionAt(0),
        document.positionAt(document.getText().length)
      )

      return [vscode.TextEdit.replace(fullRange, formatted)]
    }
    catch (error) {
      vscode.window.showErrorMessage(
        `Failed to format TOON: ${error instanceof Error ? error.message : String(error)}`
      )
      return []
    }
  }
}
