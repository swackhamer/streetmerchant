/**
 * Store configuration for pccomponentes
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Pccomponentes store
 */
export const Pccomponentes = createEuropeanStore({
  name: 'pccomponentes',
  country: 'ES',
  currency: '€',
  labels: {
    inStock: {
      container: '#btnsWishAddBuy',
      text: ['Comprar'],
    },
    maxPrice: {
      container: '#precio-main',
      euroFormat: true,
    },
    outOfStock: {
      container: '#btnsWishAddBuy',
      text: ['Avísame'],
    },
  },

});
