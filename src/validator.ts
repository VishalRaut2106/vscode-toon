import * as vscode from 'vscode';
import { decode } from '@toon-format/toon';

export class ToonValidator {
  private diagnosticCollection: vscode.DiagnosticCollection;
  private validationTimeout: NodeJS.Timeout | undefined;

  constructor() {
    this.diagnosticCollection = vscode.languages.createDiagnosticCollection('toon');
  }

  validate(document: vscode.TextDocument): void {
    // Debounce validation to avoid excessive calls while typing
    if (this.validationTimeout) {
      clearTimeout(this.validationTimeout);
    }

    this.validationTimeout = setTimeout(() => {
      this.doValidate(document);
    }, 500); // Increased to 500ms for better typing experience
  }

  private async doValidate(document: vscode.TextDocument): Promise<void> {
    const config = vscode.workspace.getConfiguration('toon.validation');
    if (!config.get('enabled', true)) {
      this.diagnosticCollection.clear();
      return;
    }

    const diagnostics: vscode.Diagnostic[] = [];
    const text = document.getText().trim();

    // Skip validation for empty documents or very short content (likely still typing)
    if (!text || text.length < 3) {
      this.diagnosticCollection.set(document.uri, []);
      return;
    }

    try {
      // Try to decode - use non-strict mode to be more lenient
      decode(text, { strict: false });

      // If successful, clear diagnostics
      this.diagnosticCollection.set(document.uri, []);
    }
    catch (error) {
      // Only show errors if the document looks complete (ends with proper structure)
      // This prevents showing errors while user is still typing
      const looksComplete = text.includes(':') || text.includes('\n');
      
      if (error instanceof Error && looksComplete) {
        const diagnostic = this.createDiagnosticFromError(error, document);
        if (diagnostic) {
          diagnostics.push(diagnostic);
        }
      }

      this.diagnosticCollection.set(document.uri, diagnostics);
    }
  }

  private createDiagnosticFromError(
    error: Error,
    document: vscode.TextDocument
  ): vscode.Diagnostic | null {
    const message = error.message;

    // Try to extract line number from error message
    const lineMatch = message.match(/line[:\s]+(\d+)/i);
    let range: vscode.Range;

    if (lineMatch) {
      const lineNumber = Number.parseInt(lineMatch[1]!, 10) - 1;
      const lineIndex = Math.max(0, Math.min(lineNumber, document.lineCount - 1));
      const line = document.lineAt(lineIndex);
      
      // Highlight the entire line content, not just the range
      const startPos = new vscode.Position(lineIndex, line.firstNonWhitespaceCharacterIndex);
      const endPos = new vscode.Position(lineIndex, line.text.length);
      range = new vscode.Range(startPos, endPos);
    }
    else {
      // Try to find the problematic content in the document
      const firstNonEmptyLine = this.findFirstNonEmptyLine(document);
      if (firstNonEmptyLine >= 0) {
        const line = document.lineAt(firstNonEmptyLine);
        const startPos = new vscode.Position(firstNonEmptyLine, line.firstNonWhitespaceCharacterIndex);
        const endPos = new vscode.Position(firstNonEmptyLine, line.text.length);
        range = new vscode.Range(startPos, endPos);
      }
      else {
        // Fallback to first line
        range = document.lineAt(0).range;
      }
    }

    const diagnostic = new vscode.Diagnostic(
      range,
      message,
      vscode.DiagnosticSeverity.Error
    );

    diagnostic.source = 'TOON';
    return diagnostic;
  }

  private findFirstNonEmptyLine(document: vscode.TextDocument): number {
    for (let i = 0; i < document.lineCount; i++) {
      const line = document.lineAt(i);
      if (line.text.trim().length > 0) {
        return i;
      }
    }
    return -1;
  }

  dispose(): void {
    if (this.validationTimeout) {
      clearTimeout(this.validationTimeout);
    }
    this.diagnosticCollection.dispose();
  }
}
