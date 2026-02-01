# TOON Format

VS Code extension for TOON (Token-Oriented Object Notation) - a compact data format that reduces token usage by 30-60% compared to JSON.

## Features

- **Syntax Highlighting** - Full TOON syntax support with color coding
- **IntelliSense** - Smart autocomplete for arrays, objects, and delimiters  
- **Validation** - Real-time error checking with detailed diagnostics
- **Formatting** - Auto-format with configurable indentation and delimiters
- **Snippets** - Quick templates for common TOON patterns
- **Conversion** - Bidirectional JSON ↔ TOON conversion

## Installation

```bash
code --install-extension vishalraut.vscode-toon
```

## Quick Start

1. Create a file with `.toon` extension
2. Start typing - IntelliSense will guide you
3. Use snippets: type `toon-` and press Tab
4. Format with `Shift+Alt+F`

## TOON Syntax Examples

### Arrays
```toon
# Inline array
tags[3]: javascript,typescript,react

# Tabular array (CSV-style)
users[2]{id,name,email}:
  1,Alice,alice@example.com
  2,Bob,bob@example.com

# List array (YAML-style)  
items[2]:
  - name: Laptop
    price: 999
  - name: Mouse
    price: 29
```

### Objects
```toon
config:
  database:
    host: localhost
    port: 5432
  cache:
    enabled: true
    ttl: 3600
```

## Commands

- `TOON: Validate` - Check syntax
- `TOON: Convert to JSON` - Export as JSON
- `TOON: Convert from JSON` - Import from JSON

## Configuration

```json
{
  "toon.validation.enabled": true,
  "toon.format.indent": 2,
  "toon.format.delimiter": ","
}
```

## Why TOON?

TOON is designed for developers working with Large Language Models:

- **30-60% fewer tokens** than JSON
- **Explicit structure** with array lengths and field headers
- **Human readable** with familiar syntax
- **LLM optimized** for better parsing and generation

## Documentation

- [Getting Started](docs/getting-started.md)
- [TOON Syntax](docs/syntax.md)
- [Snippets Guide](docs/snippets.md)
- [Configuration](docs/configuration.md)

## Resources

- [TOON Specification](https://github.com/toon-format/toon)
- [Interactive Playground](https://www.curiouslychase.com/playground/format-tokenization-exploration)

## License

MIT © 2025 Vishal Raut