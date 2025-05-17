/**
 * Store configuration for amazon-de
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * AmazonDe store
 */
export const AmazonDe = createEuropeanStore({
  name: 'amazon-de',
  country: 'DE',
  currency: '€',
  labels: {
    captcha: {
      container: 'body',
      text: [
        'geben sie die unten angezeigten zeichen ein',
        'geben sie die zeichen unten ein',
      ],
    },
    captchaHandler: {
      challenge: '.a-row > img',
      input: '#captchacharacters',
      submit: 'button[type="submit"]',
    },
    inStock: {
      container: '#add-to-cart-button',
      text: ['in den einkaufswagen'],
    },
    maxPrice: {
      container: '.a-text-price',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: '#availability',
        text: ['Derzeit nicht verfügbar'],
      },
    ],
  },
  backoffStatusCodes: [403, 429, 503],

});
