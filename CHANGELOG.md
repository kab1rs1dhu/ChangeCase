# Change Log

All notable changes to the **ChangeCase** extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.1] - 2024-10-03

### Added
- **Initial release** of ChangeCase extension
- Six text case conversion commands:
  - Convert to UPPERCASE
  - Convert to lowercase
  - Convert to Title Case
  - Convert to camelCase
  - Convert to snake_case
  - Convert to CONSTANT_CASE
- Comprehensive keyboard shortcuts for all platforms:
  - Windows/Linux: `Ctrl+Shift+[U/L/T/C/S/K]`
  - macOS: `Cmd+Shift+[U/L/T/C/S/K]`
- Command palette integration for all conversion commands
- Smart text conversion algorithms:
  - Preserves existing formatting where appropriate
  - Handles mixed input formats intelligently
  - Supports PascalCase to camelCase conversion
  - Maintains snake_case format when appropriate
- Multi-line text selection support
- Special characters and numbers handling
- Comprehensive test suite with 56+ test cases covering:
  - Basic functionality for all conversion types
  - Edge cases (empty strings, special characters, numbers)
  - Programming scenarios and naming conventions
  - Performance testing for large strings
  - Error handling for invalid inputs
  - Integration testing with VS Code extension API

### Technical Details
- Built with JavaScript
- VS Code API version 1.104.0+
- Modular architecture with separated conversion logic
- Comprehensive error handling
- Performance optimized for large text selections

---

## Release Notes

### What's New in v0.0.1
This is the initial release of ChangeCase, bringing powerful text case conversion capabilities to VS Code. Perfect for developers working across different programming languages and naming conventions.

**Key Features:**
- 🚀 **Instant conversions** with keyboard shortcuts
- 🎯 **Smart algorithms** that understand context
- 🔧 **Six conversion modes** for all use cases
- ⚡ **High performance** even with large text selections
- 🧪 **Thoroughly tested** with comprehensive test suite

**Perfect for:**
- JavaScript/TypeScript developers (camelCase)
- Python developers (snake_case)
- Constants and environment variables (CONSTANT_CASE)
- Documentation and general text formatting

### Future Plans
- Additional case conversion formats
- Custom keyboard shortcut configuration
- Batch conversion for multiple selections
- Integration with other VS Code features

---

**Created by Kabir Singh Sidhu** | [Portfolio](https://kabirsidhu.dev/)