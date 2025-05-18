#!/bin/bash
#
# Script to fix common linting errors in bulk
#

set -e  # Exit on error

echo "Fixing common linting errors across the codebase..."

# Fix console.log statements to use console.info/warn/error
echo "Replacing console.log with console.info..."
find src -type f -name "*.ts" ! -path "*/test/*" -exec sed -i '' -E 's/console\.log\(chalk\.blue\(\[/console.info(chalk.blue([/g' {} \; 2>/dev/null || true

# List of important files to fix separately
FILES=(
  "src/browser.ts"
  "src/logger.ts"
  "src/store/filter.ts"
  "src/store/model/series-modules/link-filter.ts"
  "src/store/model/common/store-factory.ts"
  "src/store/lookup.ts"
  "src/config/store-config.ts"
  "src/config/index.ts"
)

# Fix each file
for file in "${FILES[@]}"; do
  if [ -f "$file" ]; then
    echo "Fixing $file..."
    pnpm lint:file "$file" || echo "Could not fix all issues in $file"
  fi
done

# Run full linting with fixes
echo "Running full ESLint fixing pass..."
pnpm run lint:fix

echo "Done! Most common linting issues should be fixed now."
echo "You may still need to manually fix some issues. Check with 'pnpm run lint'."