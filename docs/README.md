# Streetmerchant Documentation

This directory contains the comprehensive documentation for the Streetmerchant project.

## Core Documentation

- **[Getting Started](./getting-started.md)** - Installation and initial setup instructions
- **[Usage Guide](./usage.md)** - How to use Streetmerchant effectively
- **[Configuration Reference](./configuration-reference.md)** - Complete reference for all configuration options
- **[Troubleshooting](./troubleshooting.md)** - Solutions for common issues and problems

## Technical Documentation

- **[Architecture Overview](./architecture.md)** - Technical architecture and system components
- **[Memory Bank](./memory-bank.md)** - Quick reference for project components and concepts
- **[Extension Guide](./extension-guide.md)** - How to extend Streetmerchant with new stores or features

## Project Information

- **[Changelog](./changelog.md)** - History of changes and improvements to the project
- **[Future Plans](./future-plans.md)** - Roadmap and planned improvements

## Documentation Building

This documentation uses [MkDocs](https://www.mkdocs.org/) with the Material theme. The documentation site can be built using:

```bash
# Install MkDocs and dependencies
pip install mkdocs mkdocs-material

# Build the documentation
mkdocs build

# Or serve the documentation locally
mkdocs serve
```

## Contributing to Documentation

Contributions to documentation are welcome! When contributing:

1. Follow the existing style and format
2. Use Markdown for formatting
3. Place images in the `assets/images` directory
4. Reference other documents using relative links
5. Update the navigation in `mkdocs.yml` if adding new pages