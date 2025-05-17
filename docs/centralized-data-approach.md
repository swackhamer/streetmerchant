# Centralized Data Approach

This document describes the centralized data approach for storing product links and store configurations in Streetmerchant.

## Overview

The Streetmerchant application has traditionally used a file-based approach for organizing product links and store configurations:

- Each store had its own file in `src/store/model/`
- Product links were organized in separate files by series in `src/store/model/series/`

This led to significant code duplication and maintenance challenges:
- Many store files contained nearly identical configuration but for small differences
- Product links were scattered across hundreds of files (over 900 store files across 50 different series)
- Adding a new product series required creating many new files

The centralized data approach addresses these issues by:
1. Storing all store configurations in a central registry
2. Storing all product links in a central data structure (currently over 5,000 links)
3. Using factory functions to create store instances from the registry

## Store Registry

The store registry is implemented in `src/store/model/store-registry.ts`. It provides:

1. A centralized configuration store for all retailers
2. Factory methods for creating store instances
3. Helper functions for filtering and retrieving store configurations

```typescript
// Example store registry entry
export const storeRegistry: Record<string, ExtendedStoreOptions> = {
  'amazon': {
    name: 'amazon',
    country: 'US',
    currency: '$',
    storeType: 'marketplace',
    labels: {
      // Store-specific selectors
    },
  },
  // Other stores...
};
```

### Store Types

The registry supports three main types of stores:

1. **Standard Store**: Basic store with standard selectors
2. **European Store**: Store that uses European number formats
3. **Marketplace Store**: Store that supports multiple sellers

### Factory Functions

The registry provides factory functions for creating store instances:

```typescript
// Get a store from the registry
const amazonStore = createStoreFromRegistry('amazon');

// Get a store with overrides
const customAmazon = createStoreWithOverrides('amazon', {
  labels: {
    // Custom label overrides
  }
});
```

## Series Data

Product links are now stored in a centralized data structure in `src/store/model/series-data.ts`:

```typescript
// Structure of the centralized data
export type SeriesData = {
  [key in Series]?: {
    [storeName: string]: Link[];
  };
};

// Example usage
seriesData['3080']['bestbuy'] = [
  {
    brand: 'nvidia',
    model: 'founders edition',
    series: '3080',
    url: 'https://api.bestbuy.com/click/-/6429440/pdp',
  },
  // Other links...
];
```

### Helper Functions

The series data module provides helper functions for working with the centralized data:

```typescript
// Get links for a specific store and series
const links = getLinksForSeriesAndStore('3080', 'bestbuy');

// Get all series names
const allSeries = getAllSeries();

// Filter links based on configuration
const filteredLinks = filterSeriesDataLinks(links);
```

## Converted Store File

Store files are simplified to just import from the registry:

```typescript
// src/store/model/amazon.ts
import {createStoreFromRegistry} from './store-registry';

export const Amazon = createStoreFromRegistry('amazon');
```

## Migration Tools

The repository includes tools for migrating to the centralized approach:

1. `extract-links-robust.js`: Extracts product links from series files into the centralized data store
2. `convert-to-registry.js`: Converts store files to use the registry pattern

These tools have been used to convert 20+ stores and extract over 5,000 product links from the file-based approach to the centralized data structure.

## Implementation Progress

The implementation of the centralized data approach is ongoing:

1. **Store Registry**: The registry now contains configurations for numerous stores including Amazon, Best Buy, Newegg, and more
2. **Series Data**: The central data structure now contains links for 50+ product series across hundreds of stores
3. **Store Conversion**: Multiple stores have been converted to use the registry pattern
4. **Dual-Mode Support**: The system currently supports both approaches

The project aims to convert all stores and product links to use the centralized approach while maintaining backward compatibility during the transition.

## Dual-Mode Support

The system currently supports both approaches:

1. Legacy file-based approach: Links are loaded from series-specific files
2. Centralized data approach: Links are loaded from the central data structure

This allows for incremental adoption of the new pattern.

## Benefits

1. **Reduced Code Duplication**: Store configurations are defined only once
2. **Easier Maintenance**: Adding a new store or series is simpler
3. **Better Organization**: All product links are in one logical structure
4. **Type Safety**: TypeScript interfaces ensure consistency
5. **Performance**: Centralized data can be more efficiently processed

## Contributing

When adding new stores or product links:

1. Use the store registry for new store configurations
2. Add product links to the centralized data structure
3. Use the provided factory functions to create store instances