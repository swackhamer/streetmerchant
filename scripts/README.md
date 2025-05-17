# Refactoring Scripts

This directory contains scripts for refactoring the store implementations to reduce code duplication.

## Overview

The refactoring process involves:

1. Converting store files to use the factory approach from `src/store/model/common`
2. Moving product links to series-specific directories
3. Using link factory methods to reduce link duplication

## Scripts

### `refactor-stores.js`

This script analyzes all store files and generates refactored versions:

- Extracts store configuration details
- Organizes links by series
- Generates refactored store files using the factory approach
- Creates series-specific link files using link factory methods

#### Usage

```bash
# Make the script executable
chmod +x scripts/refactor-stores.js

# Run the refactoring script
./scripts/refactor-stores.js
```

The script creates:
- Refactored store files in `src/store/model/refactored/`
- Series-specific link files in `src/store/model/series/{series_name}/`

### `apply-refactoring.js`

This script applies the refactored store files to replace the originals:

- Backs up original store files
- Replaces them with refactored versions
- Updates the index.ts file

#### Usage

```bash
# Make the script executable
chmod +x scripts/apply-refactoring.js

# Review the refactored files first
# Then apply the refactoring
./scripts/apply-refactoring.js
```

## Workflow

1. Run `refactor-stores.js` to generate refactored versions
2. Review the generated files to ensure they're correct
3. Run `apply-refactoring.js` to apply the changes
4. Run tests to verify functionality
5. Commit the changes if successful

## Reverting

If you need to revert the changes:

```bash
# Copy the backup files back to their original locations
cp src/store/model/backup/* src/store/model/
```

## Manual Adjustments

Some stores may require manual adjustments after refactoring:

- Stores with custom behavior may need additional setup logic
- Specialized selectors may need fine-tuning
- The index.ts file may need updates for imports