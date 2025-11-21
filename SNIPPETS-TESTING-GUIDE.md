# TOON Snippets Testing Guide

## Overview

The TOON VS Code extension includes **9 built-in snippets** for common patterns. This guide shows you how to test and use each one.

## Quick Start

1. Open a `.toon` file in VS Code
2. Type a snippet prefix (e.g., `toon-array-inline`)
3. Press `Tab` or `Enter` to insert
4. Use `Tab` to navigate between placeholders
5. Edit the template as needed

## Snippet Reference

### 1. Inline Array - `toon-array-inline`

**Prefix:** `toon-array-inline`

**Template:**
```toon
key[3]: value1,value2,value3
```

**Use Cases:**
- Simple lists of primitives (strings, numbers, booleans)
- Quick inline data
- Flat arrays without objects

**Example:**
```toon
colors[4]: red,green,blue,yellow
active[2]: true,false
ids[5]: 1,2,3,4,5
```

**Test Steps:**
1. Create new `.toon` file
2. Type: `toon-array-inline`
3. Press `Tab`
4. Should see: `key[3]: value1,value2,value3`
5. Edit placeholders with `Tab` key

---

### 2. Tabular Array - `toon-array-tabular`

**Prefix:** `toon-array-tabular`

**Template:**
```toon
items[2]{id,name}:
  1,Alice
  2,Bob
```

**Use Cases:**
- **MOST COMMON** - Uniform arrays of objects
- CSV-style data
- Database records
- Structured data with consistent fields

**Example:**
```toon
employees[3]{id,name,department,salary}:
  1,Alice Johnson,Engineering,95000
  2,Bob Smith,Sales,75000
  3,Carol White,Marketing,80000
```

**Test Steps:**
1. Type: `toon-array-tabular`
2. Press `Tab`
3. Should see template with 2 rows
4. Edit field names: `id,name` → `id,name,email,role`
5. Add more rows following the pattern

---

### 3. List Array - `toon-array-list`

**Prefix:** `toon-array-list`

**Template:**
```toon
items[2]:
  - value1
  - value2
```

**Use Cases:**
- Non-uniform items
- Complex nested structures
- YAML-style lists
- Variable-length content

**Example:**
```toon
tasks[3]:
  - Complete project documentation
  - Review pull requests
  - Deploy to production

features[2]:
  - name: Authentication
    description: User login system
  - name: Dashboard
    description: Analytics view
```

**Test Steps:**
1. Type: `toon-array-list`
2. Press `Tab`
3. Should see list with dashes
4. Add more items with `- ` prefix
5. Can nest objects under items

---

### 4. Object - `toon-object`

**Prefix:** `toon-object`

**Template:**
```toon
key:
  field: value
```

**Use Cases:**
- Nested key-value structures
- Configuration objects
- Hierarchical data
- Grouped properties

**Example:**
```toon
database:
  host: localhost
  port: 5432
  username: admin
  password: secret

cache:
  enabled: true
  ttl: 3600
  strategy: lru
```

**Test Steps:**
1. Type: `toon-object`
2. Press `Tab`
3. Should see nested structure
4. Add more fields by duplicating the pattern
5. Can nest objects within objects

---

### 5. List Item Object - `toon-list-object`

**Prefix:** `toon-list-object`

**Template:**
```toon
- key: value
  field: value
```

**Use Cases:**
- List items with object properties
- Mixed list and object structures
- Notifications, events, logs
- Items with metadata

**Example:**
```toon
notifications[2]:
  - type: email
    recipient: user@example.com
    subject: Welcome
  - type: sms
    recipient: +1234567890
    message: Verification code
```

**Test Steps:**
1. Type: `toon-list-object`
2. Press `Tab`
3. Should see list item with object
4. Duplicate for multiple items
5. Add more fields to each item

---

### 6. Key-Value - `toon-kv`

**Prefix:** `toon-kv`

**Template:**
```toon
key: value
```

**Use Cases:**
- Simple properties
- Metadata
- Configuration values
- Quick key-value pairs

**Example:**
```toon
version: 1.0.0
author: John Doe
license: MIT
created: 2025-11-21
```

**Test Steps:**
1. Type: `toon-kv`
2. Press `Tab`
3. Should see: `key: value`
4. Edit key and value
5. Repeat for multiple properties

---

### 7. Empty Array - `toon-array-empty`

**Prefix:** `toon-array-empty`

**Template:**
```toon
items[0]:
```

**Use Cases:**
- Empty collections
- Placeholder arrays
- Optional data that's currently empty
- Schema definition

**Example:**
```toon
archived_items[0]:
pending_reviews[0]:
deleted_users[0]:
```

**Test Steps:**
1. Type: `toon-array-empty`
2. Press `Tab`
3. Should see: `items[0]:`
4. Edit the key name
5. Later, add items by changing `[0]` to `[N]`

---

### 8. Tab-Delimited Array - `toon-array-tab`

**Prefix:** `toon-array-tab`

**Template:**
```toon
items[2]{id	name}:
  1	Alice
  2	Bob
```

**Use Cases:**
- Tab-separated data
- Alternative to comma delimiter
- TSV (Tab-Separated Values) format
- Compatibility with tab-based systems

**Example:**
```toon
products[3]{sku	name	price	stock}:
	SKU001	Laptop	999.99	15
	SKU002	Mouse	29.99	150
	SKU003	Keyboard	79.99	45
```

**Test Steps:**
1. Type: `toon-array-tab`
2. Press `Tab`
3. Should see tab-delimited structure
4. Note: Tabs separate fields (not commas)
5. Useful for data from spreadsheets

---

### 9. Array with Length Marker - `toon-array-marker`

**Prefix:** `toon-array-marker`

**Template:**
```toon
items[#2]{id,name}:
  1,Alice
  2,Bob
```

**Use Cases:**
- Explicit length validation
- Strict mode validation
- Ensuring data completeness
- Detecting truncated data

**Example:**
```toon
orders[#3]{order_id,customer,total}:
  ORD-001,Alice,150.00
  ORD-002,Bob,275.50
  ORD-003,Carol,320.00
```

**Test Steps:**
1. Type: `toon-array-marker`
2. Press `Tab`
3. Should see: `items[#2]{id,name}:`
4. The `#` marker enables strict validation
5. Useful for critical data

---

## Complete Testing Workflow

### Step 1: Create Test File
```bash
# Create a new file
touch test-snippets.toon
```

### Step 2: Test Each Snippet
Follow this sequence in your test file:

```toon
# Test 1: Inline Array
friends[3]: alice,bob,charlie

# Test 2: Tabular Array
users[2]{id,name,email}:
  1,Alice,alice@example.com
  2,Bob,bob@example.com

# Test 3: List Array
tasks[2]:
  - Task 1
  - Task 2

# Test 4: Object
config:
  setting1: value1
  setting2: value2

# Test 5: List Item Object
items[1]:
  - key: value
    field: data

# Test 6: Key-Value
version: 1.0.0

# Test 7: Empty Array
archived[0]:

# Test 8: Tab-Delimited Array
data[1]{col1	col2}:
	val1	val2

# Test 9: Array with Marker
records[#1]{id,name}:
  1,Test
```

### Step 3: Verify Each Snippet
- [ ] Inline Array inserts correctly
- [ ] Tabular Array shows field headers
- [ ] List Array uses dashes
- [ ] Object shows nested structure
- [ ] List Item Object combines both
- [ ] Key-Value is simple pair
- [ ] Empty Array shows `[0]:`
- [ ] Tab-Delimited uses tabs
- [ ] Array Marker shows `[#N]`

### Step 4: Test Placeholder Navigation
1. Insert a snippet
2. Press `Tab` to move between placeholders
3. Verify all placeholders are editable
4. Check that related placeholders update together

### Step 5: Test in Real Scenario
Use the provided `examples/snippets-demo.toon` file:
1. Open `toon/vscode-toon/examples/snippets-demo.toon`
2. Review each section
3. Verify it's valid TOON (no errors in Problems panel)
4. Try converting to JSON using `TOON: Convert to JSON` command

---

## Troubleshooting

### Snippets Not Appearing

**Problem:** Typing snippet prefix doesn't show autocomplete

**Solutions:**
1. Verify file extension is `.toon`
2. Press `Ctrl+Space` to trigger IntelliSense
3. Check extension is active (look for "TOON" in status bar)
4. Restart VS Code

### Snippets Not Inserting

**Problem:** Snippet prefix appears but doesn't insert

**Solutions:**
1. Press `Tab` or `Enter` (not just typing)
2. Check that snippet is highlighted in autocomplete
3. Verify no conflicting keybindings
4. Try `Ctrl+Shift+P` → "Insert Snippet"

### Placeholder Navigation Not Working

**Problem:** `Tab` key doesn't move between placeholders

**Solutions:**
1. Make sure you're inside the snippet (cursor in template)
2. Check Tab key isn't bound to something else
3. Try `Ctrl+Shift+P` → "Go to Next Snippet Placeholder"

### Tab Characters Not Showing

**Problem:** Tab-delimited snippet shows spaces instead of tabs

**Solutions:**
1. Enable "Render Whitespace" in VS Code
2. Check editor settings for tab/space conversion
3. Verify file is saved as `.toon`

---

## Advanced Usage

### Creating Custom Snippets

You can add your own snippets:

1. Open Command Palette: `Ctrl+Shift+P`
2. Type: "Configure User Snippets"
3. Select: "toon"
4. Add custom snippet:

```json
{
  "My Custom Pattern": {
    "prefix": "my-pattern",
    "body": [
      "${1:key}[${2:count}]{${3:fields}}:",
      "  ${4:values}"
    ],
    "description": "My custom TOON pattern"
  }
}
```

### Combining Snippets

Build complex structures by nesting snippets:

1. Insert `toon-object`
2. Inside, insert `toon-array-tabular`
3. Add more `toon-kv` pairs

Example:
```toon
metadata:
  version: 1.0.0
  created: 2025-11-21

users[2]{id,name}:
  1,Alice
  2,Bob

status: active
```

---

## Performance Tips

- **Use Inline Arrays** for simple data (faster to type)
- **Use Tabular Arrays** for structured data (most efficient)
- **Use List Arrays** only when needed (less efficient)
- **Combine patterns** to build complex structures efficiently

---

## Real-World Examples

### Example 1: API Response
```toon
status: success
data[2]{id,name,email}:
  1,Alice,alice@example.com
  2,Bob,bob@example.com
timestamp: 2025-11-21T10:30:00Z
```

### Example 2: Configuration
```toon
app:
  name: MyApp
  version: 1.0.0
  debug: false

database:
  host: localhost
  port: 5432
  credentials:
    username: admin
    password: secret

features[3]: auth,api,dashboard
```

### Example 3: Data Export
```toon
export_date: 2025-11-21
records[3]{id,name,status,created}:
  1,Alice,active,2025-01-15
  2,Bob,inactive,2025-02-20
  3,Carol,active,2025-03-10
total: 3
```

---

## Summary

| Snippet | Prefix | Best For |
|---------|--------|----------|
| Inline Array | `toon-array-inline` | Simple primitives |
| Tabular Array | `toon-array-tabular` | Uniform objects ⭐ |
| List Array | `toon-array-list` | Non-uniform items |
| Object | `toon-object` | Nested structures |
| List Item Object | `toon-list-object` | Mixed lists |
| Key-Value | `toon-kv` | Simple pairs |
| Empty Array | `toon-array-empty` | Placeholders |
| Tab-Delimited | `toon-array-tab` | TSV data |
| Array Marker | `toon-array-marker` | Strict validation |

**Pro Tip:** Start with `toon-array-tabular` for most use cases - it's the most efficient and commonly used pattern!
