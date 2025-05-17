# Series-Based Links Organization

This document explains how the series-based links organization works in the streetmerchant codebase.

## Overview

The series-based links system allows you to organize product links by series in separate directories, making it easier to maintain and extend the codebase. Each product series (like 3080, 3070, etc.) has its own directory containing store-specific link files.

## Directory Structure

```
src/store/model/
├── amazon.ts               # Main store implementation
├── bestbuy.ts              # Main store implementation
├── newegg.ts               # Main store implementation
├── series-links.ts         # Utility for loading series-specific links
├── series-sample-store.ts  # Example store implementation
└── series/                 # Series-specific directories
    ├── 3080/               # Links for 3080 series
    │   ├── amazon.ts       # Amazon links for 3080 series
    │   ├── bestbuy.ts      # Best Buy links for 3080 series
    │   └── newegg.ts       # Newegg links for 3080 series
    ├── 3070/               # Links for 3070 series
    │   ├── amazon.ts       # Amazon links for 3070 series
    │   ├── bestbuy.ts      # Best Buy links for 3070 series
    │   └── newegg.ts       # Newegg links for 3070 series
    └── ...                 # Other series directories
```

## How It Works

1. Each store implementation defines a `setupAction` function that loads links dynamically using the `getSeriesLinks` utility.
2. The `getSeriesLinks` utility function loads links from series-specific files based on the store name and active series.
3. When the application starts, it loads only the links for the active series, improving performance and maintainability.

## Implementing a Store

Here's an example of how to implement a store using the series-based links system:

```typescript
import {Store} from './store';
import {Browser} from 'puppeteer';
import {getSeriesLinks} from './series-links';

export const SampleStore: Store = {
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
  // Start with an empty links array that will be populated dynamically
  links: [],
  name: 'sample-store',
  country: 'US',
  
  // Implement setupAction to load links dynamically
  setupAction: async (browser: Browser) => {
    // Load links for all active series
    SampleStore.links = await getSeriesLinks('sample-store');
  }
};
```

## Implementing Series-Specific Link Files

For each series and store, create a file in the corresponding series directory:

```typescript
// src/store/model/series/3080/sample-store.ts
import {Link} from '../../store';

export const links: Link[] = [
  {
    brand: 'nvidia',
    model: 'founders edition',
    series: '3080',
    url: 'https://sample-store.com/nvidia-rtx-3080-founders-edition',
  },
  {
    brand: 'asus',
    model: 'strix',
    series: '3080',
    url: 'https://sample-store.com/asus-rtx-3080-strix',
  }
];
```

## Benefits

1. **Organization**: Links are organized by series, making it easier to maintain and extend.
2. **Performance**: Only links for active series are loaded, reducing memory usage.
3. **Maintainability**: Adding or updating links for a specific series doesn't require modifying the main store file.
4. **Collaboration**: Different contributors can work on different series without conflicts.

## Tools

The codebase includes a utility script `extract-series-links.js` that can extract links from existing store files and organize them by series.