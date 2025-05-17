/**
 * Store configuration for game
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Game store
 */
export const Game = createStandardStore({
  name: 'game',
  country: 'UK',
  currency: '£',
  labels: {
    inStock: {
      container: '.buyingOptions',
      text: ['Pre-order Now', 'Buy New'],
    },
    maxPrice: {
      container: '.buyingOptions .btnPrice',
      euroFormat: false,
    },
    outOfStock: {
      container: '.buyingOptions',
      text: ['out of stock'],
    },
  },

});
