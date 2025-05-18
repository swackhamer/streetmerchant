#!/bin/bash

# Loop through all series model files
find src/store/model/series -name "*.ts" -not -path "*/common/*" -not -path "*/series-names.ts" -not -path "*/store.ts" | while read -r file; do
  # Update imports to use the common index.ts file instead
  sed -i '' 's#from "../common/link-factory";#from "../common";#g' "$file"
  sed -i '' 's#from "../common/link-factory"#from "../common"#g' "$file"
  
  # More complex imports with multiple imports
  sed -i '' 's#from "../common/store-factory";#from "../common";#g' "$file"
  sed -i '' 's#from "../common/label-sets";#from "../common";#g' "$file"
done

echo "Import paths updated successfully!"