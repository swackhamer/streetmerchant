/**
 * Store configuration for aria
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Aria store
 */
export const Aria = createStandardStore({
  name: 'aria',
  country: 'UK',
  currency: '£',
  labels: {
    inStock: {
      container: '#addQuantity',
      text: ['add to shopping basket'],
    },
    maxPrice: {
      container: '.priceBig',
      euroFormat: false, // Note: Aria uses non-euroFromat as price seperator
    },
    outOfStock: {
      container: '.fBox',
      text: ['out of stock', 'there is currently no stock of this item'],
    },
  },

});
