/**
 * Store configuration for comet
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Comet store
 */
export const Comet = createEuropeanStore({
  name: 'comet',
  country: 'IT',
  currency: '€',
  labels: {
    inStock: {
      container: '.caption',
      text: ['Aggiungi al carrello'],
    },
  },

});
