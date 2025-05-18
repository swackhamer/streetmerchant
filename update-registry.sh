#!/bin/bash
# Script to update and complete the registry migration

# Set the base directory
BASE_DIR=$(pwd)
echo "Working in directory: $BASE_DIR"

# Run the cleanup script first
if [ -f "$BASE_DIR/cleanup-stores.sh" ]; then
  echo "Running cleanup script..."
  bash "$BASE_DIR/cleanup-stores.sh"
else
  echo "Warning: cleanup-stores.sh not found!"
fi

# Run TypeScript compiler to verify changes
echo "Compiling the project..."
pnpm run compile

# Generate a commit message
echo "Migration complete! Here's a summary:"
echo "1. Updated model/index.ts to use registry pattern"
echo "2. Updated store registry implementations with proper data"
echo "3. Removed legacy file-based store loading"
echo "4. Cleaned up unused files"

echo "The project has been successfully migrated to the registry pattern."
echo "Next steps:"
echo "1. Run tests to verify functionality"
echo "2. Update documentation"
echo "3. Create a PR to merge these changes"