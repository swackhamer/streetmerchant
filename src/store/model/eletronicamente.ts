/**
 * Store configuration for eletronicamente
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Eletronicamente store
 */
export const Eletronicamente = createEuropeanStore({
  name: 'eletronicamente',
  country: 'ES',
  currency: '€',
  labels: {
    inStock: [
      {
        container: '.sistock',
        text: ['en stock'],
      },
    ],
    maxPrice: {
      container: '.our_price_display',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: '.nostock',
        text: ['Producto sujeto a disponibilidad de fabricante'],
      },
    ],
  },

});
