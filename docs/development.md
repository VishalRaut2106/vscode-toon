# Development Guide

Contributing to the TOON VS Code extension.

## Development Setup

### Prerequisites
- Node.js 20+
- VS Code
- Git

### Clone and Setup
```bash
git clone https://github.com/vishalraut2106/vscode-toon.git
cd vscode-toon
npm install
```

### Development Workflow
```bash
# Compile TypeScript
npm run compile

# Watch for changes
npm run watch

# Package extension
npm run package

# Run linting
npm run lint
```

### Testing
1. Press `F5` to launch Extension Development Host
2. Open a `.toon` file to test features
3. Make changes and reload (`Ctrl+R`) to test

## Project Structure

```
vscode-toon/
├── src/                    # TypeScript source
│   ├── extension.ts        # Main extension entry
│   ├── completion.ts       # IntelliSense provider
│   ├── formatter.ts        # Document formatter
│   ├── hover.ts           # Hover provider
│   └── validator.ts       # Validation provider
├── syntaxes/              # Syntax highlighting
│   └── toon.tmLanguage.json
├── snippets/              # Code snippets
│   └── toon.json
├── examples/              # Example files
├── docs/                  # Documentation
├── .github/workflows/     # CI/CD automation
└── package.json          # Extension manifest
```

## Key Components

### Extension Activation (`src/extension.ts`)
Main entry point that registers all providers:
- Completion provider for IntelliSense
- Hover provider for documentation
- Formatter for code formatting
- Validator for error checking

### Syntax Highlighting (`syntaxes/toon.tmLanguage.json`)
TextMate grammar for TOON syntax highlighting:
- Array headers `[N]`
- Field definitions `{fields}`
- Delimiters and values
- Comments and strings

### Code Snippets (`snippets/toon.json`)
VS Code snippet definitions for common TOON patterns.

## CI/CD Pipeline

Automated workflows handle:
- **Build & Test**: Compile and validate on every push
- **Security**: Monitor dependencies for vulnerabilities
- **Release**: Automatic version bumping and marketplace publishing

### Release Process
1. Run version bump workflow manually
2. CI/CD automatically builds and publishes
3. Extension appears on VS Code Marketplace

## Contributing

### Bug Reports
1. Check existing issues
2. Provide minimal reproduction case
3. Include VS Code and extension versions

### Feature Requests
1. Describe the use case
2. Provide examples if applicable
3. Consider implementation complexity

### Pull Requests
1. Fork the repository
2. Create feature branch
3. Add tests if applicable
4. Update documentation
5. Submit PR with clear description

## Code Style

- Use TypeScript strict mode
- Follow existing code patterns
- Add JSDoc comments for public APIs
- Use meaningful variable names
- Keep functions focused and small

## Testing

### Manual Testing
1. Test all snippet types
2. Verify IntelliSense suggestions
3. Check hover documentation
4. Test validation errors
5. Verify formatting behavior

### Extension Testing
```bash
# Install development version
code --install-extension vscode-toon-*.vsix

# Test in clean environment
code --disable-extensions --enable-extension vishalraut.vscode-toon
```

## Debugging

### Extension Host Debugging
1. Set breakpoints in TypeScript files
2. Press `F5` to launch debug session
3. Use Debug Console for inspection

### Output Channels
Check VS Code Output panel:
- Select "TOON" from dropdown
- View extension logs and errors

## Dependencies

### Core Dependencies
- `@toon-format/toon` - Official TOON parser/encoder
- `vscode` - VS Code API types

### Development Dependencies
- `typescript` - TypeScript compiler
- `eslint` - Code linting
- `@vscode/vsce` - Extension packaging

## Release Notes

Update `CHANGELOG.md` for each release:
- New features
- Bug fixes
- Breaking changes
- Migration notes