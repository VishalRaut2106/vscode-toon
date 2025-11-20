# Change Log

All notable changes to the "vscode-toon" extension will be documented in this file.

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
