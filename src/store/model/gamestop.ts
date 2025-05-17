/**
 * Store configuration for gamestop
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Gamestop store
 */
export const Gamestop = createStandardStore({
  name: 'gamestop',
  country: 'US',
  currency: '$',
  labels: {
    inStock: [
      {
        container: '.add-to-cart',
        text: ['add to cart'],
      },
      {
        container: '.add-to-cart',
        text: ['Pre-Order'],
      },
    ],
    maxPrice: {
      container: '.primary-details-row .actual-price',
      euroFormat: false,
    },
    outOfStock: {
      container: '.add-to-cart',
      text: ['not available'],
    },
  },
  successStatusCodes: [[0, 399]]

});
