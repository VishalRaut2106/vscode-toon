import * as vscode from 'vscode'

export class ToonHoverProvider implements vscode.HoverProvider {
  provideHover(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken
  ): vscode.ProviderResult<vscode.Hover> {
    const line = document.lineAt(position.line).text
    const wordRange = document.getWordRangeAtPosition(position)
    
    // Array header with length
    if (line.match(/\[\d+\]/)) {
      const match = line.match(/\[(\d+)\]/)
      if (match) {
        const length = match[1]
        const markdown = new vscode.MarkdownString()
        markdown.appendMarkdown(`**Array Length Declaration**\n\n`)
        markdown.appendMarkdown(`This array contains **${length}** items.\n\n`)
        markdown.appendMarkdown(`TOON uses explicit length declarations to help LLMs validate structure.`)
        return new vscode.Hover(markdown)
      }
    }

    // Field header
    if (line.match(/\{[^}]+\}/)) {
      const match = line.match(/\{([^}]+)\}/)
      if (match) {
        const fields = match[1].split(',').map(f => f.trim())
        const markdown = new vscode.MarkdownString()
        markdown.appendMarkdown(`**Tabular Array Fields**\n\n`)
        markdown.appendMarkdown(`Fields: \`${fields.join('`, `')}\`\n\n`)
        markdown.appendMarkdown(`Each row below should have ${fields.length} values in this order.`)
        return new vscode.Hover(markdown)
      }
    }

    // Delimiter detection
    const delimiterMatch = line.match(/\[(\d+)([,\t|])\]/)
    if (delimiterMatch) {
      const delimiter = delimiterMatch[2]
      const markdown = new vscode.MarkdownString()
      markdown.appendMarkdown(`**Delimiter: \`${delimiter}\`**\n\n`)
      
      switch (delimiter) {
        case ',':
          markdown.appendMarkdown('Comma delimiter (standard, most readable)')
          break
        case '\t':
          markdown.appendMarkdown('Tab delimiter (most token-efficient)')
          break
        case '|':
          markdown.appendMarkdown('Pipe delimiter (useful when data contains commas)')
          break
      }
      
      return new vscode.Hover(markdown)
    }

    // List item marker
    if (line.match(/^\s*-\s/)) {
      const markdown = new vscode.MarkdownString()
      markdown.appendMarkdown(`**List Item**\n\n`)
      markdown.appendMarkdown(`Represents an item in an array. Similar to YAML list syntax.`)
      return new vscode.Hover(markdown)
    }

    return null
  }
}
