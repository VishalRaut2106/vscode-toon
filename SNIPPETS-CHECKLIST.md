# TOON Snippets - Interactive Testing Checklist

## Pre-Test Setup

- [ ] VS Code is open
- [ ] TOON extension is installed and active
- [ ] Create a new file: `test-snippets.toon`
- [ ] File shows "TOON" language in status bar

---

## Snippet Testing Checklist

### 1. Inline Array - `toon-array-inline`

**Test Steps:**
1. [ ] Type: `toon-array-inline`
2. [ ] Press `Tab` to insert
3. [ ] Verify template appears: `key[3]: value1,value2,value3`
4. [ ] Press `Tab` to highlight first placeholder
5. [ ] Type: `colors`
6. [ ] Press `Tab` to move to next placeholder
7. [ ] Type: `4`
8. [ ] Press `Tab` and edit values: `red,green,blue,yellow`

**Expected Result:**
```toon
colors[4]: red,green,blue,yellow
```

**Validation:**
- [ ] No errors in Problems panel
- [ ] Syntax highlighting applied
- [ ] All placeholders editable

---

### 2. Tabular Array - `toon-array-tabular`

**Test Steps:**
1. [ ] Type: `toon-array-tabular`
2. [ ] Press `Tab` to insert
3. [ ] Verify template shows:
   ```toon
   items[2]{id,name}:
     1,Alice
     2,Bob
   ```
4. [ ] Edit `items` to `employees`
5. [ ] Edit `[2]` to `[3]`
6. [ ] Edit fields: `{id,name}` → `{id,name,department}`
7. [ ] Add third row: `3,Carol,Marketing`

**Expected Result:**
```toon
employees[3]{id,name,department}:
  1,Alice,Engineering
  2,Bob,Sales
  3,Carol,Marketing
```

**Validation:**
- [ ] No errors in Problems panel
- [ ] Field count matches row values
- [ ] Array length `[3]` matches 3 rows
- [ ] Proper indentation maintained

---

### 3. List Array - `toon-array-list`

**Test Steps:**
1. [ ] Type: `toon-array-list`
2. [ ] Press `Tab` to insert
3. [ ] Verify template shows:
   ```toon
   items[2]:
     - value1
     - value2
   ```
4. [ ] Edit `items` to `tasks`
5. [ ] Edit `[2]` to `[3]`
6. [ ] Edit values:
   - `- Complete documentation`
   - `- Review code`
   - `- Deploy to production`

**Expected Result:**
```toon
tasks[3]:
  - Complete documentation
  - Review code
  - Deploy to production
```

**Validation:**
- [ ] No errors in Problems panel
- [ ] All items start with `-`
- [ ] Proper indentation (2 spaces)
- [ ] Array length matches item count

---

### 4. Object - `toon-object`

**Test Steps:**
1. [ ] Type: `toon-object`
2. [ ] Press `Tab` to insert
3. [ ] Verify template shows:
   ```toon
   key:
     field: value
   ```
4. [ ] Edit `key` to `database`
5. [ ] Edit `field` to `host`
6. [ ] Edit `value` to `localhost`
7. [ ] Add more fields:
   ```toon
   database:
     host: localhost
     port: 5432
     username: admin
   ```

**Expected Result:**
```toon
database:
  host: localhost
  port: 5432
  username: admin
```

**Validation:**
- [ ] No errors in Problems panel
- [ ] Proper indentation (2 spaces)
- [ ] All fields aligned
- [ ] Nested structure recognized

---

### 5. List Item Object - `toon-list-object`

**Test Steps:**
1. [ ] Type: `toon-list-object`
2. [ ] Press `Tab` to insert
3. [ ] Verify template shows:
   ```toon
   - key: value
     field: value
   ```
4. [ ] Edit to create notification:
   ```toon
   - type: email
     recipient: user@example.com
   ```
5. [ ] Add second item:
   ```toon
   - type: sms
     recipient: +1234567890
   ```

**Expected Result:**
```toon
notifications[2]:
  - type: email
    recipient: user@example.com
  - type: sms
    recipient: +1234567890
```

**Validation:**
- [ ] No errors in Problems panel
- [ ] Each item starts with `-`
- [ ] Fields properly indented under items
- [ ] Structure recognized as list of objects

---

### 6. Key-Value - `toon-kv`

**Test Steps:**
1. [ ] Type: `toon-kv`
2. [ ] Press `Tab` to insert
3. [ ] Verify template shows: `key: value`
4. [ ] Edit to: `version: 1.0.0`
5. [ ] Repeat for more properties:
   - `author: John Doe`
   - `license: MIT`
   - `created: 2025-11-21`

**Expected Result:**
```toon
version: 1.0.0
author: John Doe
license: MIT
created: 2025-11-21
```

**Validation:**
- [ ] No errors in Problems panel
- [ ] Simple key-value format
- [ ] All values properly assigned

---

### 7. Empty Array - `toon-array-empty`

**Test Steps:**
1. [ ] Type: `toon-array-empty`
2. [ ] Press `Tab` to insert
3. [ ] Verify template shows: `items[0]:`
4. [ ] Edit to: `archived_items[0]:`
5. [ ] Add more empty arrays:
   - `pending_reviews[0]:`
   - `deleted_users[0]:`

**Expected Result:**
```toon
archived_items[0]:
pending_reviews[0]:
deleted_users[0]:
```

**Validation:**
- [ ] No errors in Problems panel
- [ ] All show `[0]` (zero items)
- [ ] Proper format for empty collections

---

### 8. Tab-Delimited Array - `toon-array-tab`

**Test Steps:**
1. [ ] Type: `toon-array-tab`
2. [ ] Press `Tab` to insert
3. [ ] Verify template shows tab-delimited structure
4. [ ] Edit to create product list:
   ```toon
   products[2]{sku	name	price}:
     SKU001	Laptop	999.99
     SKU002	Mouse	29.99
   ```

**Expected Result:**
```toon
products[2]{sku	name	price}:
  SKU001	Laptop	999.99
  SKU002	Mouse	29.99
```

**Validation:**
- [ ] No errors in Problems panel
- [ ] Fields separated by tabs (not commas)
- [ ] Values separated by tabs
- [ ] Enable "Render Whitespace" to see tabs

---

### 9. Array with Length Marker - `toon-array-marker`

**Test Steps:**
1. [ ] Type: `toon-array-marker`
2. [ ] Press `Tab` to insert
3. [ ] Verify template shows: `items[#2]{id,name}:`
4. [ ] Edit to create orders:
   ```toon
   orders[#2]{order_id,customer,total}:
     ORD-001,Alice,150.00
     ORD-002,Bob,275.50
   ```

**Expected Result:**
```toon
orders[#2]{order_id,customer,total}:
  ORD-001,Alice,150.00
  ORD-002,Bob,275.50
```

**Validation:**
- [ ] No errors in Problems panel
- [ ] `#` marker present in `[#2]`
- [ ] Enables strict validation
- [ ] Detects if rows don't match count

---

## Advanced Testing

### Placeholder Navigation Test

**Test Steps:**
1. [ ] Insert any snippet
2. [ ] Verify first placeholder is highlighted
3. [ ] Press `Tab` to move to next placeholder
4. [ ] Verify placeholder is highlighted
5. [ ] Continue pressing `Tab` through all placeholders
6. [ ] Verify cursor exits snippet after last placeholder

**Expected Result:**
- [ ] Smooth navigation through all placeholders
- [ ] Each placeholder editable
- [ ] No skipped placeholders

---

### Multiple Placeholder Test

**Test Steps:**
1. [ ] Insert `toon-array-tabular`
2. [ ] Edit first `${1:items}` to `users`
3. [ ] Verify all instances of `${1:...}` update together
4. [ ] Move to next placeholder with `Tab`
5. [ ] Edit `${2:2}` to `3`

**Expected Result:**
- [ ] Related placeholders update together
- [ ] No duplicate editing needed
- [ ] Clean placeholder replacement

---

### Syntax Validation Test

**Test Steps:**
1. [ ] Create file with all 9 snippets
2. [ ] Open Problems panel (`Ctrl+Shift+M`)
3. [ ] Verify no errors appear
4. [ ] Check each snippet is valid TOON

**Expected Result:**
- [ ] Problems panel is empty
- [ ] All snippets are valid
- [ ] No syntax errors

---

### Conversion Test

**Test Steps:**
1. [ ] Create file with multiple snippets
2. [ ] Run command: `TOON: Convert to JSON`
3. [ ] Verify JSON output is valid
4. [ ] Check data structure matches TOON

**Expected Result:**
- [ ] JSON file opens in new tab
- [ ] JSON is properly formatted
- [ ] All data preserved in conversion

---

## Real-World Scenario Tests

### Scenario 1: Build a User Database

**Test Steps:**
1. [ ] Use `toon-object` for metadata
2. [ ] Use `toon-array-tabular` for users
3. [ ] Use `toon-kv` for summary stats
4. [ ] Verify no errors

**Expected Result:**
```toon
metadata:
  version: 1.0
  created: 2025-11-21

users[2]{id,name,email,role}:
  1,Alice,alice@example.com,admin
  2,Bob,bob@example.com,user

total_users: 2
```

---

### Scenario 2: Build an API Response

**Test Steps:**
1. [ ] Use `toon-kv` for status
2. [ ] Use `toon-array-tabular` for data
3. [ ] Use `toon-kv` for timestamp
4. [ ] Verify structure

**Expected Result:**
```toon
status: success
data[2]{id,name,status}:
  1,Alice,active
  2,Bob,inactive
timestamp: 2025-11-21T10:30:00Z
```

---

### Scenario 3: Build Configuration

**Test Steps:**
1. [ ] Use `toon-object` for sections
2. [ ] Use `toon-kv` for settings
3. [ ] Use `toon-array-inline` for lists
4. [ ] Verify no errors

**Expected Result:**
```toon
app:
  name: MyApp
  debug: false

features[3]: auth,api,dashboard

database:
  host: localhost
  port: 5432
```

---

## Performance Tests

### Test 1: Snippet Insertion Speed

**Test Steps:**
1. [ ] Insert 10 snippets in sequence
2. [ ] Measure time (should be instant)
3. [ ] Verify all insert correctly

**Expected Result:**
- [ ] All snippets insert immediately
- [ ] No lag or delay
- [ ] Responsive UI

---

### Test 2: Large File Performance

**Test Steps:**
1. [ ] Create file with 50+ snippets
2. [ ] Verify no performance degradation
3. [ ] Check syntax highlighting still works
4. [ ] Verify validation still responsive

**Expected Result:**
- [ ] File remains responsive
- [ ] Syntax highlighting applied
- [ ] Validation works smoothly

---

## Troubleshooting Tests

### Test 1: Snippet Not Appearing

**Steps:**
1. [ ] Verify file is `.toon`
2. [ ] Press `Ctrl+Space` to trigger IntelliSense
3. [ ] Type snippet prefix
4. [ ] Verify autocomplete shows snippet

**Expected Result:**
- [ ] Snippet appears in autocomplete
- [ ] Description visible
- [ ] Can be selected

---

### Test 2: Placeholder Not Editable

**Steps:**
1. [ ] Insert snippet
2. [ ] Click on placeholder
3. [ ] Try to type
4. [ ] Verify text is editable

**Expected Result:**
- [ ] Placeholder is editable
- [ ] Text replaces placeholder
- [ ] No read-only errors

---

## Summary Checklist

### All Snippets Tested
- [ ] Inline Array
- [ ] Tabular Array
- [ ] List Array
- [ ] Object
- [ ] List Item Object
- [ ] Key-Value
- [ ] Empty Array
- [ ] Tab-Delimited Array
- [ ] Array with Length Marker

### All Features Verified
- [ ] Snippets insert correctly
- [ ] Placeholders are editable
- [ ] Navigation works smoothly
- [ ] Syntax highlighting applied
- [ ] No validation errors
- [ ] Conversion to JSON works
- [ ] Performance is good
- [ ] Real-world scenarios work

### Overall Status
- [ ] All tests passed
- [ ] No issues found
- [ ] Ready for production use

---

## Notes

Use this space to record any issues or observations:

```
Issue 1: 
Resolution:

Issue 2:
Resolution:

Observation 1:

Observation 2:
```

---

## Quick Reference

| Snippet | Prefix | Shortcut |
|---------|--------|----------|
| Inline Array | `toon-array-inline` | Type + Tab |
| Tabular Array | `toon-array-tabular` | Type + Tab |
| List Array | `toon-array-list` | Type + Tab |
| Object | `toon-object` | Type + Tab |
| List Item Object | `toon-list-object` | Type + Tab |
| Key-Value | `toon-kv` | Type + Tab |
| Empty Array | `toon-array-empty` | Type + Tab |
| Tab-Delimited | `toon-array-tab` | Type + Tab |
| Array Marker | `toon-array-marker` | Type + Tab |

**Pro Tip:** Use `Ctrl+Space` to trigger IntelliSense if autocomplete doesn't appear automatically!
