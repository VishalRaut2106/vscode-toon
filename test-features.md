# TOON Extension Feature Test Checklist

## Test Files Created
- `test-syntax.toon` - Test syntax highlighting
- `test-validation.toon` - Test validation errors
- `test-conversion.json` - Test JSON to TOON conversion
- `test-formatting.toon` - Test formatting

## Feature Testing

### ✅ 1. Syntax Highlighting
**File:** `test-syntax.toon`
**Test:** Open the file and verify colors for:
- [ ] Array headers `[N]` - should be highlighted
- [ ] Field definitions `{field1,field2}` - should be highlighted
- [ ] Keys - should be highlighted
- [ ] Values (strings, numbers, booleans, null) - should be highlighted
- [ ] Delimiters (`,`, `\t`, `|`) - should be highlighted
- [ ] List markers `-` - should be highlighted
- [ ] Comments `#` - should be highlighted

### ✅ 2. IntelliSense/Code Completion
**File:** Create new `.toon` file
**Test:**
- [ ] Type `[` - should show array header suggestions
- [ ] Type `{` after `[3]` - should show field header suggestion
- [ ] Type `-` at line start - should show list item suggestion
- [ ] Press `Ctrl+Space` - should show all completions
- [ ] Select a completion - should insert snippet with placeholders

### ✅ 3. Hover Documentation
**File:** `test-syntax.toon`
**Test:** Hover over:
- [ ] Array length `[3]` - should show explanation
- [ ] Field header `{id,name}` - should show field list
- [ ] Delimiter `,` or `\t` - should show delimiter info
- [ ] List marker `-` - should show list item info

### ✅ 4. Real-time Validation
**File:** `test-validation.toon`
**Test:**
- [ ] Open file with errors - should show red squiggles
- [ ] Check Problems panel - should list errors
- [ ] Fix errors - squiggles should disappear
- [ ] Invalid array length - should show error
- [ ] Mismatched field count - should show error

### ✅ 5. Formatting
**File:** `test-formatting.toon`
**Test:**
- [ ] Right-click → Format Document - should format
- [ ] `Shift+Alt+F` - should format
- [ ] Format on save - should auto-format when saving
- [ ] Check indentation is consistent
- [ ] Check delimiter is preserved

### ✅ 6. Code Snippets
**File:** Create new `.toon` file
**Test:** Type and press Tab:
- [ ] `toon-array-inline` - should create inline array
- [ ] `toon-array-tabular` - should create tabular array
- [ ] `toon-array-list` - should create list array
- [ ] `toon-object` - should create nested object
- [ ] `toon-kv` - should create key-value pair

### ✅ 7. Conversion Commands
**Test:**
- [ ] Open `test-conversion.json`
- [ ] Command Palette → "TOON: Convert from JSON"
- [ ] Should open new tab with TOON format
- [ ] Convert back: "TOON: Convert to JSON"
- [ ] Should match original JSON structure

### ✅ 8. Configuration
**Test:**
- [ ] Open Settings → search "toon"
- [ ] Change `toon.format.indent` to 4
- [ ] Format a file - should use 4 spaces
- [ ] Change `toon.format.delimiter` to tab
- [ ] Convert JSON - should use tab delimiter
- [ ] Toggle `toon.validation.enabled` - validation should enable/disable

## Results

**Total Features:** 8
**Tested:** ___
**Passed:** ___
**Failed:** ___

## Notes
