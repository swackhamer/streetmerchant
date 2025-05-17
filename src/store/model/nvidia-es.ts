/**
 * Store configuration for nvidia-es
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * NvidiaEs store
 */
export const NvidiaEs = createEuropeanStore({
  name: 'nvidia-es',
  country: 'ES',
  currency: '€',
  labels: {
    inStock: {
      container: '.buy',
      text: ['Añadir al carrito', 'COMPRAR AHORA'],
    },
    outOfStock: {
      container: '.buy',
      text: ['AGOTADO'],
    },
  },

});
