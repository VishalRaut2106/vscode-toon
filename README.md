# TOON - Token-Efficient Data Format for VS Code

Complete language support for TOON (Token-Oriented Object Notation) - a compact, LLM-friendly data format that reduces token usage by 30-60% compared to JSON.

Perfect for developers working with Large Language Models who want to minimize API costs while maintaining data clarity.

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

Search for "TOON" in the VS Code Extensions marketplace, or install directly:

```bash
code --install-extension vishalraut.vscode-toon
```

## Usage

### File Association
Files with `.toon` extension are automatically recognized.

### Commands
- `TOON: Validate` - Manually validate current TOON file
- `TOON: Convert to JSON` - Convert TOON file to JSON
- `TOON: Convert from JSON` - Convert JSON file to TOON (uses official TOON encoder)

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

## Why TOON?

TOON (Token-Oriented Object Notation) is designed for developers working with LLMs who want to:
- **Save money** on API costs by reducing token usage
- **Maintain clarity** with human-readable structured data
- **Optimize prompts** for better LLM performance

**Token Savings:** 30-60% reduction vs JSON on typical datasets

Learn more:
- 📖 [Documentation](https://github.com/toon-format/toon)
- 📋 [Specification](https://github.com/toon-format/spec)
- 🎮 [Interactive Playground](https://www.curiouslychase.com/playground/format-tokenization-exploration)

## Contributing

Contributions are welcome! Please visit:
- [GitHub Repository](https://github.com/vishalraut2106/vscode-toon)
- [Issue Tracker](https://github.com/vishalraut2106/vscode-toon/issues)
<<<<<<< HEAD

## Author

Created by [Vishal Raut](https://github.com/vishalraut2106)
=======
>>>>>>> f18728c0167ec827c52bec6054ab3a031c01cc31

## License

MIT License © 2025 Vishal Raut
