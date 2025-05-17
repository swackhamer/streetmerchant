/**
 * Store configuration for ubiquiti
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Ubiquiti store
 */
export const Ubiquiti = createStandardStore({
  name: 'ubiquiti',
  country: 'US',
  currency: '$',
  labels: {
    inStock: [
      {
        container: '#titleInStockBadge',
        text: ['In Stock'],
      },
    ],
    outOfStock: [
      {
        container: '.titleSoldOutBadge',
        text: ['Sold Out'],
      },
      {
        container: '#titleSoldOutBadge',
        text: ['Sold Out'],
      },
    ],
  },

});
