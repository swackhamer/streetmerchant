# Series-Based Links Organization

This document explains how the series-based links organization works in the streetmerchant codebase.

## Overview

The series-based organization system structures product links by series (e.g., 3080, 3070, rx6800) rather than by store. This approach provides better organization, improved maintainability, and more efficient link management.

## Directory Structure

The series-based organization uses the following directory structure:

```
src/store/model/
├── amazon.ts               # Main store implementation
├── bestbuy.ts              # Main store implementation
├── newegg.ts               # Main store implementation
├── series-links.ts         # Utility for loading series-specific links
├── auto-load-series.ts     # Automatic series link loading
├── sample-store-series.ts  # Example store implementation
└── series/                 # Series-specific directories
    ├── 3080/               # Links for 3080 series
    │   ├── amazon.ts       # Amazon links for 3080 series
    │   ├── bestbuy.ts      # Best Buy links for 3080 series
    │   └── newegg.ts       # Newegg links for 3080 series
    ├── 3070/               # Links for 3070 series
    │   ├── amazon.ts       # Amazon links for 3070 series
    │   ├── bestbuy.ts      # Best Buy links for 3070 series
    │   └── newegg.ts       # Newegg links for 3070 series
    ├── common/            # Shared utilities
    │   ├── link-factory.ts
    │   ├── store-factory.ts
    │   └── label-sets.ts
    ├── series-names.ts    # Utility to discover available series
    ├── store.ts           # Re-export of Store interface
    └── ...                 # Other series directories
```

## How It Works

1. Each store is automatically configured to load series links via the `initializeSeriesLinksLoader` function.
2. The store's `setupAction` is enhanced to load links dynamically using the `getSeriesLinks` utility.
3. The `getSeriesLinks` utility function loads links from series-specific files based on the store name and active series.
4. When the application starts, it loads only the links for the active series, improving performance and maintainability.

## File Format

A typical series-specific link file follows this format:

```typescript
// src/store/model/series/3080/amazon.ts
import {Link, Brand, Series, Model} from '../../store';
import {createLink} from '../common/link-factory';

export const links: Link[] = [
  createLink({
    brand: 'nvidia' as Brand,
    model: 'founders edition' as Model,
    series: '3080' as Series,
    url: 'https://www.amazon.com/nvidia-rtx-3080',
    // Optional additional fields
    cartUrl: 'https://www.amazon.com/gp/cart/add.html?ASIN=B08HR6ZBYJ&quantity=1',
    price: 699.99,
  }),
  // More links...
];
```

## Helper Files

The system includes several helper files to simplify working with series-based links:

### `store.ts`

Re-exports the `Store` interface for easier imports:

```typescript
// src/store/model/series/store.ts
export * from '../store';
```

### `common/link-factory.ts`

Re-exports the link factory utilities:

```typescript
// src/store/model/series/common/link-factory.ts
export * from '../../common/link-factory';
```

### `series-names.ts`

Utility for discovering available series names:

```typescript
// src/store/model/series/series-names.ts
import * as fs from 'fs';
import * as path from 'path';

export function getAllSeriesNames(): string[] {
  const seriesDir = path.join(__dirname);
  
  if (!fs.existsSync(seriesDir)) {
    return [];
  }
  
  return fs.readdirSync(seriesDir)
    .filter(file => {
      const fullPath = path.join(seriesDir, file);
      return fs.statSync(fullPath).isDirectory() && !file.startsWith('.');
    });
}
```

## Dynamic Loading

The system uses dynamic loading to automatically incorporate series-specific links into store configurations:

### `auto-load-series.ts`

```typescript
export function initializeSeriesLinksLoader(store: Store): void {
  if (hasSeriesLinks(store.name)) {
    const originalSetupAction = store.setupAction;
    
    store.setupAction = async (browser: Browser) => {
      if (originalSetupAction) {
        await originalSetupAction(browser);
      }
      
      const seriesLinks = await getSeriesLinks(store.name);
      if (seriesLinks.length > 0) {
        store.links = store.links.concat(seriesLinks);
      }
    };
  }
}
```

### `series-links.ts`

```typescript
export async function getSeriesLinks(
  storeName: string, 
  filterOptions?: LinkFilterOptions
): Promise<Link[]> {
  // Determine which series to load links for
  const activeSeriesList = config.store.showOnlySeries.length > 0 
    ? config.store.showOnlySeries 
    : getAllSeriesNames();
  
  let allLinks: Link[] = [];
  
  // Load links for each active series
  for (const series of activeSeriesList) {
    const seriesLinks = await getStoreSeriesLinks(storeName, series as Series);
    allLinks = allLinks.concat(seriesLinks);
  }
  
  // Apply additional filtering
  return filterLinks(allLinks, filterOptions);
}
```

## Implementing a Store

Here's an example of how to implement a store using the series-based links system:

```typescript
import {createStandardStore} from './common/store-factory';

export const SampleStore = createStandardStore({
  name: 'sample-store',
  country: 'US',
  currency: '$',
  labels: {
    inStock: {
      container: '.product-buy',
      text: ['add to cart'],
    },
    maxPrice: {
      container: '.product-price',
    },
  },
  // No need to specify setupAction - it's automatically configured by initializeSeriesLinksLoader
  links: [],
});
```

## Link Filtering

The system supports filtering links by brand, model, and price:

```typescript
export interface LinkFilterOptions {
  // Filter by specific brands (e.g., 'nvidia', 'asus')
  brands?: string[];
  // Filter by specific models (e.g., 'founders edition', 'strix')
  models?: string[];
  // Filter by maximum price (per series)
  maxPrice?: Record<Series, number>;
}

function filterLinks(links: Link[], options?: LinkFilterOptions): Link[] {
  if (!options) {
    return links;
  }
  
  let filteredLinks = links;
  
  // Filter implementation...
  
  return filteredLinks;
}
```

## Benefits

This approach offers several benefits:

1. **Improved Organization**: Links are logically organized by series, making them easier to find and update
2. **Reduced File Size**: Store files are smaller and more manageable
3. **Selective Loading**: Only links for configured series are loaded, improving performance
4. **Easier Maintenance**: Adding or updating links for a specific series is simpler
5. **Series-Specific Optimization**: Different series can have specialized handling if needed
6. **Better Collaboration**: Multiple contributors can work on different series without conflicts

## Adding New Series or Links

To add a new series or links:

1. Create a directory for the series if it doesn't exist:
   ```bash
   mkdir -p src/store/model/series/new-series-name
   ```

2. Create or update store files in the series directory:
   ```typescript
   // src/store/model/series/new-series-name/amazon.ts
   import {Link, Brand, Series, Model} from '../../store';
   import {createLink} from '../common/link-factory';
   
   export const links: Link[] = [
     createLink({
       brand: 'brand-name' as Brand,
       model: 'model-name' as Model,
       series: 'new-series-name' as Series,
       url: 'https://www.amazon.com/product-url',
     }),
   ];
   ```

3. The links will be automatically loaded when the application runs if the series is enabled in the configuration.

## Testing

To test series-based links:

1. Run the unit tests:
   ```bash
   pnpm test
   ```

2. Specifically test the series links functionality:
   ```bash
   npx jest test/unit/series-links.test.ts
   npx jest test/unit/auto-load-series-links.test.ts
   ```

## Tools

The codebase includes a utility script `extract-series-links.js` that can extract links from existing store files and organize them by series.