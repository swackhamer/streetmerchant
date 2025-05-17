# Series-Based Organization Implementation

This document provides guidance for completing the implementation of the series-based organization system.

## Current Status

1. The core components have been implemented:
   - `src/store/model/series-links.ts` - Core utility for dynamically loading series-specific links
   - `src/store/model/link-validator.ts` - Validates link structure to ensure data quality
   - `src/store/model/auto-load-series.ts` - Automatically detects and configures stores with series links
   - `src/store/model/extended-store.ts` - Extended interfaces for the new system
   - `src/store/model/series/` - Directory structure organized by series

2. Documentation has been updated:
   - `docs/series-based-links.md` - Detailed documentation for the series-based organization system
   - `docs/architecture.md` - Updated to include information about the new system
   - `README.md` - Updated to highlight the series-based organization feature

## Required Fix for Store Files

There are TypeScript compilation errors in the store model files. The main issues are:

1. The `links` property is sometimes incorrectly placed within the `labels` object
2. Missing closing braces for the `labels` object
3. Inconsistent formatting and whitespace

### Fix Pattern

Use this pattern when updating store files:

```typescript
import {Store} from './store';
import {getSeriesLinks} from './series-links';
import {Browser} from 'puppeteer';

export const StoreName: Store = {
  currency: '$', // Use appropriate currency symbol
  labels: {
    inStock: {
      container: '.selector',
      text: ['in stock', 'available'],
    },
    // other label configurations...
  }, // <-- Note the closing brace and comma here
  links: [], // Empty initial links array
  name: 'store-name',
  country: 'US', // Use appropriate country code
  
  // Function to load links for active series
  setupAction: async (browser: Browser) => {
    StoreName.links = await getSeriesLinks('store-name');
  }
};
```

### Recommended Approach

Rather than trying to fix all store files at once:

1. Start with a small subset of store files (e.g., 5-10 popular stores)
2. Fix these files following the pattern above
3. Run the TypeScript compiler to verify the fixes work
4. Create a template/guide for fixing the remaining files
5. Gradually expand to more files

## Testing

Once the store files are fixed, run the following tests:

```bash
# Run TypeScript compilation
pnpm run compile

# Run tests for the series-based organization system
pnpm test test/unit/series-links.test.ts
pnpm test test/unit/link-validator.test.ts
pnpm test test/unit/auto-load-series-links.test.ts
pnpm test test/unit/series-links-filter.test.ts
```

## Updating Store Files

When updating store files, ensure:

1. The `links` property is at the top level of the Store object, not inside `labels`
2. The `setupAction` function correctly loads links using `getSeriesLinks`
3. The file structure follows the pattern shown above
4. All required fields (currency, labels, links, name, country) are present

## Next Steps

1. Fix a small subset of store files following the pattern
2. Verify the fixes with TypeScript compilation
3. Create a more comprehensive guide for fixing all store files
4. Document the process for adding new store files in the future