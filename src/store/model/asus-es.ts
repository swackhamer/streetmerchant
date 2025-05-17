/**
 * Store configuration for asus-es
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * AsusEs store
 */
export const AsusEs = createEuropeanStore({
  name: 'asus-es',
  country: 'ES',
  currency: '€',
  labels: {
    inStock: {
      container: '#product-addtocart-button > span',
      text: ['Añadir a la cesta'],
    },
  },

});
