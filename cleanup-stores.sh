#!/bin/bash
# Script to clean up unused store files after registry migration

# Set the base directory
BASE_DIR=$(pwd)
echo "Working in directory: $BASE_DIR"

# 1. Remove backup stores directory
echo "Removing backup/stores directory..."
rm -rf "$BASE_DIR/backup/stores"

# 2. Remove todelete directory  
echo "Removing todelete directory..."
rm -rf "$BASE_DIR/todelete"

# 3. Remove specific helper files
echo "Removing obsolete helper files..."
[[ -f "$BASE_DIR/src/store/model/store-mapper.ts" ]] && rm "$BASE_DIR/src/store/model/store-mapper.ts"
[[ -f "$BASE_DIR/src/store/model/link-generator.ts" ]] && rm "$BASE_DIR/src/store/model/link-generator.ts"
[[ -f "$BASE_DIR/src/store/model/sample-links.ts" ]] && rm "$BASE_DIR/src/store/model/sample-links.ts"
[[ -f "$BASE_DIR/src/store/model/link-validator.ts" ]] && rm "$BASE_DIR/src/store/model/link-validator.ts"

echo "Cleanup completed successfully!"