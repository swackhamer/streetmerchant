# Contributing to Streetmerchant

Thank you for considering contributing to Streetmerchant! This document outlines the process for contributing to the project.

## Code of Conduct

This project adheres to the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How to Contribute

### Reporting Bugs

1. Ensure the bug was not already reported by searching [Issues](https://github.com/swackhamer/streetmerchant/issues)
2. If you're unable to find an open issue addressing the problem, open a new one with:
   - A clear title
   - A detailed description
   - As much relevant information as possible (OS, Node.js version, etc.)
   - A code sample or executable test case demonstrating the issue

### Suggesting Features

1. Open an issue with a clear title and detailed description
2. Explain why this feature would be useful to most Streetmerchant users
3. Suggest an implementation approach if possible

### Pull Requests

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes following the [commit message standards](#commit-message-standards)
4. Push to your branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request against the `main` branch

### Development Workflow

1. Install dependencies with `pnpm install`
2. Make your changes
3. Run tests with `pnpm test`
4. Ensure code passes linting with `pnpm run lint`
5. Fix any linting issues with `pnpm run fix`

## Commit Message Standards

We follow a modified version of the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Changes that do not affect code meaning (whitespace, formatting)
- `refactor`: Code changes that neither fix a bug nor add a feature
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Changes to build process or auxiliary tools

Example:
```
feat: add support for new retailer

- Add store model for NewRetailer
- Implement custom selectors for stock checking
- Add documentation for NewRetailer configuration
```

## Development Environment

### Prerequisites

- Node.js 20 or later
- pnpm

### Setup

```bash
# Clone the repository
git clone https://github.com/swackhamer/streetmerchant.git
cd streetmerchant

# Enable pnpm and install dependencies
corepack enable
pnpm install

# Create test configuration
cp dotenv-example dotenv
```

## Testing

```bash
# Run all tests
pnpm test

# Run notification tests
pnpm run test:notification

# Run desktop notification tests
pnpm run test:desktop-notification

# Run captcha tests
pnpm run test:captcha
```

## Adding a New Store

See the [Extension Guide](./docs/extension-guide.md) for detailed instructions on adding new stores.

## Questions?

If you have any questions about contributing, please open an issue with the tag "question".