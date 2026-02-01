# Getting Started

This guide will help you install and start using the TOON VS Code extension.

## Installation

### From VS Code Marketplace

1. Open VS Code
2. Go to Extensions (`Ctrl+Shift+X`)
3. Search for "TOON Format"
4. Click Install on the extension by `vishalraut`

### From Command Line

```bash
code --install-extension vishalraut.vscode-toon
```

## Your First TOON File

1. **Create a new file** with `.toon` extension
2. **Start typing** - you'll see syntax highlighting immediately
3. **Try IntelliSense** - press `Ctrl+Space` for suggestions

### Example: Simple Array

```toon
colors[3]: red,green,blue
```

### Example: Tabular Data

```toon
users[2]{id,name,role}:
  1,Alice,admin
  2,Bob,user
```

## Using Snippets

Type these prefixes and press `Tab`:

- `toon-array-inline` - Simple array: `tags[3]: a,b,c`
- `toon-array-tabular` - Table: `users[2]{id,name}: 1,Alice`
- `toon-object` - Nested object structure

## Commands

Access via Command Palette (`Ctrl+Shift+P`):

- **TOON: Validate** - Check file syntax
- **TOON: Convert to JSON** - Export as JSON
- **TOON: Convert from JSON** - Import from JSON

## Next Steps

- [Learn TOON Syntax](syntax.md) - Complete language reference
- [Explore Snippets](snippets.md) - All available code templates
- [Configure Settings](configuration.md) - Customize the extension