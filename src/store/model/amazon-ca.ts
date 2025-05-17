/**
 * Store configuration for amazon-ca
 * Refactored to use factory approach and series-based organization
 */
import {createMarketplaceStore} from './common/store-factory';
import {Labels} from './store';

/**
 * AmazonCa store
 */
export const AmazonCa = createMarketplaceStore({
  name: 'amazon-ca',
  country: 'CA',
  currency: '$',
  labels: {
    captcha: {
      container: 'body',
      text: ['enter the characters you see below'],
    },
    captchaHandler: {
      challenge: 'img',
      input: '#captchacharacters',
      submit: 'button[type="submit"]',
    },
    inStock: {
      container: '#desktop_buybox',
      text: ['add to cart'],
    },
    maxPrice: {
      container: '.a-color-price',
    },
    outOfStock: {
      container: '.a-color-price',
      text: ['currently unavailable.'],
    },
  },

});
