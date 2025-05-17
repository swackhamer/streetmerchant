/**
 * Store configuration for amazon-sg
 * Refactored to use factory approach and series-based organization
 */
import {createMarketplaceStore} from './common/store-factory';
import {Labels} from './store';

/**
 * AmazonSg store
 */
export const AmazonSg = createMarketplaceStore({
  name: 'amazon-sg',
  country: 'SG',
  currency: '$',
  labels: {
    captcha: {
      container: 'body',
      text: ['enter the characters you see below'],
    },
    captchaHandler: {
      challenge: '.a-row > img',
      input: '#captchacharacters',
      submit: 'button[type="submit"]',
    },
    inStock: [
      {
        container: '#add-to-cart-button',
        text: ['add to cart'],
      },
      {
        container: '#buy-now-button',
        text: ['buy now'],
      },
    ],
    maxPrice: {
      container: '.a-text-price',
    },
  },
  backoffStatusCodes: [403, 429, 503],

});
