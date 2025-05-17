#!/bin/bash

# This script fixes incorrect import paths in series and template files

echo "Fixing import paths in series files..."

# Create the store.ts file in the series directory to export the type
mkdir -p src/store/model/series
cat << 'EOF' > src/store/model/series/store.ts
export * from '../store';
EOF

# Create the common directory in the series directory to re-export factory modules
mkdir -p src/store/model/series/common
cat << 'EOF' > src/store/model/series/common/link-factory.ts
export * from '../../common/link-factory';
EOF

cat << 'EOF' > src/store/model/series/common/store-factory.ts
export * from '../../common/store-factory';
EOF

cat << 'EOF' > src/store/model/series/common/label-sets.ts
export * from '../../common/label-sets';
EOF

# Fix series files to use the exported types
find src/store/model/series -type f -name "*.ts" -exec sed -i '' 's|import .* from '\''../../../store'\''|import {Link} from '\''../store'\''|g' {} \;
find src/store/model/series -type f -name "*.ts" -exec sed -i '' 's|import .* from '\''../../../common/link-factory'\''|import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '\''../common/link-factory'\''|g' {} \;

echo "Fixed import paths"