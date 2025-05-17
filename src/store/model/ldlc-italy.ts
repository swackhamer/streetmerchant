/**
 * Store configuration for ldlc-italy
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * LdlcItaly store
 */
export const LdlcItaly = createEuropeanStore({
  name: 'ldlc-italy',
  country: 'IT',
  currency: '€',
  labels: {
    inStock: {
      container: '.stock',
      text: ['Disponibile'],
    },
    maxPrice: {
      container: '.price',
      euroFormat: true,
    },
    outOfStock: {
      container: '.stock',
      text: ['Rottura'],
    },
  },

});
