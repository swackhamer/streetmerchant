/**
 * Store configuration for pccg
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Pccg store
 */
export const Pccg = createStandardStore({
  name: 'pccg',
  country: 'AU',
  currency: '$',
  labels: {
    inStock: {
      container: 'div.price-box > div.stock-label',
      text: ['IN STOCK'],
    },
    outOfStock: {
      container: 'div.price-box > div.stock-label',
      text: ['CHECK BACK LATER!'],
    },
  },
  backoffStatusCodes: [403, 429],

});
