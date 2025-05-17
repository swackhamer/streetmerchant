/**
 * Store configuration for scorptec
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Scorptec store
 */
export const Scorptec = createStandardStore({
  name: 'scorptec',
  country: 'AU',
  currency: '$',
  labels: {
    inStock: {
      container: '#delivery-wrapper > div.product-stock-text',
      text: ['in stock'],
    },
    outOfStock: {
      container: '#delivery-wrapper > div.product-stock-text',
      text: ['sold out'],
    },
  },
  backoffStatusCodes: [403, 429],

});
