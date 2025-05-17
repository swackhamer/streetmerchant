#!/bin/bash

# This script fixes the common issue in store model files where
# the 'links' property is incorrectly placed inside the 'labels' object

for file in src/store/model/*.ts; do
  # Skip directories, index files, and helper files
  if [ -d "$file" ] || [ "$(basename "$file")" == "index.ts" ] || [ "$(basename "$file")" == "store.ts" ] || [ "$(basename "$file")" == "extended-store.ts" ] || [ "$(basename "$file")" == "series-links.ts" ] || [ "$(basename "$file")" == "link-validator.ts" ] || [ "$(basename "$file")" == "auto-load-series.ts" ] || [ "$(basename "$file")" == "sample-store-series.ts" ]; then
    continue
  fi

  # Find if there is a syntax error with "links: []" inside "labels: {"
  if grep -q "  links: \[\]" "$file" && grep -q "  labels: {" "$file"; then
    echo "Fixing $file"
    
    # Use sed to fix the store file structure (closing the labels object properly)
    sed -i'' -e 's/\(    },\)\n  links: \[\]/\1\n  },\n  links: \[\]/g' "$file"
  fi
done

echo "Done fixing store files"