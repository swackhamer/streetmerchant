# Code Deduplication Proposal

After examining the codebase, we've identified several areas where code duplication can be eliminated to improve maintainability and reduce the risk of bugs. This document outlines key areas for refactoring.

## 1. Store Model Consolidation

### Current State
- The codebase has over 100 store model files in `src/store/model/`
- Each store defines similar configuration with slight variations
- The project has started using a factory approach but many files still contain duplicated code

### Proposed Solution
- Extend the factory pattern to all stores
- Create a data-driven store configuration system:

```typescript
// src/store/model/store-registry.ts
import {StoreFactoryOptions} from './common/store-factory';

// Define store configurations as data rather than individual files
export const storeRegistry: Record<string, StoreFactoryOptions> = {
  'amazon': {
    name: 'amazon',
    country: 'US',
    currency: '$',
    labels: {
      captcha: {
        container: 'body',
        text: ['enter the characters you see below'],
      },
      // Other label configurations...
    },
    backoffStatusCodes: [403, 429, 503],
  },
  'bestbuy': {
    name: 'bestbuy',
    country: 'US',
    currency: '$',
    labels: {
      // Label configurations...
    },
  },
  // Other stores...
};

// Factory function to create stores from registry
export function createStoreFromRegistry(storeName: string) {
  const config = storeRegistry[storeName];
  if (!config) {
    throw new Error(`Store ${storeName} not found in registry`);
  }
  
  // Choose the correct factory based on store type
  if (config.isMarketplace) {
    return createMarketplaceStore(config);
  } else if (config.isEuropean) {
    return createEuropeanStore(config);
  } else {
    return createStandardStore(config);
  }
}
```

## 2. Series Link File Organization

### Current State
- Each series (3080, 3070, etc.) has its own directory with duplicate files for each store
- This results in hundreds of tiny files with similar structure but different product URLs
- The duplication makes maintenance difficult and increases the risk of errors

### Proposed Solution
- Use a JSON-based approach for product links instead of TypeScript files:

```typescript
// src/store/model/series/series-data.ts
import {Link} from '../store';

// Define interfaces for the JSON structure
interface SeriesLink {
  brand: string;
  model: string;
  url: string;
  cartUrl?: string;
  price?: number;
}

interface SeriesStore {
  [storeName: string]: SeriesLink[];
}

interface SeriesData {
  [seriesName: string]: SeriesStore;
}

// Load from JSON files or define inline for smaller datasets
export const seriesData: SeriesData = {
  '3080': {
    'amazon': [
      {
        brand: 'pny',
        model: 'xlr8 revel',
        url: 'https://www.amazon.com/dp/B08HBR7QBM',
        cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HBR7QBM&Quantity.1=1',
      },
      // Other Amazon 3080 links...
    ],
    'bestbuy': [
      // BestBuy 3080 links...
    ],
    // Other stores...
  },
  // Other series...
};

// Helper function to get links for a store and series
export function getSeriesLinks(storeName: string, seriesName: string): Link[] {
  if (!seriesData[seriesName] || !seriesData[seriesName][storeName]) {
    return [];
  }
  
  return seriesData[seriesName][storeName].map(link => ({
    brand: link.brand,
    model: link.model,
    series: seriesName,
    url: link.url,
    cartUrl: link.cartUrl,
    price: link.price,
  }));
}
```

## 3. Browser Session Management

### Current State
- Browser session management is spread across multiple functions in `browser.ts`
- Functions like `usingBrowser`, `usingPage`, and `tryUsingPage` have overlapping functionality
- Error handling is duplicated across these functions

### Proposed Solution
- Create a unified BrowserSession class that encapsulates the lifecycle:

```typescript
// src/browser/browser-session.ts
export class BrowserSession {
  private static instances = new Map<Store, BrowserInstance>();
  
  // Static factory method
  public static async create(store: Store): Promise<BrowserSession> {
    const browser = await this.getBrowser(store);
    return new BrowserSession(browser, store);
  }
  
  // Get or create a browser instance
  private static async getBrowser(store: Store): Promise<Browser> {
    // Implementation that consolidates the current browser creation logic
    // ...
  }
  
  private constructor(
    private readonly browser: Browser,
    private readonly store: Store
  ) {}
  
  // Use a page within this browser session
  public async withPage<T>(callback: (page: Page) => Promise<T>): Promise<T> {
    const page = await this.browser.newPage();
    try {
      if (this.store.disableAdBlocker) {
        await disableBlockerInPage(page);
      }
      return await callback(page);
    } finally {
      await this.cleanupPage(page);
    }
  }
  
  // Try to use a page, catching and logging errors
  public async tryWithPage<T>(callback: (page: Page) => Promise<T>): Promise<T | undefined> {
    try {
      return await this.withPage(callback);
    } catch (error) {
      // Error handling logic consolidated here
      // ...
    }
    return undefined;
  }
  
  // Cleanup logic
  private async cleanupPage(page: Page): Promise<void> {
    // Page cleanup logic
    // ...
  }
  
  // Close the session
  public async close(): Promise<void> {
    await this.browser.close();
    BrowserSession.instances.delete(this.store);
  }
}
```

## 4. Request/Response Handling

### Current State
- Request/response handling is scattered across multiple files
- Similar patterns for error handling, retry logic, and status code checking

### Proposed Solution
- Create a unified RequestHandler class:

```typescript
// src/network/request-handler.ts
export class RequestHandler {
  constructor(
    private readonly store: Store,
    private readonly page: Page
  ) {}
  
  // Make a request with standardized error handling and retry logic
  public async makeRequest(url: string, options?: RequestOptions): Promise<ResponseResult> {
    // Implementation with standard error handling, retry logic, etc.
    // ...
  }
  
  // Check if a response indicates the item is in stock
  public async checkInStock(response: ResponseResult): Promise<boolean> {
    // Consolidated in-stock checking logic
    // ...
  }
  
  // Handle captchas with standard approach
  public async handleCaptcha(response: ResponseResult): Promise<boolean> {
    // Captcha handling logic
    // ...
  }
  
  // Process cookies according to policy
  public async processCookies(statusCode: number): Promise<void> {
    // Cookie handling logic
    // ...
  }
}
```

## 5. Configuration Management

### Current State
- Configuration loading and validation is scattered
- Default values and overrides are handled inconsistently

### Proposed Solution
- Create a unified ConfigManager class:

```typescript
// src/config/config-manager.ts
export class ConfigManager {
  private static instance: ConfigManager;
  
  // Singleton pattern
  public static getInstance(): ConfigManager {
    if (!ConfigManager.instance) {
      ConfigManager.instance = new ConfigManager();
    }
    return ConfigManager.instance;
  }
  
  private constructor() {
    this.loadConfig();
  }
  
  private loadConfig(): void {
    // Centralized configuration loading logic
    // ...
  }
  
  // Typesafe getters for various configuration sections
  public getBrowserConfig(): BrowserConfig {
    // ...
  }
  
  public getStoreConfig(): StoreConfig {
    // ...
  }
  
  // Validation methods
  public validateConfig(): ValidationResult {
    // ...
  }
}
```

## Implementation Plan

1. Start with the Store Model Consolidation as it will yield the biggest immediate benefit
2. Follow with the Series Link Organization to further reduce file count
3. Implement the Browser Session Management improvements
4. Add the Request/Response Handler
5. Finally, refactor the Configuration Management

Each of these changes should be implemented incrementally, with thorough testing after each step to ensure functionality is preserved.