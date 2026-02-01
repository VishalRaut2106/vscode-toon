# Snippets Guide

Code snippets for quickly creating TOON structures.

## Available Snippets

Type these prefixes and press `Tab` to insert:

### 1. Inline Array (`toon-array-inline`)
Simple array of primitives:
```toon
${1:arrayName}[${2:length}]: ${3:value1},${4:value2}
```

**Example:**
```toon
tags[3]: javascript,typescript,react
```

### 2. Tabular Array (`toon-array-tabular`)
CSV-style array with field headers:
```toon
${1:arrayName}[${2:length}]{${3:field1},${4:field2}}:
  ${5:value1},${6:value2}
  ${7:value3},${8:value4}
```

**Example:**
```toon
users[2]{id,name,email}:
  1,Alice,alice@example.com
  2,Bob,bob@example.com
```

### 3. List Array (`toon-array-list`)
YAML-style array:
```toon
${1:arrayName}[${2:length}]:
  - ${3:key}: ${4:value}
  - ${5:key}: ${6:value}
```

**Example:**
```toon
items[2]:
  - name: Laptop
    price: 999
  - name: Mouse
    price: 29
```

### 4. Object (`toon-object`)
Nested object structure:
```toon
${1:objectName}:
  ${2:key}: ${3:value}
  ${4:key}: ${5:value}
```

**Example:**
```toon
config:
  host: localhost
  port: 3000
```

### 5. Key-Value (`toon-kv`)
Simple key-value pair:
```toon
${1:key}: ${2:value}
```

**Example:**
```toon
version: 1.0.0
```

## Using Snippets

### Basic Usage
1. Type the snippet prefix (e.g., `toon-array-inline`)
2. Press `Tab` to insert the snippet
3. Fill in the placeholders
4. Press `Tab` to move between placeholders
5. Press `Shift+Tab` to go back

### Placeholder Navigation
- `Tab` - Next placeholder
- `Shift+Tab` - Previous placeholder
- `Escape` - Exit snippet mode

## Common Patterns

### User Data
```toon
# Use tabular for uniform user records
users[3]{id,name,email,role}:
  1,Alice,alice@example.com,admin
  2,Bob,bob@example.com,user
  3,Charlie,charlie@example.com,guest
```

### Configuration
```toon
# Use objects for nested config
database:
  host: localhost
  port: 5432
  pool:
    min: 2
    max: 10
```

### Mixed Data
```toon
# Combine different structures
project:
  name: My App
  version: 1.0.0
  dependencies[3]: react,typescript,vite
  contributors[2]{name,role}:
    Alice,developer
    Bob,designer
  features[2]:
    - name: Authentication
      status: complete
    - name: Dashboard
      status: in-progress
```

## Tips

1. **Start with tabular arrays** - they're the most common and efficient
2. **Use meaningful names** for arrays and fields
3. **Keep field names short** to save tokens
4. **Combine snippets** to build complex structures
5. **Use IntelliSense** after inserting snippets for additional help