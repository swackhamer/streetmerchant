# Extension Guide

This guide shows you how to extend Streetmerchant with custom stores, notification methods, and other customizations.

## Adding a New Store

Adding support for a new online retailer requires creating a new store model file and updating a few existing files.

### 1. Create a Store Model File

Create a new TypeScript file in `src/store/model/` with a name matching the store (e.g., `new-store.ts`).

```typescript
import {Store} from './store';

export const NewStore: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: '.add-to-cart-button:not([disabled])',
      text: ['add to cart'],
    },
    maxPrice: {
      container: '.product-price',
      euroFormat: false, // Set to true for European price format
    },
    outOfStock: {
      container: '.add-to-cart-button[disabled]',
      text: ['out of stock'],
    },
  },
  links: [
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3080',
      url: 'https://www.newstore.com/nvidia-3080',
    },
    // Add more product links here
  ],
  name: 'newstore',
};
```

### 2. Update Store Index

Add your store to `src/store/model/index.ts`:

```typescript
import {NewStore} from './new-store';

// ...

export const storeList = new Map([
  // ... existing stores
  [NewStore.name, NewStore],
  // ... more stores
]);
```

### 3. Identifying CSS Selectors

To find the right CSS selectors for your store:

1. Visit the product page you want to monitor
2. Open browser developer tools (F12 or right-click → Inspect)
3. Use the element selector tool to identify:
   - In-stock indicators
   - Price elements
   - Out-of-stock indicators

![Example of inspecting elements](assets/images/inspect-example.png)

Choose specific selectors that uniquely identify stock status elements.

### 4. Testing Your Store

Test your implementation by running:

```bash
STORES=newstore pnpm run start
```

Watch the logs to ensure proper detection of stock status.

## Adding a New Notification Service

You can add custom notification methods by extending the messaging system.

### 1. Create a Notification File

Create a new file in `src/messaging/` (e.g., `custom-service.ts`):

```typescript
import {Link, Store} from '../store/model';
import {logger} from '../logger';

export function sendCustomNotification(link: Link, store: Store) {
  try {
    // Implement your notification logic here
    logger.info('✔ Sent custom notification');
    return true;
  } catch (error) {
    logger.error('✖ Could not send custom notification', error);
    return false;
  }
}
```

### 2. Update Notification Manager

Update `src/messaging/notification.ts` to include your new service:

```typescript
import {sendCustomNotification} from './custom-service';

// ...

export function sendNotification(link: Link, store: Store) {
  // ... existing code
  
  if (config.notifications.customService) {
    results.push(sendCustomNotification(link, store));
  }
  
  // ... existing code
}
```

### 3. Update Configuration

Add your service to `src/config.ts`:

```typescript
const notifications = {
  // ... existing notifications
  customService: envOrBoolean(process.env.CUSTOM_SERVICE_NOTIFY),
};
```

### 4. Update Environment Example

Add your new environment variable to `dotenv-example`:

```
CUSTOM_SERVICE_NOTIFY=false
```

## Enhanced Error Handling

You can extend the error handling in Streetmerchant to better handle specific error cases.

### Handling Network Errors

Update `src/util.ts` to handle specific errors:

```typescript
// Add your error patterns to the ignored errors regex
const IGNORE_ERRORS_REGEXP = new RegExp(
  [
    // ... existing patterns
    'Your custom error pattern',
  ].join('|')
);
```

### Custom Browser Handling

For advanced browser customization, modify `src/browser.ts`:

```typescript
// Add custom page setup
async function setPageOptions(page: Page) {
  // ... existing code
  
  // Your custom page setup
  await page.evaluateOnNewDocument(() => {
    // Custom browser environment modifications
  });
  
  // ... existing code
}
```

## Creating Custom Series and Filters

### 1. Add a New Product Series

To add support for a new product series:

Update `src/store/model/store.ts`:

```typescript
export type Series =
  // ... existing series
  | 'new-series';
```

Update `src/config.ts`:

```typescript
const store = {
  // ... existing code
  maxPrice: {
    series: {
      // ... existing series
      'new-series': envOrNumber(process.env.MAX_PRICE_SERIES_NEW_SERIES),
    },
  },
  // ... existing code
  showOnlySeries: envOrArray(process.env.SHOW_ONLY_SERIES, [
    // ... existing series
    'new-series',
  ]),
};
```

### 2. Add a New Brand

Update `src/store/model/store.ts`:

```typescript
export type Brand =
  // ... existing brands
  | 'new-brand';
```

## Advanced Customizations

### Custom Browser Arguments

For advanced Puppeteer configuration, modify browser arguments in `src/browser.ts`:

```typescript
const launchOptions: PuppeteerLaunchOptions = {
  args: [
    // ... existing args
    '--your-custom-flag',
  ],
  // ... existing options
};
```

### Adding Proxy Support for a Store

Create a file with the store's name and `.proxies` extension in the root directory (e.g., `newstore.proxies`):

```
http://user:pass@proxy1.example.com:8080
socks5://proxy2.example.com:1080
```

## Contributing Your Extensions

If your extension would be useful to others:

1. Fork the Streetmerchant repository
2. Create a branch with your changes
3. Add tests for your new functionality
4. Create a pull request
5. Update documentation as needed

Before submitting, ensure your code follows the project's style guidelines and passes linting checks:

```bash
pnpm run lint
```