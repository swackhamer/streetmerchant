/**
 * Store configuration for nvidia-de
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * NvidiaDe store
 */
export const NvidiaDe = createEuropeanStore({
  name: 'nvidia-de',
  country: 'DE',
  currency: '€',
  labels: {
    inStock: {
      container: '.buy',
      text: ['In den Einkaufswagen', 'JETZT KAUFEN'],
    },
    outOfStock: {
      container: '.buy',
      text: ['DERZEIT NICHT VERFÜGBAR'],
    },
  },

});
