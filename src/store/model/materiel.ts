/**
 * Store configuration for materiel
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Materiel store
 */
export const Materiel = createEuropeanStore({
  name: 'materiel',
  country: 'FR',
  currency: '€',
  labels: {
    inStock: {
      container: '.product-availability',
      text: ['EN STOCK'],
    },
    maxPrice: {
      container: '.o-product__price',
      euroFormat: true,
    },
    outOfStock: {
      container: '.product-availability',
      text: ['RUPTURE'],
    },
  },

});
