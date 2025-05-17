/**
 * Store configuration for amazon-it
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * AmazonIt store
 */
export const AmazonIt = createEuropeanStore({
  name: 'amazon-it',
  country: 'IT',
  currency: '€',
  labels: {
    captcha: {
      container: 'body',
      text: ['Inserisci i caratteri visualizzati nello spazio sottostante'],
    },
    captchaHandler: {
      challenge: 'img',
      input: '#captchacharacters',
      submit: 'button[type="submit"]',
    },
    inStock: {
      container: '#desktop_buybox',
      text: ['Aggiungi al carrello'],
    },
    maxPrice: {
      container: '.a-text-price',
      euroFormat: true,
    },
  },
  backoffStatusCodes: [403, 429, 503],

});
