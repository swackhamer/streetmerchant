#!/bin/bash
# This script installs the ESLint dependencies required for the configuration

# Install eslint and related plugins
pnpm add -D eslint@^8.57.0 \
  @typescript-eslint/eslint-plugin@^7.10.0 \
  @typescript-eslint/parser@^7.10.0 \
  eslint-config-prettier@^9.1.0 \
  eslint-plugin-import@^2.29.1 \
  eslint-plugin-jest@^27.9.0 \
  eslint-plugin-node@^11.1.0 \
  eslint-plugin-prettier@^5.1.3 \
  eslint-plugin-promise@^6.1.1 \
  eslint-plugin-security@^2.1.1 \
  eslint-import-resolver-typescript@^3.6.1 \
  prettier@^3.2.5

echo "ESLint dependencies installed successfully!"
echo "You can now run 'pnpm lint' to check your code or 'pnpm fix' to automatically fix issues."