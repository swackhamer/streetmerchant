/**
 * Store configuration for coolmod
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Coolmod store
 */
export const Coolmod = createEuropeanStore({
  name: 'coolmod',
  country: 'ES',
  currency: '€',
  labels: {
    inStock: {
      container: '#productBuyButtons',
      text: ['COMPRAR'],
    },
    maxPrice: {
      container: '#normalpricenumber',
      euroFormat: true,
    },
    outOfStock: {
      container: '#productBuyButtons',
      text: ['NO DISPONIBLE'],
    },
  },

});
