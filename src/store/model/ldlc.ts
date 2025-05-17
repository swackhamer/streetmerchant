/**
 * Store configuration for ldlc
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Ldlc store
 */
export const Ldlc = createEuropeanStore({
  name: 'ldlc',
  country: 'FR',
  currency: '€',
  labels: {
    inStock: {
      container: '.stock',
      text: ['stock'],
    },
    maxPrice: {
      container: '.price .price',
      euroFormat: true,
    },
    outOfStock: {
      container: '.stock',
      text: ['rupture'],
    },
  },

});
