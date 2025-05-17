/**
 * Store configuration for shopto
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Shopto store
 */
export const Shopto = createStandardStore({
  name: 'shopto',
  country: 'UK',
  currency: '£',
  labels: {
    inStock: {
      container: '.orderbox_inventory',
      text: ['In Stock'],
    },
  },

});
