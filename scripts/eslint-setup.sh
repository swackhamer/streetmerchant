#!/bin/bash
#
# ESLint setup script for Streetmerchant
# This script installs and configures ESLint with GTS and additional plugins
#

set -e

echo "Setting up ESLint with Google TypeScript Style (GTS) for Streetmerchant..."

# Install required dependencies
echo "Installing dependencies..."
pnpm add -D gts@^3.1.0 \
  eslint@^7.30.0 \
  @typescript-eslint/eslint-plugin@^4.28.0 \
  @typescript-eslint/parser@^4.28.0 \
  eslint-plugin-import@^2.29.1 \
  eslint-plugin-jest@^27.9.0 \
  eslint-plugin-promise@^6.1.1 \
  eslint-plugin-security@^2.1.1 \
  eslint-import-resolver-typescript@^3.6.1 

echo "Dependencies installed successfully!"

# Create .eslintignore if it doesn't exist
if [ ! -f .eslintignore ]; then
  echo "Creating .eslintignore file..."
  cat > .eslintignore << EOF
node_modules/
build/
coverage/
src/types/**/*.d.ts
EOF
  echo ".eslintignore created!"
fi

echo "ESLint setup complete!"
echo "You can now run 'pnpm run lint' to check your code, or 'pnpm run lint:fix' to automatically fix issues."
echo "For more information, refer to LINTING.md."