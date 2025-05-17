/**
 * Store configuration for bestbuy-ca
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * BestbuyCa store
 */
export const BestbuyCa = createStandardStore({
  name: 'bestbuy-ca',
  country: 'CA',
  currency: '$',
  labels: {
    maxPrice: {
      container: 'div[class*="pricingContainer"]',
      euroFormat: false,
    },
    inStock: {
      container: '.addToCartButton:not(:disabled)',
      text: ['add to cart'],
    },
  },

});
