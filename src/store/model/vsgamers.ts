/**
 * Store configuration for vsgamers
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Vsgamers store
 */
export const Vsgamers = createEuropeanStore({
  name: 'vsgamers',
  country: 'ES',
  currency: '€',
  labels: {
    inStock: {
      container: '#vs-product-sheet-dashboard',
      text: ['COMPRAR', 'RESERVAR'],
    },
    maxPrice: {
      container: 'div[class="current ng-binding"]',
      euroFormat: true,
    },
    outOfStock: {
      container: '#vs-product-sheet-dashboard',
      text: ['Avísame'],
    },
  },

});
