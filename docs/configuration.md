# Configuration

Customize the TOON extension behavior through VS Code settings.

## Settings

Access settings via `File > Preferences > Settings` or `Ctrl+,`.

### Validation

```json
{
  "toon.validation.enabled": true
}
```

- **Type**: boolean
- **Default**: `true`
- **Description**: Enable/disable real-time validation

### Formatting

```json
{
  "toon.format.indent": 2,
  "toon.format.delimiter": ","
}
```

#### `toon.format.indent`
- **Type**: number
- **Default**: `2`
- **Description**: Number of spaces for indentation

#### `toon.format.delimiter`
- **Type**: string
- **Default**: `","`
- **Options**: `","`, `"\t"`, `"|"`
- **Description**: Default delimiter for arrays

## Delimiter Options

### Comma (`,`) - Default
- **Readability**: Excellent
- **Token Efficiency**: Good
- **Use Case**: General purpose, most readable

```toon
users[2]{id,name}: 1,Alice 2,Bob
```

### Tab (`\t`) - Most Efficient
- **Readability**: Good
- **Token Efficiency**: Best
- **Use Case**: Maximum token savings

```toon
users[2	]{id,name}: 1	Alice 2	Bob
```

### Pipe (`|`) - Safe for Data
- **Readability**: Good
- **Token Efficiency**: Good
- **Use Case**: When data contains commas

```toon
users[2|]{name,address}: Alice|123 Main St, NYC Bob|456 Oak Ave, LA
```

## File Association

The extension automatically activates for `.toon` files. To associate other extensions:

```json
{
  "files.associations": {
    "*.toon": "toon",
    "*.tn": "toon"
  }
}
```

## Workspace Settings

Create `.vscode/settings.json` in your project:

```json
{
  "toon.format.delimiter": "\t",
  "toon.format.indent": 4,
  "editor.formatOnSave": true,
  "editor.tabSize": 2
}
```

## Language-Specific Settings

Configure TOON-specific editor behavior:

```json
{
  "[toon]": {
    "editor.insertSpaces": true,
    "editor.tabSize": 2,
    "editor.formatOnSave": true,
    "editor.wordWrap": "off"
  }
}
```

## Recommended Settings

For optimal TOON development experience:

```json
{
  "toon.validation.enabled": true,
  "toon.format.indent": 2,
  "toon.format.delimiter": ",",
  "[toon]": {
    "editor.formatOnSave": true,
    "editor.insertSpaces": true,
    "editor.tabSize": 2,
    "editor.wordWrap": "off",
    "editor.minimap.enabled": false
  }
}
```