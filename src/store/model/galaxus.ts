/**
 * Store configuration for galaxus
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Galaxus store
 */
export const Galaxus = createEuropeanStore({
  name: 'galaxus',
  country: 'DE',
  currency: '€',
  labels: {
    inStock: {
      container: '#addToCartButton:enabled',
      text: ['In den Warenkorb'],
    },
    maxPrice: {
      container: '.productDetail .Z1c8',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: '.availabilityText',
        text: ['aktuell nicht lieferbar und kein liefertermin vorhanden'],
      },
      {
        container: '.availabilityText',
        text: [
          'der liefertermin ist beim lieferanten in abklärung und wird aktualisiert.',
        ],
      },
    ],
  },

});
