/**
 * Store configuration for drako
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Drako store
 */
export const Drako = createEuropeanStore({
  name: 'drako',
  country: 'IT',
  currency: '€',
  labels: {
    inStock: [
      {
        container: '#bottom_left_panel > div:nth-child(9) > div:nth-child(2)',
        text: ['ordinabile'],
      },
    ],
    maxPrice: {
      container: '.price',
      euroFormat: true,
    },
  },
  successStatusCodes: [[0, 399]]

});
