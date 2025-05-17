#!/bin/bash
# Install ESLint dependencies for streetmerchant project
# This script adds the necessary dependencies for the enhanced ESLint configuration

echo "Installing ESLint dependencies..."

# Install main dependencies
pnpm add -D eslint-plugin-import@^2.29.1 \
  eslint-plugin-promise@^6.1.1 \
  eslint-plugin-security@^2.1.1 \
  eslint-plugin-jest@^27.9.0 \
  eslint-import-resolver-typescript@^3.6.1

echo "ESLint dependencies installed successfully!"
echo ""
echo "You can now run the following commands:"
echo "  pnpm lint          - Check all TypeScript files for issues"
echo "  pnpm lint:fix      - Fix automatically fixable issues"
echo "  pnpm lint:changed  - Lint only files that have changed in git"
echo "  pnpm lint:report   - Generate an HTML report of linting issues"
echo ""
echo "For more commands, see the scripts section in package.json"