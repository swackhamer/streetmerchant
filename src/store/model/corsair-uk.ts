/**
 * Store configuration for corsair-uk
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * CorsairUk store
 */
export const CorsairUk = createStandardStore({
  name: 'corsair-uk',
  country: 'UK',
  currency: '£',
  labels: {
    inStock: {
      container: '#addToCartForm',
      text: ['add to cart'],
    },
    outOfStock: {
      container: '#addToCartForm',
      text: ['notify me when in stock'],
    },
  },

});
