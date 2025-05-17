# Browser and Network Architecture

This document describes the architecture of the browser and network handling code in the Streetmerchant application.

## Overview

The browser and network code has been refactored to use a more object-oriented approach, with classes that encapsulate related functionality. This reduces code duplication and makes the code more maintainable.

The main components are:

1. **BrowserSession** - Manages browser lifecycle and page interactions
2. **RequestHandler** - Handles HTTP requests, retries, and stock checking

The original procedural functions have been maintained for backward compatibility but now use the new classes internally.

## Browser Session Management

### BrowserSession Class

The `BrowserSession` class (in `src/browser/session/browser-session.ts`) is responsible for:

- Managing browser instances for each store
- Configuring browser and page options
- Handling cookies and proxy configuration
- Providing methods for using pages safely

```typescript
// Create a session for a store
const session = await BrowserSession.create(store);

// Use a page for processing
const result = await session.withPage(async (page) => {
  // Do something with the page
  return await page.title();
});

// Close all browser sessions
await BrowserSession.closeAll();
```

### Legacy Browser Functions

The original browser functions in `src/browser.ts` are maintained for backward compatibility. They now use `BrowserSession` internally:

- `usingBrowser` - Creates or reuses a browser for a store
- `usingPage` - Uses a page with proper cleanup
- `tryUsingPage` - Safe version of usingPage with error handling

These functions should still work as before, but new code should prefer using the `BrowserSession` class directly.

## Network Request Handling

### RequestHandler Class

The `RequestHandler` class (in `src/network/handlers/request-handler.ts`) is responsible for:

- Making HTTP requests with retry logic
- Handling status codes and errors
- Detecting captchas
- Checking if a product is in stock
- Taking screenshots

```typescript
// Create a handler for a store and page
const handler = new RequestHandler(store, page, browserSession);

// Make a request with retry logic
const result = await handler.makeRequest(link, {
  retries: 3,
  retryOn: [500, 503],
  backoffOn: [429]
});

// Check if a product is in stock
const inStock = await handler.checkInStock(pageContent);
```

### Network Module

The `src/network/index.ts` module provides functions for compatibility:

- `makeRequest` - Makes a request with a RequestHandler
- `checkInStock` - Checks if a product is in stock

## Basic Request Interception

The `src/handlers.ts` file contains basic request interception logic:

- `onRequest` - Intercepts requests and implements low bandwidth mode
- `onResponse` - Gathers statistics about responses

## Benefits of the New Architecture

1. **Reduced Code Duplication** - Common patterns are encapsulated in classes
2. **Better Encapsulation** - Related functionality is grouped together
3. **Easier Testing** - Classes are easier to mock and test
4. **Backward Compatibility** - Existing code continues to work as before
5. **More Robust Error Handling** - Standardized approach to handling errors and retries
6. **Better Type Safety** - More explicit types and interfaces

## Migration Guide

To migrate to the new architecture:

1. Replace direct use of `browser.ts` functions with `BrowserSession`:

```typescript
// Old way
const result = await browser.usingBrowser(store, async (browser) => {
  return await browser.usingPage(browser, store, async (page) => {
    // Do something with the page
  });
});

// New way
const session = await BrowserSession.create(store);
const result = await session.withPage(async (page) => {
  // Do something with the page
});
```

2. Replace direct request handling with `RequestHandler`:

```typescript
// Old way
const response = await page.goto(link.url);
const statusCode = response?.status() ?? 0;
// ... custom error handling ...

// New way
const handler = new RequestHandler(store, page, session);
const result = await handler.makeRequest(link);
if (result.success) {
  // ... process the successful response ...
}
```

## Conclusion

The new architecture provides a more robust and maintainable approach to browser and network handling. It reduces code duplication while maintaining backward compatibility, making it easy to migrate to the new approach incrementally.