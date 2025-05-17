# Adding a New Store

This guide walks you through the process of adding a new store to Streetmerchant using the series-based organization system.

## Overview

Streetmerchant's series-based organization system allows for better maintainability by organizing product links by series. This makes it easier to add, update, and manage links for different product series.

## Step 1: Create the Store File

1. Create a new file in `src/store/model/` named after your store (e.g., `mystore.ts`).
2. Use the store template as a starting point:

```typescript
import {Store} from './store';
import {Browser} from 'puppeteer';
import {getSeriesLinks} from './series-links';

export const MyStore: Store = {
  currency: '$', // Use appropriate currency symbol
  labels: {
    inStock: {
      container: '.add-to-cart-button', // CSS selector for in-stock elements
      text: ['add to cart', 'buy now'], // Text patterns indicating in-stock
    },
    outOfStock: {
      container: '.out-of-stock-message',
      text: ['out of stock', 'sold out'],
    },
    maxPrice: {
      container: '.product-price', // CSS selector for price element
      euroFormat: false, // Set to true for European price format
    },
  },
  links: [], // Start with an empty links array
  name: 'mystore', // Use all lowercase, no spaces
  country: 'US', // Use appropriate country code
  
  // Setup action to load links dynamically
  setupAction: async (browser: Browser) => {
    MyStore.links = await getSeriesLinks('mystore');
  }
};
```

## Step 2: Create Series-Specific Link Files

For each series that your store supports:

1. Create a directory for the series if it doesn't exist: `src/store/model/series/{series_name}/`
2. Create a new file in that directory named after your store: `src/store/model/series/{series_name}/mystore.ts`
3. Use the series links template as a starting point:

```typescript
import {Link} from '../../store';

export const links: Link[] = [
  {
    brand: 'nvidia',
    model: 'founders edition',
    series: '3080', // Must match the directory name
    url: 'https://mystore.com/product/nvidia-3080-founders-edition',
  },
  // Add more links for this series
];
```

## Step 3: Register the Store

1. Open `src/store/model/index.ts`
2. Import your store at the top of the file:
   ```typescript
   import {MyStore} from './mystore';
   ```
3. Add your store to the `storeList` map:
   ```typescript
   [MyStore.name, MyStore],
   ```

## Step 4: Test Your Store

1. Run the application in development mode:
   ```bash
   pnpm run start:dev
   ```
2. Check the console for any errors related to your store
3. Verify that your store's links are being loaded correctly

## Step 5: Document Your Store

1. Add your store to the supported stores list in the documentation
2. Include any special notes or requirements for your store

## Advanced Configuration

### Filtering Links

You can apply additional filtering to your store's links in the `setupAction`:

```typescript
setupAction: async (browser: Browser) => {
  MyStore.links = await getSeriesLinks('mystore', {
    brands: ['nvidia', 'evga'], // Only include these brands
    models: ['founders edition', 'ftw3'], // Only include these models
    maxPrice: {
      '3080': 1000, // Maximum price for 3080 cards
      '3090': 1800, // Maximum price for 3090 cards
    },
  });
}
```

### Custom Setup Actions

If your store requires additional setup actions beyond loading links:

```typescript
setupAction: async (browser: Browser) => {
  // Load links first
  MyStore.links = await getSeriesLinks('mystore');
  
  // Custom store-specific setup
  // For example, adjust links based on regional availability
  const region = process.env.REGION || 'US';
  if (region === 'EU') {
    MyStore.links = MyStore.links.filter(link => link.url.includes('eu-store'));
  }
}
```

### Additional Store Properties

You can configure additional properties for your store:

```typescript
// Status codes to consider as successful
successStatusCodes: [[0, 399], 404],

// Status codes that trigger backoff (rate limiting)
backoffStatusCodes: [403, 429],

// Disable ad blocker for this store
disableAdBlocker: true,

// Minimum and maximum page sleep times (in ms)
minPageSleep: 5000,
maxPageSleep: 10000,
```

## Troubleshooting

### Common Issues

1. **Links not loading**: Ensure the store name in the store file exactly matches the name used in the series links files
2. **In-stock detection not working**: Double-check your CSS selectors and text patterns
3. **Price detection issues**: Verify the price format (euro vs. standard) and the CSS selector

### Testing Link Selectors

You can test your selectors by using browser developer tools:

1. Open the product page in Chrome/Firefox
2. Open Developer Tools (F12)
3. Use the element selector tool to identify the correct elements
4. Test your CSS selectors in the console:
   ```javascript
   document.querySelector('.product-price')
   ```

### Validating Your Implementation

Run the validation command to check your store implementation:

```bash
pnpm run validate-stores
```