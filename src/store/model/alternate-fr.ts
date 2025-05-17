/**
 * Store configuration for alternate-fr
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * AlternateFr store
 */
export const AlternateFr = createEuropeanStore({
  name: 'alternate-fr',
  country: 'FR',
  currency: '€',
  labels: {
    inStock: {
      container: '#add-to-cart-form > div:nth-child(2) > div > span > b',
      text: ['En stock'],
    },
    maxPrice: {
      container: '.price > span:nth-child(1)',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: '#product-top-right > div:nth-child(4) > div > div',
        text: ['Momentanément indisponible'],
      },
      {
        container: '#content > div:nth-child(1) > div > h1',
        text: ["L'article·n'est·pas·disponible·pour·le·moment."],
      },
    ],
  },

});
