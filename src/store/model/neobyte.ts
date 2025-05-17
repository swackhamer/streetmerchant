/**
 * Store configuration for neobyte
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Neobyte store
 */
export const Neobyte = createEuropeanStore({
  name: 'neobyte',
  country: 'ES',
  currency: '€',
  labels: {
    inStock: {
      container: '#add_to_cart > button',
      text: ['Añadir al carrito'],
    },
    maxPrice: {
      container: '#our_price_display',
      euroFormat: true,
    },
    outOfStock: {
      container: '#availability_value',
      text: ['No Disponible'],
    },
  },

});
