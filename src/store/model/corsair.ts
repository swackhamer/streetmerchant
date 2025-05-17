/**
 * Store configuration for corsair
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Corsair store
 */
export const Corsair = createStandardStore({
  name: 'corsair',
  country: 'US',
  currency: '$',
  labels: {
    inStock: {
      container: '.add_to_cart_form',
      text: ['add to cart'],
    },
    maxPrice: {
      container: '.product-price',
      euroFormat: false,
    },
  },

});
