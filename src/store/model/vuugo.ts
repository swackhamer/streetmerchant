/**
 * Store configuration for vuugo
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Vuugo store
 */
export const Vuugo = createStandardStore({
  name: 'vuugo',
  country: 'CA',
  currency: '$',
  labels: {
    inStock: {
      container: '.green',
      text: ['In Stock'],
    },
    maxPrice: {
      container: 'div.price:nth-child(12)',
    },
    outOfStock: {
      container: '.description .red',
      text: ['Back Order'],
    },
  },

});
