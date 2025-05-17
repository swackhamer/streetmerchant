/**
 * Store configuration for officedepot
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Officedepot store
 */
export const Officedepot = createStandardStore({
  name: 'officedepot',
  country: 'US',
  currency: '$',
  labels: {
    captcha: {
      container: 'body',
      text: ['please verify you are a human'],
    },
    inStock: {
      container: '#productPurchase',
      text: ['add to cart'],
    },
    maxPrice: {
      container: 'span[class^="price_column right"]',
      euroFormat: false,
    },
  },

});
