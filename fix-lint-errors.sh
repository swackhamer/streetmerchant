#!/bin/bash
# Script to systematically fix linting errors in key files

set -e  # Exit on error

# List of important files to fix
FILES=(
  "src/browser.ts"
  "src/logger.ts"
  "src/store/model/series-modules/data-access.ts"
  "src/store/model/series-modules/link-filter.ts"
  "src/store/model/series-modules/data-store.ts"
  "src/store/model/refactored/common/label-sets.ts"
  "src/store/model/refactored/common/link-factory.ts"
  "src/store/model/refactored/common/series-links.ts"
  "src/store/model/refactored/common/store-factory.ts"
  "src/store/model/refactored/link-generator.ts"
  "src/store/model/refactored/series-data.ts"
  "src/store/model/refactored/store-registry.ts"
)

# Fix each file
for file in "${FILES[@]}"; do
  echo "Fixing $file..."
  pnpm lint:file "$file" || echo "Could not fix all issues in $file"
done

echo "Done fixing files! You may need to manually fix remaining issues."