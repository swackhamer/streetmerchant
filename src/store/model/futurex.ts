/**
 * Store configuration for futurex
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Futurex store
 */
export const Futurex = createEuropeanStore({
  name: 'futurex',
  country: 'DE',
  currency: '€',
  labels: {
    inStock: {
      container: '.productPriceInner',
      text: ['Auf Lager'],
    },
    maxPrice: {
      container: '.price',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: '.notavail',
        text: ['Aktuell nicht verfügbar'],
      },
    ],
  },

});
