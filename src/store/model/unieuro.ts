/**
 * Store configuration for unieuro
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Unieuro store
 */
export const Unieuro = createEuropeanStore({
  name: 'unieuro',
  country: 'IT',
  currency: '€',
  labels: {
    captcha: {
      container: 'body',
      text: ['Too Many Requests.'],
    },
    inStock: {
      container: '.price-container',
      text: ['Aggiungi al carrello'],
    },
  },

});
