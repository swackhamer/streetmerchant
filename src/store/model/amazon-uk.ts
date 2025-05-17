/**
 * Store configuration for amazon-uk
 * Refactored to use factory approach and series-based organization
 */
import {createMarketplaceStore} from './common/store-factory';
import {Labels} from './store';

/**
 * AmazonUk store
 */
export const AmazonUk = createMarketplaceStore({
  name: 'amazon-uk',
  country: 'UK',
  currency: '£',
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
    inStock: {
      container: '#availability',
      text: ['in stock'],
    },
    maxPrice: {
      container: '.a-text-price',
    },
    outOfStock: [
      {
        container: '#availability',
        text: ['out of stock', 'unavailable'],
      },
      {
        container: '#backInStock',
        text: ['unavailable'],
      },
    ],
  },
  backoffStatusCodes: [403, 429, 503],

});
