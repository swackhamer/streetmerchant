/**
 * Store configuration for amd-ca
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * AmdCa store
 */
export const AmdCa = createStandardStore({
  name: 'amd-ca',
  country: 'CA',
  currency: '$',
  labels: {
    inStock: {
      container: '.btn-shopping-cart',
      text: ['add to cart'],
    },
    maxPrice: {
      container: '.product-page-description h4',
      euroFormat: false,
    },
  },

});
