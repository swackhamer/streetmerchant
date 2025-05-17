/**
 * Store configuration for euronics
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Euronics store
 */
export const Euronics = createEuropeanStore({
  name: 'euronics',
  country: 'IT',
  currency: '€',
  labels: {
    inStock: {
      container: '.purchaseButtonsWidth',
      text: ['Aggiungi al carrello'],
    },
  },

});
