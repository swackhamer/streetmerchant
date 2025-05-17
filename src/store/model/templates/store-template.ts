import {Store} from '../store';
import {Browser} from 'puppeteer';
import {getSeriesLinks} from '../series-links';

/**
 * Store template for implementing a new retailer
 * 
 * How to use this template:
 * 1. Copy this file and rename it to your store's name (e.g., mystore.ts)
 * 2. Replace "StoreTemplate" with your store's name (e.g., "MyStore")
 * 3. Update all the store properties (currency, labels, name, country)
 * 4. Create series-specific link files in the series subdirectories
 *    - e.g., src/store/model/series/3080/mystore.ts
 */
export const StoreTemplate: Store = {
  // Set the currency symbol for the store
  currency: '$', // Use appropriate currency: '$', '£', '€', etc.
  
  // Define the CSS selectors and text patterns to identify product availability
  labels: {
    // Define patterns that indicate the product is in stock
    inStock: {
      container: '.add-to-cart', // CSS selector for the container
      text: ['add to cart', 'buy now'], // Text patterns to match (lowercase)
    },
    
    // Define patterns that indicate the product is out of stock (optional)
    outOfStock: {
      container: '.availability', 
      text: ['out of stock', 'sold out', 'coming soon'],
    },
    
    // Define how to extract the price (optional)
    maxPrice: {
      container: '.price',
      euroFormat: false, // Set to true for European price format (comma as decimal)
    },
    
    // Define patterns for banned sellers (optional)
    // bannedSeller: {
    //   container: '.seller-name',
    //   text: ['third-party'],
    // },
  },
  
  // Start with an empty links array (will be populated by setupAction)
  links: [],
  
  // Set the store name (used for identification and directory structure)
  name: 'store-template',
  
  // Set the store's country code
  country: 'US', // Use appropriate country code: 'US', 'UK', 'CA', etc.
  
  // Optional: Configure status code handling
  // successStatusCodes: [[0, 399]], // Status codes considered successful
  // backoffStatusCodes: [403, 429], // Status codes that trigger backoff
  
  /**
   * Setup action to dynamically load links from series subdirectories
   * This will be called automatically when the store is initialized
   */
  setupAction: async (browser: Browser) => {
    // Load links for all active series specified in the configuration
    StoreTemplate.links = await getSeriesLinks('store-template');
    
    // Additional store-specific setup can go here
    // For example, you can add custom filtering:
    /*
    StoreTemplate.links = await getSeriesLinks('store-template', {
      brands: ['nvidia', 'evga', 'asus'],
      models: ['founders edition', 'strix', 'ftw3'],
      maxPrice: {
        '3080': 1000,
        '3090': 1800,
      },
    });
    */
  }
};