# TOON Snippets - Quick Start (5 Minutes)

## Installation Check

✅ TOON extension installed?
✅ VS Code open?
✅ Ready to go!

## Step 1: Create a Test File (30 seconds)

1. Open VS Code
2. Create new file: `Ctrl+N`
3. Save as: `test.toon` (Ctrl+S)
4. Confirm language is "TOON" (bottom right)

## Step 2: Try Your First Snippet (1 minute)

**Type this:**
```
toon-array-tabular
```

**Press:** `Tab`

**You should see:**
```toon
items[2]{id,name}:
  1,Alice
  2,Bob
```

**Congratulations!** You just used your first snippet! 🎉

## Step 3: Edit the Template (2 minutes)

The template has **placeholders** (highlighted text). Edit them:

1. **First placeholder** is already selected: `items`
   - Type: `employees`
   - Press: `Tab`

2. **Second placeholder**: `2`
   - Type: `3`
   - Press: `Tab`

3. **Third placeholder**: `id,name`
   - Type: `id,name,department`
   - Press: `Tab`

4. **Continue editing** the data rows:
   - `1,Alice` → `1,Alice,Engineering`
   - `2,Bob` → `2,Bob,Sales`
   - Add: `3,Carol,Marketing`

**Final result:**
```toon
employees[3]{id,name,department}:
  1,Alice,Engineering
  2,Bob,Sales
  3,Carol,Marketing
```

## Step 4: Verify It Works (1 minute)

1. Open Problems panel: `Ctrl+Shift+M`
2. Should be **empty** (no errors)
3. Syntax highlighting should be applied
4. You're done! ✨

## All 9 Snippets - One Line Each

| Prefix | What It Does |
|--------|-------------|
| `toon-array-inline` | Simple list: `key[3]: a,b,c` |
| `toon-array-tabular` | Table: `key[N]{fields}:` rows |
| `toon-array-list` | YAML list: `key[N]: - item` |
| `toon-object` | Nested: `key: field: value` |
| `toon-list-object` | List items: `- key: value` |
| `toon-kv` | Simple pair: `key: value` |
| `toon-array-empty` | Empty: `key[0]:` |
| `toon-array-tab` | Tab-separated data |
| `toon-array-marker` | Strict validation: `key[#N]` |

## Most Used: Tabular Array ⭐

**Use this 80% of the time:**

```
Prefix: toon-array-tabular
For: Tables of objects (CSV-style)
Example:
  users[2]{id,name,email}:
    1,Alice,alice@example.com
    2,Bob,bob@example.com
```

## Quick Workflow

```
1. Type snippet prefix
   ↓
2. Press Tab to insert
   ↓
3. Edit first placeholder
   ↓
4. Press Tab to move to next
   ↓
5. Repeat until done
   ↓
6. Press Tab to exit
   ↓
7. Done! ✨
```

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Ctrl+Space` | Show all snippets |
| `Tab` | Insert snippet / Move to next placeholder |
| `Shift+Tab` | Move to previous placeholder |
| `Escape` | Exit snippet editing |

## Common Patterns

### Pattern 1: Simple Table
```
Prefix: toon-array-tabular
Result:
  users[2]{id,name}:
    1,Alice
    2,Bob
```

### Pattern 2: Configuration
```
Prefix: toon-object
Result:
  config:
    setting: value
```

### Pattern 3: Simple List
```
Prefix: toon-array-inline
Result:
  colors[3]: red,green,blue
```

### Pattern 4: Key-Value
```
Prefix: toon-kv
Result:
  version: 1.0.0
```

## Troubleshooting

**Problem:** Snippet doesn't appear
- **Solution:** Press `Ctrl+Space` to trigger IntelliSense

**Problem:** Can't edit placeholder
- **Solution:** Click on it and start typing

**Problem:** Tab key doesn't work
- **Solution:** Make sure cursor is in the snippet

**Problem:** Syntax errors
- **Solution:** Check indentation and field counts

## Next Steps

1. ✅ Try `toon-array-tabular` (most common)
2. ✅ Try `toon-object` (nested data)
3. ✅ Try `toon-kv` (simple pairs)
4. ✅ Try `toon-array-inline` (simple lists)
5. ✅ Read `SNIPPETS-TESTING-GUIDE.md` for all 9

## Real Example: Build an API Response

**Step 1:** Type `toon-kv` and press Tab
```toon
key: value
```

**Step 2:** Edit to:
```toon
status: success
```

**Step 3:** Type `toon-array-tabular` and press Tab
```toon
items[2]{id,name}:
  1,Alice
  2,Bob
```

**Step 4:** Edit to:
```toon
data[2]{id,name,email}:
  1,Alice,alice@example.com
  2,Bob,bob@example.com
```

**Step 5:** Type `toon-kv` and press Tab
```toon
key: value
```

**Step 6:** Edit to:
```toon
timestamp: 2025-11-21T10:30:00Z
```

**Final Result:**
```toon
status: success
data[2]{id,name,email}:
  1,Alice,alice@example.com
  2,Bob,bob@example.com
timestamp: 2025-11-21T10:30:00Z
```

Perfect! 🎉

## Pro Tips

💡 **Tip 1:** Use `toon-array-tabular` for 80% of your code

💡 **Tip 2:** Combine multiple snippets to build complex structures

💡 **Tip 3:** Press `Ctrl+Space` to see all available snippets

💡 **Tip 4:** Tab key navigates between placeholders

💡 **Tip 5:** Snippets save ~50% typing time

## Cheat Sheet

```
┌──────────────────────────────────────────┐
│ TOON SNIPPETS CHEAT SHEET                │
├──────────────────────────────────────────┤
│                                          │
│ MOST USED:                               │
│ toon-array-tabular  → Tables ⭐          │
│                                          │
│ COMMON:                                  │
│ toon-object         → Nested data        │
│ toon-kv             → Simple pairs       │
│ toon-array-inline   → Simple lists       │
│                                          │
│ SPECIAL:                                 │
│ toon-array-list     → Complex items      │
│ toon-list-object    → Mixed lists        │
│ toon-array-empty    → Placeholders       │
│ toon-array-tab      → Tab-separated      │
│ toon-array-marker   → Strict validation  │
│                                          │
│ HOW TO USE:                              │
│ 1. Type prefix                           │
│ 2. Press Tab                             │
│ 3. Edit placeholders                     │
│ 4. Press Tab to navigate                 │
│                                          │
└──────────────────────────────────────────┘
```

## You're Ready! 🚀

You now know:
- ✅ How to insert snippets
- ✅ How to edit placeholders
- ✅ The most common snippet (tabular array)
- ✅ How to combine snippets

**Start using snippets now!** Open a `.toon` file and type `toon-array-tabular`.

## Want More Details?

- **Full Guide:** `SNIPPETS-TESTING-GUIDE.md`
- **Step-by-Step:** `SNIPPETS-CHECKLIST.md`
- **Visual Examples:** `SNIPPETS-VISUAL-GUIDE.md`
- **Complete Summary:** `SNIPPETS-SUMMARY.md`
- **Working Example:** `examples/snippets-demo.toon`

---

**Happy coding with TOON snippets!** ✨
