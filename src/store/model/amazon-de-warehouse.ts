/**
 * Store configuration for amazon-de-warehouse
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * AmazonDeWarehouse store
 */
export const AmazonDeWarehouse = createEuropeanStore({
  name: 'amazon-de-warehouse',
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
      container: '#a-autoid-0-announce',
      text: ['In den Einkaufswagen'],
    },
    maxPrice: {
      container: '.olpOfferPrice',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: '.a-size-medium',
        text: [
          'Derzeit gibt es keine Verkäufer, die diesen Artikel an Ihren Standort liefern können',
        ],
      },
    ],
  },
  backoffStatusCodes: [403, 429, 503],

});
