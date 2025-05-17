/**
 * Store configuration for amazon-es
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * AmazonEs store
 */
export const AmazonEs = createEuropeanStore({
  name: 'amazon-es',
  country: 'ES',
  currency: '€',
  labels: {
    captcha: {
      container: 'body',
      text: ['introduzca los caracteres que ve a continuación'],
    },
    captchaHandler: {
      challenge: '.a-row > img',
      input: '#captchacharacters',
      submit: 'button[type="submit"]',
    },
    inStock: {
      container: '#desktop_buybox',
      text: ['añadir a la cesta'],
    },
    maxPrice: {
      container: '.a-text-price',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: '#availability',
        text: ['No disponible'],
      },
    ],
  },
  backoffStatusCodes: [403, 429, 503],

});
