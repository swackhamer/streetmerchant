# Testing in Streetmerchant

This directory contains tests for the Streetmerchant application.

## Test Structure

- `unit/`: Unit tests for individual components
- `functional/`: Functional tests for features like notifications and captcha handling
- `fixtures/`: Mock HTML files and other test data
- `util.ts`: Helper functions for tests
- `jest.setup.js`: Setup and configuration for Jest

## Running Tests

```bash
# Run all tests
pnpm test

# Run a specific test file
npx jest test/unit/stock-checking.test.js
```

## Test Fixtures

The `fixtures/` directory contains mock HTML pages for testing:

- `mock-product.html`: A product page with "In Stock" status
- `mock-out-of-stock.html`: A product page with "Out of Stock" status
- `mock-captcha.html`: A page with a captcha challenge

## Helper Functions

The `util.ts` file provides helper functions for tests:

- `getTestLink()`: Get a test link for general testing purposes
- `getTestStore()`: Get a test store with a variety of configurations
- `getInStockTestStore()`: Get a test store configured for in-stock detection
- `launchTestBrowser()`: Launch a browser instance for testing
- `cleanup()`: Clean up resources after tests
- `createTempFile()`: Create a temporary test file
- `getFixturePath()`: Get the path to a test fixture
- And more...

## Writing Tests

When writing tests, follow these guidelines:

1. Use the helper functions in `util.ts` for common operations
2. Use `jest.mock()` to mock dependencies
3. Clean up resources in `afterEach()` or `afterAll()` blocks
4. Use fixtures for more realistic testing

### Example Test

```typescript
import {getTestStore} from '../util';
import {Browser} from 'puppeteer';

jest.mock('../../src/config', () => ({
  config: {
    browser: {
      isHeadless: true,
    },
  },
}));

describe('My Feature', () => {
  let mockBrowser: Browser;
  
  beforeEach(() => {
    mockBrowser = {} as Browser;
  });
  
  test('should do something', async () => {
    const testStore = getTestStore();
    // Test code here...
    expect(result).toBe(expectedValue);
  });
});
```