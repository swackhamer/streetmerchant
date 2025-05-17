/**
 * Store configuration for spielegrotte
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Spielegrotte store
 */
export const Spielegrotte = createEuropeanStore({
  name: 'spielegrotte',
  country: 'DE',
  currency: '€',
  labels: {
    inStock: [
      {
        container:
          'html > body > table > tbody > tr > td > div > table > tbody > tr > td > center > table > tbody > tr > td > a.klein > img',
        text: [''],
      },
    ],
    maxPrice: {
      container:
        'html > body > table > tbody > tr > td > div > table > tbody > tr > td > center > table > tbody > tr > td > font > b',
      euroFormat: true,
    },
    outOfStock: {
      container:
        'html > body > table > tbody > tr > td > div > table > tbody > tr > td > center > font > b',
      text: ['Dieses Produkt ist leider neu nicht mehr verfügbar'],
    },
  },

});
