/**
 * Store configuration for mindfactory
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Mindfactory store
 */
export const Mindfactory = createEuropeanStore({
  name: 'mindfactory',
  country: 'DE',
  currency: '€',
  labels: {
    inStock: {
      container: '.pshipping',
      text: ['lagernd', 'verfügbar'],
    },
    maxPrice: {
      container: 'div[class="pprice"]',
      euroFormat: true,
    },
    outOfStock: {
      container: '.pshipping',
      text: ['ohne liefertermin'],
    },
  },

});
