/**
 * Example of a refactored Amazon store using the factory approach
 * This example shows how to create a base Amazon configuration
 * that can be extended for regional variants
 */
import {Store, Labels} from '../store';
import {createMarketplaceStore} from '../common/store-factory';
import {Browser} from 'puppeteer';

/**
 * Common Amazon labels used across all regional stores
 */
const amazonLabels: Labels = {
  inStock: [
    {
      container: '#add-to-cart-button',
      text: ['add to cart'],
    },
    {
      container: '#buy-now-button',
      text: ['buy now'],
    },
  ],
  outOfStock: [
    {
      container: '#availability',
      text: ['currently unavailable', 'out of stock', 'unavailable'],
    },
    {
      container: '#buybox-see-all-buying-choices',
      text: ['see all buying choices'],
    },
  ],
  maxPrice: {
    container: '#priceblock_ourprice',
  },
  bannedSeller: {
    container: '#merchant-info',
    text: ['just launched', 'third-party'],
  },
};

/**
 * Base Amazon store factory function
 * Creates a standardized Amazon store that can be customized for different regions
 */
export function createAmazonStore(options: {
  name: string;
  country: string;
  currency: string;
  customLabels?: Partial<Labels>;
  customSetup?: (browser: Browser) => Promise<void>;
}): Store {
  // Create custom labels by merging common Amazon labels with region-specific overrides
  const labels: Labels = {
    ...amazonLabels,
    ...(options.customLabels || {}),
  };
  
  return createMarketplaceStore({
    name: options.name,
    country: options.country,
    currency: options.currency,
    labels,
    
    // Additional Amazon-specific configuration
    minPageSleep: 1000,
    maxPageSleep: 3000,
    
    // Custom setup action if provided
    customSetupAction: options.customSetup,
  });
}

/**
 * US Amazon Store
 */
export const Amazon = createAmazonStore({
  name: 'amazon',
  country: 'US',
  currency: '$',
});

/**
 * Canadian Amazon Store
 */
export const AmazonCa = createAmazonStore({
  name: 'amazon-ca',
  country: 'CA',
  currency: '$',
});

/**
 * UK Amazon Store
 */
export const AmazonUk = createAmazonStore({
  name: 'amazon-uk',
  country: 'UK',
  currency: '£',
});

/**
 * German Amazon Store with Euro formatting
 */
export const AmazonDe = createAmazonStore({
  name: 'amazon-de',
  country: 'DE',
  currency: '€',
  customLabels: {
    // Override with German-specific selectors
    maxPrice: {
      container: '#priceblock_ourprice',
      euroFormat: true,
    },
  },
});