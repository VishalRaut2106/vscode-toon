# TOON Language Support for VS Code

Syntax highlighting, validation, and formatting for TOON (Token-Oriented Object Notation) files.

## Features

### 🎨 Syntax Highlighting
- Color-coded syntax for TOON files
- Highlights array headers, field definitions, keys, values, and delimiters
- Support for all TOON data types (strings, numbers, booleans, null)

### ✅ Real-time Validation
- Automatic validation as you type
- Error highlighting with detailed messages
- Strict mode validation for array lengths and structure

### 🔧 Formatting
- Format on save support
- Configurable indentation
- Support for comma, tab, and pipe delimiters
- Optional length markers (`[#3]` vs `[3]`)

### 📝 Code Snippets
- Quick snippets for common TOON patterns
- Inline arrays, tabular arrays, list arrays
- Objects and key-value pairs

### 🔄 Conversion Commands
- Convert TOON to JSON
- Convert JSON to TOON

## Installation

1. Install from VS Code Marketplace (coming soon)
2. Or install from VSIX file:
   ```bash
   code --install-extension vscode-toon-0.1.0.vsix
   ```

## Usage

### File Association
Files with `.toon` extension are automatically recognized.

### Commands
- `TOON: Validate` - Manually validate current TOON file
- `TOON: Convert to JSON` - Convert TOON file to JSON
- `TOON: Convert from JSON` - Convert JSON file to TOON

Access commands via Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)

### Snippets
Type these prefixes and press `Tab`:

- `toon-array-inline` - Inline primitive array
- `toon-array-tabular` - Tabular array of objects
- `toon-array-list` - List array
- `toon-object` - Nested object
- `toon-kv` - Key-value pair

## Configuration

Configure the extension in VS Code settings:

```json
{
  "toon.validation.enabled": true,
  "toon.format.indent": 2,
  "toon.format.delimiter": ",",
  "toon.format.lengthMarker": false
}
```

### Settings

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `toon.validation.enabled` | boolean | `true` | Enable/disable validation |
| `toon.format.indent` | number | `2` | Number of spaces for indentation |
| `toon.format.delimiter` | string | `","` | Delimiter for arrays (`,`, `\t`, or `\|`) |
| `toon.format.lengthMarker` | boolean | `false` | Add `#` prefix to array lengths |

## Examples

### Inline Array
```toon
tags[3]: admin,ops,dev
```

### Tabular Array
```toon
users[2]{id,name,role}:
  1,Alice,admin
  2,Bob,user
```

### Nested Object
```toon
config:
  database:
    host: localhost
    port: 5432
  cache:
    enabled: true
```

## About TOON

TOON (Token-Oriented Object Notation) is a compact, human-readable serialization format designed for passing structured data to Large Language Models with significantly reduced token usage.

- 📖 [Documentation](https://github.com/toon-format/toon)
- 📋 [Specification](https://github.com/toon-format/spec)
- 🌐 [Website](https://toonformat.dev)

## Contributing

Contributions are welcome! Please visit:
- [GitHub Repository](https://github.com/vishalraut2106/vscode-toon)
- [Issue Tracker](https://github.com/vishalraut2106/vscode-toon/issues)

## License

MIT License © 2025 TOON Format Contributors
