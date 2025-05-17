/**
 * Store configuration for storm
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Storm store
 */
export const Storm = createStandardStore({
  name: 'storm',
  country: 'AU',
  currency: '$',
  labels: {
    inStock: {
      container: 'div.summary.entry-summary > form > button',
      text: ['ADD TO CART'],
    },
    maxPrice: {
      container: '.price',
      euroFormat: false,
    },
    outOfStock: {
      container: 'div.summary.entry-summary > p.stock.out-of-stock',
      text: ['Out of stock', 'pre-order', 'preorder'],
    },
  },
  backoffStatusCodes: [403, 429],

});
