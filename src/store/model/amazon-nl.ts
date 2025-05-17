/**
 * Store configuration for amazon-nl
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * AmazonNl store
 */
export const AmazonNl = createEuropeanStore({
  name: 'amazon-nl',
  country: 'NL',
  currency: '€',
  labels: {
    captcha: {
      container: 'body',
      text: ['voer de karakters in die u hieronder ziet'],
    },
    captchaHandler: {
      challenge: '.a-row > img',
      input: '#captchacharacters',
      submit: 'button[type="submit"]',
    },
    inStock: [
      {
        container: '#add-to-cart-button',
        text: ['in winkelwagen'],
      },
      {
        container: '#buy-now-button',
        text: ['nu kopen'],
      },
    ],
    maxPrice: {
      container: '.a-text-price',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: '#availability',
        text: ['tijdelijk niet'],
      },
      {
        container: '#outOfStock',
        text: ['we weten niet of en wanneer dit item weer op voorraad is'],
      },
    ],
  },

});
