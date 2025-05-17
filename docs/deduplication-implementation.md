# Code Deduplication Implementation

This document describes the implementation of code deduplication in the Streetmerchant project. The goal is to reduce code duplication across the codebase, particularly in store model files, while maintaining compatibility with the existing application.

## Overview

The deduplication strategy involves:

1. **Store Registry**: A central registry for store configurations
2. **Series Data**: A centralized data structure for product links organized by series
3. **Label Sets**: Reusable label configurations to standardize DOM selectors
4. **Factory Patterns**: Improved factory functions for creating stores and links

## Implementation Details

### Store Registry

The Store Registry (`src/store/model/store-registry.ts`) provides a centralized database of store configurations. Instead of having separate files for each store, the registry contains the configuration data for all stores in a single file.

Benefits:
- Reduces duplication across store files
- Makes it easier to update common properties
- Allows stores to be categorized by type (standard, marketplace, European)

Usage:
```typescript
// Old approach
export const Amazon = createMarketplaceStore({
  name: 'amazon',
  country: 'US',
  currency: '$',
  labels: {
    // ... lots of label configuration
  },
  backoffStatusCodes: [403, 429, 503],
});

// New approach
export const Amazon = createStoreFromRegistry('amazon');
```

### Centralized Series Data

The Series Data (`src/store/model/series-data.ts`) organizes product links by series and store, rather than having separate files for each series and store combination.

Benefits:
- Reduces the need for hundreds of small files
- Makes it easier to manage products across stores
- Allows for better filtering and organization

Structure:
```typescript
export const seriesData: SeriesData = {
  '3080': {
    'amazon': [
      {
        brand: 'pny',
        model: 'xlr8 revel',
        series: '3080',
        url: 'https://www.amazon.com/dp/B08HBR7QBM',
        cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HBR7QBM&Quantity.1=1',
      },
      // More products...
    ],
    'bestbuy': [
      // BestBuy 3080 products...
    ],
  },
  '5080': {
    // Products for 5080 series...
  },
};
```

### Common Label Sets

The Label Sets (`src/store/model/common/label-sets.ts`) provide reusable, standardized label configurations for DOM selectors used to detect product availability, price, etc.

Benefits:
- Reduces duplication of similar selectors
- Makes it easier to update selectors across multiple stores
- Standardizes the approach to labeling

Usage:
```typescript
export const inStockLabels = {
  addToCart: {
    container: '.add-to-cart',
    text: ['add to cart', 'add to bag', 'buy now'],
  },
  // More label sets...
};
```

### Enhanced Store Factory

The Store Factory (`src/store/model/common/store-factory.ts`) has been enhanced to work with both the registry-based approach and the traditional file-based approach.

Benefits:
- Allows for incremental adoption of the new pattern
- Provides compatibility with existing code
- Simplifies the creation of new stores

## Migration Guide

To convert a store to use the registry-based approach:

1. Add the store configuration to `storeRegistry` in `src/store/model/store-registry.ts`:
```typescript
'store-name': {
  name: 'store-name',
  country: 'COUNTRY',
  currency: 'CURRENCY',
  storeType: 'standard', // or 'marketplace' or 'european'
  labels: {
    // Label configuration...
  },
  // Other store options...
},
```

2. Update the store file to use the registry:
```typescript
/**
 * Store configuration for store-name
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * StoreName store
 */
export const StoreName = createStoreFromRegistry('store-name');
```

3. Move product links to `seriesData` in `src/store/model/series-data.ts`:
```typescript
'series-name': {
  'store-name': [
    {
      brand: 'brand-name',
      model: 'model-name',
      series: 'series-name',
      url: 'product-url',
      // Other link properties...
    },
    // More products...
  ],
},
```

## Implementation Progress

The following stores have been converted to use the registry-based approach:
- Amazon
- Best Buy
- Newegg
- Alternate DE

To convert more stores, follow the migration guide above.

## Benefits

This deduplication effort provides several benefits:
- Reduced file count: From hundreds of small files to a few centralized files
- Reduced code duplication: Common patterns are now defined once
- Easier maintenance: Changes to common patterns can be made in one place
- Better organization: Products are now organized by series rather than store
- Compatibility: The approach allows for incremental adoption without breaking existing functionality