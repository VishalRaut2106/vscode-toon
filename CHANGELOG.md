# Change Log

All notable changes to the "vscode-toon" extension will be documented in this file.

## [0.2.0] - 2025-11-21

### 🎉 Major Release - All Features Complete (8/8)

### Added
- **IntelliSense/Code Completion** (`src/completion.ts`)
  - Smart autocomplete for TOON syntax as you type
  - Array headers with length declarations
  - Tabular arrays with field headers
  - Inline arrays for primitives
  - List items and key-value pairs
  - Delimiter suggestions (comma, tab, pipe)
  - Snippet-based with placeholders
  
- **Hover Documentation** (`src/hover.ts`)
  - Contextual help when hovering over TOON constructs
  - Array length explanations
  - Field header information with field lists
  - Delimiter descriptions and token efficiency tips
  - List item documentation
  - Inline examples

### Changed
- **Spec Compatibility**: Updated to `@toon-format/toon` v1.0.0
- Removed deprecated `lengthMarker` option (not in TOON v1.0.0 API)
- All features now use official TOON encoder/decoder

### Improved
- **Documentation**: Complete rewrite with comprehensive user guide
  - Feature overview with examples
  - Usage guide for all features
  - Keyboard shortcuts reference
  - Troubleshooting section
  - Tips & best practices
  - Configuration guide
- **Testing**: Added comprehensive test files
  - `test-syntax.toon` - Syntax highlighting test
  - `test-validation.toon` - Validation error test
  - `test-conversion.json` - Conversion test
  - `test-formatting.toon` - Formatting test
  - `TEST-RESULTS.md` - Complete test results
  - `FEATURES.md` - Feature documentation

### Summary
All 8 core features are now implemented and tested:
1. ✅ Syntax Highlighting
2. ✅ IntelliSense & Code Completion
3. ✅ Hover Documentation
4. ✅ Real-time Validation
5. ✅ Smart Formatting
6. ✅ Code Snippets
7. ✅ Conversion Commands
8. ✅ Configuration

## [0.1.4] - 2025-11-20

### Changed
- Simplified JSON to TOON conversion to use official TOON encoder defaults - removed confusing "nested vs flattened" options that didn't match TOON's design
- Removed `toon.convertFromJsonFlat` command - use standard `toon.convertFromJson` instead

### Fixed
- Fixed conversion to match official TOON specification output exactly

## [0.1.3] - 2025-11-20

### Fixed
- Fixed nested object detection in arrays - now properly prompts users to choose between nested or flattened format when converting JSON arrays containing nested objects

## [0.1.0] - 2025-11-09

### Added
- Initial release
- Syntax highlighting for .toon files
- Real-time validation with error highlighting
- Document formatting support
- Code snippets for common patterns
- Convert TOON to JSON command
- Convert JSON to TOON command
- Configurable indentation and delimiters
- Support for comma, tab, and pipe delimiters
- Optional length marker support
