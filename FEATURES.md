# Features

Complete feature overview for the TOON VS Code extension.

## Language Support

### Syntax Highlighting
- **Array headers** with length declarations `[N]`
- **Field definitions** for tabular arrays `{field1,field2}`
- **Delimiters** (comma, tab, pipe) with distinct colors
- **Comments** with `#` syntax
- **Strings, numbers, booleans** with appropriate styling
- **Keywords** and structural elements

### IntelliSense & Autocomplete
- **Array header suggestions** with length placeholders
- **Tabular array templates** with field headers
- **Delimiter suggestions** with efficiency hints
- **List item completions** for YAML-style arrays
- **Key-value pair suggestions**
- **Context-aware completions** based on cursor position

### Validation & Diagnostics
- **Real-time validation** using official TOON parser
- **Array length checking** against declared sizes
- **Syntax error highlighting** with detailed messages
- **Structure validation** for tabular arrays
- **Problems panel integration** with VS Code diagnostics

### Hover Documentation
- **Array length explanations** for `[N]` declarations
- **Field header information** showing column structure
- **Delimiter efficiency tips** comparing token usage
- **Syntax help** with examples and best practices
- **Contextual documentation** for TOON constructs

## Code Editing

### Formatting
- **Auto-formatting** with Format Document command
- **Configurable indentation** (spaces or tabs)
- **Delimiter normalization** to preferred style
- **Structure alignment** for readability
- **Format on save** support

### Snippets
- **Inline arrays** for primitive lists
- **Tabular arrays** for structured data
- **List arrays** for complex objects
- **Nested objects** with proper indentation
- **Key-value pairs** for simple data
- **Tab navigation** between snippet placeholders

### Commands
- **TOON: Validate** - Manual syntax checking
- **TOON: Convert to JSON** - Export TOON as JSON
- **TOON: Convert from JSON** - Import JSON as TOON
- **Command Palette integration** with `Ctrl+Shift+P`

## Configuration

### Settings
- **Validation toggle** - Enable/disable real-time checking
- **Indentation control** - Spaces per indent level
- **Default delimiter** - Comma, tab, or pipe preference
- **Workspace-specific** settings support

### File Association
- **Automatic activation** for `.toon` files
- **Custom file extensions** via settings
- **Language mode switching** support

## Integration

### VS Code Features
- **Problems panel** for error reporting
- **Output channel** for extension logs
- **Status bar** indicators for TOON files
- **File explorer** integration with icons

### Workflow Support
- **Format on save** compatibility
- **Multi-cursor editing** support
- **Find and replace** with TOON syntax awareness
- **Code folding** for nested structures

## Performance

### Efficiency
- **Incremental parsing** for large files
- **Lazy validation** to avoid blocking UI
- **Optimized syntax highlighting** for smooth editing
- **Memory-efficient** processing

### Scalability
- **Large file support** with streaming validation
- **Background processing** for non-blocking operations
- **Caching** for improved responsiveness