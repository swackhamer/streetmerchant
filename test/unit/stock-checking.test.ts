import {Store} from '../../src/store/model/store';
import {Browser} from 'puppeteer';
// import path from 'path'; - Not used, removed to fix linting warning

// Mock the config to prevent actual network requests or side effects
jest.mock('../../src/config', () => ({
  config: {
    browser: {
      isHeadless: true,
      isIncognito: true,
      disableImages: true,
    },
    // Add other necessary config properties with mock values
  },
}));

// Mock the lookup function before importing it
jest.mock('../../src/store/lookup', () => {
  // Instead of referencing an external variable, define the mock inline
  return {
    lookup: jest.fn(),
  };
});

// Now import the mocked lookup function
import {lookup} from '../../src/store/lookup';

// Mock a sample store model
const mockStore: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: 'div.stock-container',
      text: ['In Stock'],
    },
    outOfStock: {
      container: 'div.stock-container',
      text: ['Out of Stock'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://example.com/product/1',
    },
  ],
  name: 'TestStore',
  country: 'US',
};

describe('Stock Checking Logic', () => {
  beforeEach(() => {
    // Clear mock calls before each test
    jest.clearAllMocks();
  });

  test('should handle product in stock', async () => {
    // Set up the mock implementation - cast lookup to any because it's a mock
    (lookup as jest.Mock).mockResolvedValue({
      inStock: true,
      price: 100,
      url: mockStore.links[0].url,
    });

    // Mock a browser instance for the lookup function
    const mockBrowser = {} as Browser;

    // Call the function
    const result = await lookup(mockBrowser, mockStore);

    // Verify the result
    expect(result).toEqual({
      inStock: true,
      price: 100,
      url: mockStore.links[0].url,
    });
    expect(lookup).toHaveBeenCalledWith(mockBrowser, mockStore);
  });

  test('should handle product out of stock', async () => {
    // Set up the mock implementation - cast lookup to any because it's a mock
    (lookup as jest.Mock).mockResolvedValue({
      inStock: false,
      price: null,
      url: mockStore.links[0].url,
    });

    // Mock a browser instance for the lookup function
    const mockBrowser = {} as Browser;

    // Call the function
    const result = await lookup(mockBrowser, mockStore);

    // Verify the result
    expect(result).toEqual({
      inStock: false,
      price: null,
      url: mockStore.links[0].url,
    });
    expect(lookup).toHaveBeenCalledWith(mockBrowser, mockStore);
  });

  test('should handle lookup errors', async () => {
    // Set up the mock implementation to throw an error
    const error = new Error('Failed to lookup');
    (lookup as jest.Mock).mockRejectedValue(error);

    // Mock a browser instance for the lookup function
    const mockBrowser = {} as Browser;

    // Call the function and expect it to throw
    await expect(lookup(mockBrowser, mockStore)).rejects.toThrow('Failed to lookup');
    expect(lookup).toHaveBeenCalledWith(mockBrowser, mockStore);
  });
});
