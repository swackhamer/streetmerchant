/**
 * Store configuration for amd-nl
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * AmdNl store
 */
export const AmdNl = createEuropeanStore({
  name: 'amd-nl',
  country: 'NL',
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
    outOfStock: {
      container: '.btn-radeon',
      text: ['out of stock'],
    },
  },

});
