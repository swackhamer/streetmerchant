/**
 * Store configuration for acompc
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Acompc store
 */
export const Acompc = createEuropeanStore({
  name: 'acompc',
  country: 'DE',
  currency: '€',
  labels: {
    inStock: {
      container: '.filial_stock',
      text: ['lagernd', 'im Zulauf'],
    },
    maxPrice: {
      container: '.price',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: '.filial_stock',
        text: ['nicht lieferbar'],
      },
    ],
  },

});
