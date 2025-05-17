/**
 * Store configuration for asus-de
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * AsusDe store
 */
export const AsusDe = createEuropeanStore({
  name: 'asus-de',
  country: 'DE',
  currency: '€',
  labels: {
    inStock: {
      container: '.buybox--button',
      text: ['in den warenkorb'],
    },
  },

});
