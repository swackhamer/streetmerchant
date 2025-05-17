/**
 * Store configuration for mediamarkt
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Mediamarkt store
 */
export const Mediamarkt = createEuropeanStore({
  name: 'mediamarkt',
  country: 'DE',
  currency: '€',
  labels: {
    captcha: {
      container: 'body',
      text: ['Das ging uns leider zu schnell.'],
    },
    maxPrice: {
      container: 'span[font-family="price"]',
      euroFormat: false,
    },
    outOfStock: [
      {
        container: '#root',
        text: ['Dieser Artikel ist aktuell nicht verfügbar.'],
      },
      {
        container: '#root',
        text: ['Leider keine Lieferung möglich'],
      },
      {
        container: '#root',
        text: ['Nicht verfügbar'],
      },
      {
        container: '#root',
        text: ['Dieser Artikel ist dauerhaft ausverkauft'],
      },
      {
        container: '#root',
        text: ['Dieser Artikel ist bald wieder für Sie verfügbar'],
      },
      {
        container: '#root',
        text: ['Dieser Artikel ist bald wieder verfügbar'],
      },
    ],
  },
  backoffStatusCodes: [403, 429, 503],

});
