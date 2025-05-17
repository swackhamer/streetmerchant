import {Store} from './store';
import {Browser} from 'puppeteer';
import {getSeriesLinks} from './series-links';

/**
 * This is a sample store that demonstrates how to implement the series-based links system.
 * To create a new store with series-specific links:
 * 
 * 1. Define the store configuration as usual, but start with an empty links array
 * 2. Implement a setupAction function that loads links dynamically using getSeriesLinks
 * 3. Create series-specific link files in the series subdirectories
 * 
 * For example, for a store named "mystore" that should load links for the 3080 series:
 * - Create src/store/model/series/3080/mystore.ts with the links for 3080 cards
 * - Create similar files for each series supported by the store
 * 
 * The setupAction will automatically load the appropriate links based on the configured series.
 */
export const SampleStoreSeries: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: '.product-buy',
      text: ['add to cart'],
    },
    maxPrice: {
      container: '.product-price',
    },
    outOfStock: {
      container: '.product-availability',
      text: ['out of stock', 'sold out'],
    },
  },
  links: [], // Start with an empty links array that will be populated dynamically
  name: 'sample-store-series',
  country: 'US',
  
  /**
   * Setup action that loads links dynamically based on series
   * This will be called automatically when the store is initialized
   */
  setupAction: async (browser: Browser) => {
    // Load links for all active series from the series/ directory structure
    SampleStoreSeries.links = await getSeriesLinks('sample-store-series');
    
    // You can also apply additional filtering if needed:
    // SampleStoreSeries.links = await getSeriesLinks('sample-store-series', {
    //   brands: ['nvidia', 'amd'],
    //   models: ['founders edition', 'reference'],
    //   maxPrice: {
    //     '3080': 1000,
    //     '3090': 1500,
    //   },
    // });
  }
};