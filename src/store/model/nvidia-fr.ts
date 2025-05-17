/**
 * Store configuration for nvidia-fr
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * NvidiaFr store
 */
export const NvidiaFr = createEuropeanStore({
  name: 'nvidia-fr',
  country: 'FR',
  currency: '€',
  labels: {
    inStock: {
      container: '.buy',
      text: ['ajouter au panier', 'acheter maintenant'],
    },
    outOfStock: {
      container: '.buy',
      text: ['RUPTURE DE STOCK'],
    },
  },

});
