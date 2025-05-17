/**
 * Store configuration for equippr
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Equippr store
 */
export const Equippr = createEuropeanStore({
  name: 'equippr',
  country: 'DE',
  currency: '€',
  labels: {
    inStock: {
      container: 'buybox--button-container',
      text: ['in den warenkorb'],
    },
    maxPrice: {
      container: '.product--price',
      euroFormat: true,
    },
    outOfStock: {
      container: '.product--buybox',
      text: ['bald verfügbar'],
    },
  },

});
