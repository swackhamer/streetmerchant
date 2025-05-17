/**
 * Store configuration for evga-eu
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * EvgaEu store
 */
export const EvgaEu = createEuropeanStore({
  name: 'evga-eu',
  country: 'EU',
  currency: '€',
  labels: {
    inStock: {
      container: '.product-buy-specs',
      text: ['add to cart'],
    },
  },

});
