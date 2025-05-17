# Refactoring Guide: Reducing Code Duplication

This guide explains how to use the new utilities in the `src/store/model/common` directory to reduce code duplication when implementing stores and product links.

## Overview

The Streetmerchant codebase has been enhanced with factory methods and common configurations to reduce duplication across store implementations. These utilities centralize common patterns and provide a more standardized approach to implementing stores.

## Key Components

### 1. Common Label Sets (`label-sets.ts`)

This file contains reusable label configurations for common scenarios:

```typescript
import {inStockLabels, outOfStockLabels, pricingLabels} from '../common/label-sets';

// Use pre-defined label configurations
const myLabels = {
  inStock: inStockLabels.addToCart,
  outOfStock: outOfStockLabels.standard,
  maxPrice: pricingLabels.standard,
};
```

### 2. Store Factory (`store-factory.ts`)

The store factory provides methods for creating standardized store configurations:

```typescript
import {createStandardStore} from '../common/store-factory';

// Create a standard store with minimal code
export const MyStore = createStandardStore({
  name: 'mystore',
  country: 'US',
  currency: '$',
  
  // Custom labels if needed (optional)
  labels: {
    inStock: {
      container: '.my-add-to-cart',
      text: ['add to cart'],
    },
  },
});
```

### 3. Link Factory (`link-factory.ts`)

The link factory helps create standardized product links and provides utilities for common product types:

```typescript
import {
  createLink, 
  createFoundersEditionLinks,
  createBrandSeriesLinks
} from '../common/link-factory';

// Create links for multiple products with the same brand and series
const asusList = createBrandSeriesLinks('asus', '3080', [
  {
    model: 'strix',
    url: 'https://example.com/asus-strix-3080',
  },
  {
    model: 'tuf',
    url: 'https://example.com/asus-tuf-3080',
  },
]);
```

## Benefits of Using These Utilities

1. **Reduced Duplication**: Common patterns are centralized instead of copied across files
2. **Standardization**: Consistent approach to implementing stores and links
3. **Maintainability**: Easier to update common logic in one place
4. **Readability**: Cleaner code with less boilerplate
5. **Type Safety**: Better type checking and validation

## Refactoring Examples

### Before: Original Store Implementation

```typescript
import {Store} from './store';

export const MyStore: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: '.add-to-cart',
      text: ['add to cart'],
    },
    outOfStock: {
      container: '.availability',
      text: ['out of stock', 'sold out'],
    },
    maxPrice: {
      container: '.price',
    },
  },
  links: [
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3080',
      url: 'https://example.com/nvidia-3080-fe',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3080',
      url: 'https://example.com/asus-strix-3080',
    },
    // Many more links...
  ],
  name: 'mystore',
  country: 'US',
};
```

### After: Refactored Store Implementation

**Store Configuration (`src/store/model/mystore.ts`):**

```typescript
import {createStandardStore} from './common/store-factory';

export const MyStore = createStandardStore({
  name: 'mystore',
  country: 'US',
  currency: '$',
});
```

**Series Links (`src/store/model/series/3080/mystore.ts`):**

```typescript
import {Link} from '../../../store';
import {createFoundersEditionLinks, createBrandSeriesLinks} from '../../../common/link-factory';

export const links: Link[] = [
  ...createFoundersEditionLinks('3080', [{
    url: 'https://example.com/nvidia-3080-fe',
  }]),
  
  ...createBrandSeriesLinks('asus', '3080', [{
    model: 'strix',
    url: 'https://example.com/asus-strix-3080',
  }]),
];
```

## Creating Store Families

For stores with multiple regional variants (e.g., Amazon US, Amazon CA, Amazon UK), you can create a factory function:

```typescript
import {createMarketplaceStore} from './common/store-factory';

// Base factory for Amazon stores
function createAmazonStore(options) {
  return createMarketplaceStore({
    name: options.name,
    country: options.country,
    currency: options.currency,
    // Common Amazon-specific configuration...
  });
}

// Create regional variants
export const Amazon = createAmazonStore({
  name: 'amazon',
  country: 'US',
  currency: '$',
});

export const AmazonCa = createAmazonStore({
  name: 'amazon-ca',
  country: 'CA',
  currency: '$',
});
```

## Migrating Existing Stores

1. **Move Links to Series Directories**:
   - Create files in `src/store/model/series/{series_name}/{store_name}.ts`
   - Group links by series and move them to these files

2. **Convert Store to Use Factory**:
   - Use the appropriate factory method for your store type
   - Remove hardcoded links and add a `setupAction` that calls `getSeriesLinks`

3. **Use Common Label Sets**:
   - Replace custom label definitions with common ones where possible
   - Only specify custom labels for store-specific selectors

## Best Practices

1. **Use the Barrel File Import**:
   ```typescript
   import {createStandardStore, inStockLabels} from './common';
   ```

2. **Create Store Type Factories**:
   - For stores with similar configurations, create specific factory functions
   - Share common logic between related stores

3. **Link Organization**:
   - Group links by series in separate files
   - Use the link factory methods to reduce repetition

4. **Documentation**:
   - Document any custom label selectors or store-specific behavior
   - Explain the purpose of custom setups or configurations

By following these refactoring guidelines, we can significantly reduce code duplication while maintaining the flexibility needed for different stores and products.