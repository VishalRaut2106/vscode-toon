# Changelog

All notable changes to the TOON VS Code extension.

## [0.2.8] - 2026-02-01

### Changed
- Simplified extension display name to "TOON Format"
- Cleaned up extension description and branding
- Removed excessive emojis from metadata

### Fixed
- Resolved CI/CD automation issues with workflow triggering
- Fixed marketplace publishing with proper PAT configuration

## [0.2.8] - 2026-02-01

### Changed
- Version bump to 0.2.8


### Added
- Complete CI/CD automation with version bumping
- Automatic marketplace publishing on releases
- Security monitoring and dependency updates

### Fixed
- ESLint and TypeScript ESLint security vulnerabilities
- Workflow automation and release triggering

## [0.2.6] - 2026-02-01

### Fixed
- Package.json merge conflicts
- CI/CD pipeline configuration issues

## [0.2.5] - 2026-01-31

### Added
- Enhanced syntax highlighting for TOON constructs
- IntelliSense with smart autocomplete
- Real-time validation with error diagnostics
- Document formatting with configurable options
- Code snippets for common TOON patterns
- Hover documentation and contextual help
- Bidirectional JSON ↔ TOON conversion commands

### Features
- Support for all TOON array types (inline, tabular, list)
- Configurable delimiters (comma, tab, pipe)
- Array length validation
- Field header support for tabular arrays
- Comment syntax support
- Extension commands via Command Palette

### Technical
- Built with official `@toon-format/toon` package
- TypeScript implementation with strict typing
- Comprehensive test coverage
- Professional CI/CD pipeline
- Security monitoring and updates