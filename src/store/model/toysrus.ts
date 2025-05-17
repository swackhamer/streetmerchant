/**
 * Store configuration for toysrus
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Toysrus store
 */
export const Toysrus = createStandardStore({
  name: 'toysrus',
  country: 'US',
  currency: '$',
  labels: {
    inStock: {
      container: 'li.b-product_status',
      text: ['in stock'],
    },
    maxPrice: {
      container: '.b-price-value',
    },
  },

});
