import * as vscode from 'vscode'

export class ToonValidator {
  private diagnosticCollection: vscode.DiagnosticCollection

  constructor() {
    this.diagnosticCollection = vscode.languages.createDiagnosticCollection('toon')
  }

  async validate(document: vscode.TextDocument): Promise<void> {
    const config = vscode.workspace.getConfiguration('toon.validation')
    if (!config.get('enabled', true)) {
      this.diagnosticCollection.clear()
      return
    }

    const diagnostics: vscode.Diagnostic[] = []

    try {
      const { decode } = await import('@toon-format/toon')
      const text = document.getText()

      // Try to decode with strict mode
      decode(text, { strict: true })

      // If successful, clear diagnostics
      this.diagnosticCollection.set(document.uri, [])
    }
    catch (error) {
      if (error instanceof Error) {
        const diagnostic = this.createDiagnosticFromError(error, document)
        if (diagnostic) {
          diagnostics.push(diagnostic)
        }
      }

      this.diagnosticCollection.set(document.uri, diagnostics)
    }
  }

  private createDiagnosticFromError(
    error: Error,
    document: vscode.TextDocument
  ): vscode.Diagnostic | null {
    const message = error.message

    // Try to extract line number from error message
    const lineMatch = message.match(/Line (\d+)/)
    let range: vscode.Range

    if (lineMatch) {
      const lineNumber = Number.parseInt(lineMatch[1]!, 10) - 1
      const line = document.lineAt(Math.min(lineNumber, document.lineCount - 1))
      range = line.range
    }
    else {
      // Default to first line if no line number found
      range = document.lineAt(0).range
    }

    const diagnostic = new vscode.Diagnostic(
      range,
      message,
      vscode.DiagnosticSeverity.Error
    )

    diagnostic.source = 'TOON'
    return diagnostic
  }

  dispose(): void {
    this.diagnosticCollection.dispose()
  }
}
