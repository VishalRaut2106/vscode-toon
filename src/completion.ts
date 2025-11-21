import * as vscode from 'vscode'

export class ToonCompletionProvider implements vscode.CompletionItemProvider {
  provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken,
    context: vscode.CompletionContext
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    const linePrefix = document.lineAt(position).text.substring(0, position.character)
    const items: vscode.CompletionItem[] = []

    // Array header completion
    if (linePrefix.match(/^\s*\w*$/)) {
      items.push(this.createArrayHeaderCompletion())
      items.push(this.createTabularArrayCompletion())
      items.push(this.createInlineArrayCompletion())
    }

    // List item completion
    if (linePrefix.match(/^\s*$/)) {
      items.push(this.createListItemCompletion())
    }

    // Key-value completion
    if (linePrefix.match(/^\s*\w+$/)) {
      items.push(this.createKeyValueCompletion())
    }

    // Delimiter suggestions after array length
    if (linePrefix.match(/\[\d+$/)) {
      items.push(...this.createDelimiterCompletions())
    }

    // Field header suggestions
    if (linePrefix.match(/\[\d+[,\t|]?\]$/)) {
      items.push(this.createFieldHeaderCompletion())
    }

    return items
  }

  private createArrayHeaderCompletion(): vscode.CompletionItem {
    const item = new vscode.CompletionItem('Array Header', vscode.CompletionItemKind.Snippet)
    item.insertText = new vscode.SnippetString('${1:arrayName}[${2:length}]:\n  $0')
    item.documentation = new vscode.MarkdownString('Create an array header with length declaration')
    item.detail = 'TOON Array Header'
    return item
  }

  private createTabularArrayCompletion(): vscode.CompletionItem {
    const item = new vscode.CompletionItem('Tabular Array', vscode.CompletionItemKind.Snippet)
    item.insertText = new vscode.SnippetString(
      '${1:arrayName}[${2:length}]{${3:field1},${4:field2}}:\n  ${5:value1},${6:value2}\n  $0'
    )
    item.documentation = new vscode.MarkdownString(
      'Create a tabular array with field headers (CSV-style)\n\n```toon\nusers[2]{id,name}:\n  1,Alice\n  2,Bob\n```'
    )
    item.detail = 'TOON Tabular Array'
    return item
  }

  private createInlineArrayCompletion(): vscode.CompletionItem {
    const item = new vscode.CompletionItem('Inline Array', vscode.CompletionItemKind.Snippet)
    item.insertText = new vscode.SnippetString('${1:arrayName}[${2:length}]: ${3:value1},${4:value2}$0')
    item.documentation = new vscode.MarkdownString(
      'Create an inline array of primitives\n\n```toon\ntags[3]: admin,user,guest\n```'
    )
    item.detail = 'TOON Inline Array'
    return item
  }

  private createListItemCompletion(): vscode.CompletionItem {
    const item = new vscode.CompletionItem('List Item', vscode.CompletionItemKind.Snippet)
    item.insertText = new vscode.SnippetString('- ${1:key}: ${2:value}$0')
    item.documentation = new vscode.MarkdownString('Create a list item with key-value pair')
    item.detail = 'TOON List Item'
    return item
  }

  private createKeyValueCompletion(): vscode.CompletionItem {
    const item = new vscode.CompletionItem('Key-Value Pair', vscode.CompletionItemKind.Snippet)
    item.insertText = new vscode.SnippetString('${1:key}: ${2:value}$0')
    item.documentation = new vscode.MarkdownString('Create a key-value pair')
    item.detail = 'TOON Key-Value'
    return item
  }

  private createDelimiterCompletions(): vscode.CompletionItem[] {
    const delimiters = [
      { char: ',', name: 'Comma', desc: 'Standard delimiter (most readable)' },
      { char: '\t', name: 'Tab', desc: 'Tab delimiter (most token-efficient)' },
      { char: '|', name: 'Pipe', desc: 'Pipe delimiter (for data with commas)' },
    ]

    return delimiters.map(({ char, name, desc }) => {
      const item = new vscode.CompletionItem(name, vscode.CompletionItemKind.Value)
      item.insertText = char
      item.documentation = new vscode.MarkdownString(desc)
      item.detail = `Delimiter: ${char}`
      return item
    })
  }

  private createFieldHeaderCompletion(): vscode.CompletionItem {
    const item = new vscode.CompletionItem('Field Header', vscode.CompletionItemKind.Snippet)
    item.insertText = new vscode.SnippetString('{${1:field1},${2:field2}}:$0')
    item.documentation = new vscode.MarkdownString(
      'Add field header for tabular array\n\n```toon\nusers[2]{id,name}:\n  1,Alice\n  2,Bob\n```'
    )
    item.detail = 'TOON Field Header'
    return item
  }
}
