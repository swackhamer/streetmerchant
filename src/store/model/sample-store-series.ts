/**
 * Store configuration for sample-store-series
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * SampleStoreSeries store
 */
export const SampleStoreSeries = createStandardStore({
  name: 'sample-store-series',
  country: 'US',
  currency: '$',
  labels: {
    inStock: {
      container: '.stock-info',
      text: ['IN STOCK', 'In Stock', 'Available']
    },
    outOfStock: {
      container: '.stock-info',
      text: ['OUT OF STOCK', 'Sold Out']
    }
  }
});
