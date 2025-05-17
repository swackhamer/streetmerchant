/**
 * Store configuration for amd-it
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * AmdIt store
 */
export const AmdIt = createEuropeanStore({
  name: 'amd-it',
  country: 'IT',
  currency: '€',
  labels: {
    inStock: {
      container: '.btn-shopping-cart',
      text: ['add to cart'],
    },
    maxPrice: {
      container: '.product-page-description h4',
      euroFormat: true,
    },
  },

});
