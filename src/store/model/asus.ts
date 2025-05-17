/**
 * Store configuration for asus
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Asus store
 */
export const Asus = createStandardStore({
  name: 'asus',
  country: 'US',
  currency: '$',
  labels: {
    inStock: {
      container: '#item_add_cart',
      text: ['add to cart'],
    },
    outOfStock: {
      container: '#off_sale',
      text: ['sold out'],
    },
  },
  successStatusCodes: [[0, 399]],
  backoffStatusCodes: [403, 429, 503]

});
