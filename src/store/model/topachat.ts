/**
 * Store configuration for topachat
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Topachat store
 */
export const Topachat = createEuropeanStore({
  name: 'topachat',
  country: 'GR',
  currency: '€',
  labels: {
    inStock: {
      container: 'input.cart.button[value="Ajouter au panier"]',
      text: [''],
    },
    maxPrice: {
      container: 'span.priceFinal.fp44',
    },
  },

});
