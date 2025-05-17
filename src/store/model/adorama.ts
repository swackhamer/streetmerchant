/**
 * Store configuration for adorama
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Adorama store
 */
export const Adorama = createStandardStore({
  name: 'adorama',
  country: 'US',
  currency: '$',
  labels: {
    captcha: {
      container: 'body',
      text: ['please verify you are a human'],
    },
    inStock: {
      container: '.buy-section.purchase',
      text: ['add to cart'],
    },
    maxPrice: {
      container: '.your-price',
      euroFormat: false,
    },
  },

});
