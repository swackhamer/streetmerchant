/**
 * Store configuration for euronics-de
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * EuronicsDe store
 */
export const EuronicsDe = createEuropeanStore({
  name: 'euronics-de',
  country: 'DE',
  currency: '€',
  labels: {
    inStock: {
      container: '.buy-btn--cart-text',
      text: ['Warenkorb'],
    },
    maxPrice: {
      container: '.price--content',
      euroFormat: true,
    },
    outOfStock: {
      container:
        '.product--buybox .alert.is--error.is--rounded .alert--content',
      text: [
        'Artikel steht derzeit nicht zur Verfügung',
        'Morgen im Laufe des Morgens und nur online unter',
      ],
    },
  },

});
