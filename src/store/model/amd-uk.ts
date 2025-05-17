/**
 * Store configuration for amd-uk
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * AmdUk store
 */
export const AmdUk = createStandardStore({
  name: 'amd-uk',
  country: 'UK',
  currency: '£',
  labels: {
    inStock: [
      {
        container: '.btn-shopping-cart',
        text: ['add to cart'],
      },
      {
        container: '.btn-radeon',
        text: ['add to cart'],
      },
    ],
    maxPrice: {
      container: '.product-page-description h4',
      euroFormat: false,
    },
    outOfStock: [
      {
        container: '.product-out-of-stock',
        text: ['out of stock'],
      },
      {
        container: '.btn-radeon',
        text: ['sold out'],
      },
    ],
  },

});
