/**
 * Store configuration for bpctech
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Bpctech store
 */
export const Bpctech = createStandardStore({
  name: 'bpctech',
  country: 'AU',
  currency: '$',
  labels: {
    inStock: {
      container: '.productStockStatus',
      text: ['in stock'],
    },
    maxPrice: {
      container: 'div.price-box.price-final_price > span > span',
      euroFormat: false,
    },
  },
  backoffStatusCodes: [403, 429],

});
