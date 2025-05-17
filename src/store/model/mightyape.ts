/**
 * Store configuration for mightyape
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Mightyape store
 */
export const Mightyape = createStandardStore({
  name: 'mightyape',
  country: 'NZ',
  currency: '$',
  labels: {
    inStock: [
      {
        container: 'div.status',
        text: [' In stock at '],
      },
    ],
    outOfStock: [
      {
        container: 'div.status',
        text: [' Unavailable '],
      },
    ],
  },

});
