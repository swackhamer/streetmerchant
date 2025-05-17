/**
 * Store configuration for siabyte
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Siabyte store
 */
export const Siabyte = createEuropeanStore({
  name: 'siabyte',
  country: 'ES',
  currency: '€',
  labels: {
    inStock: {
      container: '#availability_value',
      text: ['Disponibilidad inmediata', 'Disponibilidad estimada'],
    },
    maxPrice: {
      container: '#our_price_display',
      euroFormat: true,
    },
    outOfStock: {
      container: '#availability_value',
      text: ['Este producto ya no está disponible'],
    },
  },

});
