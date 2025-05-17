/**
 * Store configuration for nvidia-gb
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * NvidiaGb store
 */
export const NvidiaGb = createStandardStore({
  name: 'nvidia-gb',
  country: 'UK',
  currency: '£',
  labels: {
    inStock: {
      container: '.productView-options button',
      text: ['add to cart', 'buy now'],
    },
    outOfStock: {
      container: '.productView-options button',
      text: ['out of stock'],
    },
  },

});
