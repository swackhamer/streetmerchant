/**
 * Store configuration for evga
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Evga store
 */
export const Evga = createStandardStore({
  name: 'evga',
  country: 'US',
  currency: '$',
  labels: {
    inStock: {
      container: '.product-buy-specs',
      text: ['add to cart'],
    },
  },

});
