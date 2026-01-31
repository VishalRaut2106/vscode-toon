# TOON - Token-Efficient Data Format for VS Code

[![Official TOON Extension](https://img.shields.io/badge/Official-TOON%20Extension-blue?style=for-the-badge&logo=visual-studio-code)](https://github.com/toon-format)
[![Maintained by Vishal Raut](https://img.shields.io/badge/Maintained%20by-Vishal%20Raut-green?style=for-the-badge)](https://github.com/vishalraut2106)
[![TOON Organization](https://img.shields.io/badge/TOON-Organization%20Member-orange?style=for-the-badge)](https://github.com/toon-format)
[![Authentic Extension](https://img.shields.io/badge/⚠️-Beware%20of%20Fake%20Extensions-red?style=for-the-badge)](#-official-authentic-extension)

> **🚨 IMPORTANT**: This is the **OFFICIAL** TOON VS Code extension maintained by **Vishal Raut**, an official member of the [TOON Organization](https://github.com/toon-format). Beware of fake extensions with similar names.

Complete language support for TOON (Token-Oriented Object Notation) - a compact, LLM-friendly data format that reduces token usage by 30-60% compared to JSON.

Perfect for developers working with Large Language Models who want to minimize API costs while maintaining data clarity.

## 🔐 Official Authentic Extension

**⚠️ BEWARE OF FAKE EXTENSIONS**: There are multiple extensions in the VS Code marketplace using the "TOON" name. This is the **ONLY OFFICIAL** extension.

### ✅ How to Verify Authenticity:

1. **Publisher**: `vishalraut` (Vishal Raut)
2. **Extension ID**: `vishalraut.vscode-toon`
3. **Official Repository**: [github.com/vishalraut2106/vscode-toon](https://github.com/vishalraut2106/vscode-toon)
4. **TOON Organization Member**: Vishal Raut is an official member of [github.com/toon-format](https://github.com/toon-format)
5. **Uses Official Package**: `@toon-format/toon` v1.0.0 (official implementation)

### 🚫 Fake Extensions to Avoid:
- Extensions with different publisher names
- Extensions not using the official `@toon-format/toon` package
- Extensions without proper TOON organization affiliation

**Always verify the publisher is `vishalraut` before installing!**

📋 **[Complete Verification Guide →](OFFICIAL-VERIFICATION.md)**

---

## 📖 Table of Contents

- [Features](#-features)
- [Installation](#installation)
- [Getting Started](#-getting-started)
- **[Snippets Documentation](#-snippets-documentation)** ⭐ NEW
- [Usage Guide](#-usage-guide)
- [Configuration](#-configuration)
- [Examples](#-examples)
- [Tips & Best Practices](#-tips--best-practices)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)

## ✨ Features

### 🎨 Syntax Highlighting
- **Color-coded syntax** for all TOON constructs
- Highlights array headers `[N]`, field definitions `{fields}`, keys, values, and delimiters
- Support for all TOON data types (strings, numbers, booleans, null)
- Comment support with `#`

### 💡 IntelliSense & Code Completion
- **Smart autocomplete** for TOON syntax as you type
- Array header suggestions with length declarations
- Tabular array templates with field headers
- Inline array patterns for primitives
- Delimiter suggestions (comma, tab, pipe)
- List item and key-value pair completions

### 📖 Hover Documentation
- **Contextual help** when hovering over TOON elements
- Array length explanations
- Field header information
- Delimiter descriptions and token efficiency tips
- Inline examples and best practices

### ✅ Real-time Validation
- **Automatic validation** as you type using official TOON parser
- Error highlighting with detailed messages
- Strict mode validation for array lengths and structure
- Diagnostics in VS Code Problems panel

### 🔧 Smart Formatting
- **Format on save** support
- Configurable indentation (default: 2 spaces)
- Support for comma, tab, and pipe delimiters
- Aligned with official TOON specification v2.0

### 📝 Code Snippets
- **Quick snippets** for common TOON patterns
- `toon-array-inline` - Inline primitive array
- `toon-array-tabular` - Tabular array of objects
- `toon-array-list` - List array
- `toon-object` - Nested object
- `toon-kv` - Key-value pair

**📖 [Complete Snippets Documentation](SNIPPETS-INDEX.md)** - Learn all 9 snippets with examples and guides

### 🔄 Conversion Commands
- **Convert TOON to JSON** - Decode TOON files to JSON
- **Convert JSON to TOON** - Encode JSON using official TOON encoder
- Opens converted files in new editor tabs

## Installation

> **🚨 SECURITY WARNING**: Only install from the official publisher `vishalraut`. There are fake TOON extensions in the marketplace!

Search for "TOON" in the VS Code Extensions marketplace and look for:
- **Publisher**: `vishalraut` (Vishal Raut)
- **Title**: "TOON - Token-Efficient Data Format (OFFICIAL)"
- **Official Badge**: Look for official verification badges

Or install directly:

```bash
code --install-extension vishalraut.vscode-toon
```

**⚠️ Do NOT install extensions from other publishers claiming to be TOON extensions!**

## 🚀 Getting Started

### File Association
Files with `.toon` extension are automatically recognized and syntax highlighted.

### Quick Start Guide

1. **Create a new file** with `.toon` extension
2. **Start typing** - IntelliSense will suggest TOON syntax
3. **Use snippets** - Type `toon-` and press `Tab` to see available templates
4. **Hover for help** - Hover over any TOON construct for documentation
5. **Format your code** - Right-click → Format Document (or `Shift+Alt+F`)

## 📚 Snippets Documentation

Complete guides for using TOON code snippets:

| Guide | Time | Description |
|-------|------|-------------|
| **[⭐ Quick Start](SNIPPETS-QUICK-START.md)** | 5 min | Get started with your first snippet in 5 minutes |
| **[📖 Testing Guide](SNIPPETS-TESTING-GUIDE.md)** | 20 min | Detailed guide for all 9 snippets with examples |
| **[🎨 Visual Guide](SNIPPETS-VISUAL-GUIDE.md)** | 15 min | Visual diagrams, workflows, and pattern combinations |
| **[✅ Testing Checklist](SNIPPETS-CHECKLIST.md)** | 45 min | Step-by-step testing procedures and verification |
| **[📚 Summary](SNIPPETS-SUMMARY.md)** | 10 min | Quick reference and overview of all snippets |
| **[🗂️ Index](SNIPPETS-INDEX.md)** | - | Master index with navigation and FAQ |
| **[💻 Working Example](examples/snippets-demo.toon)** | - | Complete working code example |

### Quick Snippet Reference

| Snippet | Prefix | Use For |
|---------|--------|---------|
| Inline Array | `toon-array-inline` | Simple lists of primitives |
| **Tabular Array** | `toon-array-tabular` | **Uniform objects (80% of code)** ⭐ |
| List Array | `toon-array-list` | Non-uniform or complex items |
| Object | `toon-object` | Nested key-value structures |
| List Item Object | `toon-list-object` | Mixed list and object structures |
| Key-Value | `toon-kv` | Simple key-value pairs |
| Empty Array | `toon-array-empty` | Empty collections or placeholders |
| Tab-Delimited | `toon-array-tab` | Tab-separated data (TSV) |
| Array Marker | `toon-array-marker` | Strict validation with `[#N]` |

**👉 [Start with Quick Start Guide →](SNIPPETS-QUICK-START.md)**

## 📚 Usage Guide

### Commands

Access via Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`):

| Command | Description |
|---------|-------------|
| `TOON: Validate` | Manually validate current TOON file |
| `TOON: Convert to JSON` | Convert TOON file to JSON format |
| `TOON: Convert from JSON` | Convert JSON file to TOON format |

### IntelliSense Features

**Array Headers** - Type `[` to get suggestions:
```toon
users[3]:        # Array with 3 items
tags[5,]:        # Array with comma delimiter
data[10	]:       # Array with tab delimiter (most efficient)
```

**Tabular Arrays** - Type `{` after array length:
```toon
users[2]{id,name,role}:
  1,Alice,admin
  2,Bob,user
```

**List Items** - Type `-` at the start of a line:
```toon
items[3]:
  - id: 1
    name: Item One
  - id: 2
    name: Item Two
```

### Code Snippets

Type these prefixes and press `Tab`:

| Snippet | Trigger | Description |
|---------|---------|-------------|
| Inline Array | `toon-array-inline` | Primitive array on one line |
| Tabular Array | `toon-array-tabular` | CSV-style array of objects |
| List Array | `toon-array-list` | YAML-style list of items |
| Nested Object | `toon-object` | Object with nested properties |
| Key-Value | `toon-kv` | Simple key-value pair |

### Hover Documentation

Hover over any TOON element to see:
- **Array lengths** - Explanation of `[N]` declarations
- **Field headers** - List of fields in `{field1,field2}`
- **Delimiters** - Token efficiency tips for `,`, `\t`, `|`
- **List markers** - Usage of `-` for array items

## ⚙️ Configuration

Configure the extension in VS Code settings (`Ctrl+,` / `Cmd+,`):

```json
{
  "toon.validation.enabled": true,
  "toon.format.indent": 2,
  "toon.format.delimiter": ","
}
```

### Settings Reference

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `toon.validation.enabled` | boolean | `true` | Enable/disable real-time validation |
| `toon.format.indent` | number | `2` | Number of spaces for indentation |
| `toon.format.delimiter` | string | `","` | Delimiter for arrays: `,` (readable), `\t` (efficient), `\|` (safe) |

### Delimiter Comparison

| Delimiter | Token Efficiency | Readability | Use Case |
|-----------|------------------|-------------|----------|
| `,` (comma) | Good | Excellent | Default, most readable |
| `\t` (tab) | Best | Good | Maximum token savings |
| `\|` (pipe) | Good | Good | Data contains commas |

## 📋 Examples

### Inline Array (Primitives)
```toon
tags[3]: admin,ops,dev
numbers[5]: 1,2,3,4,5
flags[2]: true,false
```

### Tabular Array (CSV-style)
```toon
users[3]{id,name,email,role}:
  1,Alice,alice@example.com,admin
  2,Bob,bob@example.com,user
  3,Charlie,charlie@example.com,guest
```

### List Array (YAML-style)
```toon
products[2]:
  - id: 1
    name: Laptop
    price: 999.99
  - id: 2
    name: Mouse
    price: 29.99
```

### Nested Objects
```toon
config:
  database:
    host: localhost
    port: 5432
    credentials:
      username: admin
      password: secret
  cache:
    enabled: true
    ttl: 3600
```

### Mixed Structures
```toon
company:
  name: Acme Corp
  employees[2]{id,name,department}:
    1,Alice,Engineering
    2,Bob,Sales
  offices[3]:
    - city: New York
      country: USA
    - city: London
      country: UK
    - city: Tokyo
      country: Japan
```

## 💡 Tips & Best Practices

### When to Use Each Format

**Tabular Arrays** - Best for uniform data:
```toon
users[100]{id,name,email}:
  1,Alice,alice@example.com
  2,Bob,bob@example.com
  ...
```
✅ 30-60% fewer tokens than JSON  
✅ Clear structure for LLMs  
✅ Easy to read and edit

**List Arrays** - Best for varied structures:
```toon
items[3]:
  - type: book
    title: "1984"
  - type: movie
    title: "Inception"
    year: 2010
```
✅ Flexible field sets  
✅ YAML-like readability

**Inline Arrays** - Best for simple lists:
```toon
tags[5]: javascript,typescript,react,node,vscode
```
✅ Most compact format  
✅ Perfect for primitives

### Token Optimization

1. **Use tab delimiters** for maximum savings:
   ```toon
   data[3	]{a,b,c}:
     1	2	3
   ```

2. **Avoid unnecessary nesting** - flatten when possible

3. **Use tabular format** for uniform arrays of objects

4. **Keep field names short** but meaningful

## 🎯 Why TOON?

TOON (Token-Oriented Object Notation) is designed for developers working with LLMs who want to:
- **Save money** on API costs by reducing token usage (30-60% vs JSON)
- **Maintain clarity** with human-readable structured data
- **Optimize prompts** for better LLM performance
- **Improve accuracy** with explicit structure (array lengths, field headers)

### Resources

- 📖 [Official Documentation](https://github.com/toon-format/toon)
- 📋 [TOON Specification v2.0](https://github.com/toon-format/spec)
- 🎮 [Interactive Playground](https://www.curiouslychase.com/playground/format-tokenization-exploration)
- 🔧 [TOON Tools](https://toontools.vercel.app/)
- 💬 [GitHub Discussions](https://github.com/toon-format/toon/discussions)

## ⌨️ Keyboard Shortcuts

| Action | Windows/Linux | macOS |
|--------|---------------|-------|
| Format Document | `Shift+Alt+F` | `Shift+Option+F` |
| Command Palette | `Ctrl+Shift+P` | `Cmd+Shift+P` |
| Trigger IntelliSense | `Ctrl+Space` | `Cmd+Space` |
| Show Hover | Hover with mouse | Hover with mouse |
| Insert Snippet | `Tab` | `Tab` |
| Next Placeholder | `Tab` | `Tab` |
| Previous Placeholder | `Shift+Tab` | `Shift+Tab` |

## 📚 Snippets Resources

Complete documentation for TOON code snippets:

### Getting Started
- **[⭐ Quick Start (5 min)](SNIPPETS-QUICK-START.md)** - Perfect for beginners, get your first snippet working in 5 minutes
- **[💻 Working Example](examples/snippets-demo.toon)** - See all 9 snippets in action

### Learning
- **[📖 Testing Guide (20 min)](SNIPPETS-TESTING-GUIDE.md)** - Detailed guide for each of the 9 snippets with real-world examples
- **[🎨 Visual Guide (15 min)](SNIPPETS-VISUAL-GUIDE.md)** - Visual diagrams, workflows, and pattern combinations

### Testing & Reference
- **[✅ Testing Checklist (45 min)](SNIPPETS-CHECKLIST.md)** - Step-by-step procedures to test all snippets
- **[📚 Summary](SNIPPETS-SUMMARY.md)** - Quick reference for all snippets and common issues
- **[🗂️ Index](SNIPPETS-INDEX.md)** - Master index with navigation and FAQ
- **[📋 Documentation Package](SNIPPETS-DOCUMENTATION-COMPLETE.md)** - Overview of all documentation

### The 9 Snippets

| # | Snippet | Prefix | Example |
|---|---------|--------|---------|
| 1 | Inline Array | `toon-array-inline` | `colors[3]: red,green,blue` |
| 2 | **Tabular Array** ⭐ | `toon-array-tabular` | `users[2]{id,name}: 1,Alice` |
| 3 | List Array | `toon-array-list` | `items[2]: - item1 - item2` |
| 4 | Object | `toon-object` | `config: setting: value` |
| 5 | List Item Object | `toon-list-object` | `- key: value field: data` |
| 6 | Key-Value | `toon-kv` | `version: 1.0.0` |
| 7 | Empty Array | `toon-array-empty` | `archived[0]:` |
| 8 | Tab-Delimited | `toon-array-tab` | Tab-separated data |
| 9 | Array Marker | `toon-array-marker` | `items[#2]{id,name}:` |

**👉 [Start Learning Snippets →](SNIPPETS-QUICK-START.md)**

## 🐛 Troubleshooting

### Validation Not Working
- Check that `toon.validation.enabled` is `true` in settings
- Ensure the file has `.toon` extension
- Try reloading VS Code window (`Ctrl+Shift+P` → "Reload Window")

### IntelliSense Not Appearing
- Press `Ctrl+Space` to manually trigger
- Check that you're in a `.toon` file
- Verify the extension is activated (check Extensions panel)

### Formatting Issues
- Ensure you have the latest version of the extension
- Check your format settings in VS Code preferences
- Try formatting selection first (`Ctrl+K Ctrl+F`)

### Conversion Errors
- Verify your JSON/TOON syntax is valid
- Check the Output panel for detailed error messages
- Ensure you're using the correct command for the file type

## 🤝 Contributing

Contributions are welcome! Please visit:
- [GitHub Repository](https://github.com/vishalraut2106/vscode-toon)
- [Issue Tracker](https://github.com/vishalraut2106/vscode-toon/issues)
- [Pull Requests](https://github.com/vishalraut2106/vscode-toon/pulls)

### Development Setup
```bash
git clone https://github.com/vishalraut2106/vscode-toon.git
cd vscode-toon
npm install
npm run compile
# Press F5 to launch Extension Development Host
```

### CI/CD Pipeline
This project uses automated CI/CD for:
- ✅ Automated testing and building
- 🚀 Automatic marketplace publishing on releases
- 🔐 Security monitoring and dependency updates
- 📦 Version management and release automation

**For maintainers**: See [CI/CD Setup Guide](setup-cicd.md) and [Quick Reference](CICD-QUICK-REFERENCE.md)

## 📄 License

MIT License © 2025 Vishal Raut

## 🏢 Official TOON Organization

This extension is officially maintained by **Vishal Raut**, a verified member of the TOON organization:

- 🏠 **TOON Organization**: [github.com/toon-format](https://github.com/toon-format)
- 📋 **Official TOON Spec**: [github.com/toon-format/toon](https://github.com/toon-format/toon)
- 👨‍💻 **Maintainer**: [github.com/vishalraut2106](https://github.com/vishalraut2106)
- 🔐 **Verification**: [OFFICIAL-VERIFICATION.md](OFFICIAL-VERIFICATION.md)

## 🙏 Acknowledgments

- [TOON Format](https://github.com/toon-format/toon) - Official TOON specification and implementation
- [Johann Schopplich](https://github.com/johannschopplich) - TOON creator
- VS Code Extension API - Microsoft

---

## ⚠️ Final Security Reminder

**This is the ONLY OFFICIAL TOON extension**. Always verify:
- Publisher: `vishalraut`
- Extension ID: `vishalraut.vscode-toon`
- Official repository links to TOON organization

**Report fake extensions to protect the community!**
