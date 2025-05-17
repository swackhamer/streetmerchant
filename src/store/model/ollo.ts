/**
 * Store configuration for ollo
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Ollo store
 */
export const Ollo = createEuropeanStore({
  name: 'ollo',
  country: 'IT',
  currency: '€',
  labels: {
    inStock: [
      {
        container:
          'div.product-availability:nth-child(2) > div:nth-child(1) > span:nth-child(1)',
        text: ['Disponibile'],
      },
    ],
    maxPrice: {
      container: '.main-product-price',
      euroFormat: true,
    },
    outOfStock: {
      container:
        'div.product-availability:nth-child(2) > div:nth-child(1) > span:nth-child(1)',
      text: ['Attualmente non disponibile', 'In Pre-ordine'],
    },
  },

});
