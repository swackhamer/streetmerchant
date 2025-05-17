/**
 * Store configuration for gamestop-de
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * GamestopDe store
 */
export const GamestopDe = createEuropeanStore({
  name: 'gamestop-de',
  country: 'DE',
  currency: '€',
  labels: {
    inStock: [
      {
        container: '#btnAddToCart',
        text: ['In den Warenkorb'],
      },
      {
        container: '#btnAddToCart',
        text: ['Vorbestellen'],
      },
    ],
    maxPrice: {
      container: '.buySection .prodPriceCont',
      euroFormat: true,
    },
    outOfStock: {
      container: '.megaButton',
      text: ['Nicht verfügbar'],
    },
  },
  successStatusCodes: [[0, 399]]

});
