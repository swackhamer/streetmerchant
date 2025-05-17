/**
 * Store configuration for saveonit
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Saveonit store
 */
export const Saveonit = createStandardStore({
  name: 'saveonit',
  country: 'AU',
  currency: '$',
  labels: {
    inStock: {
      container: '.supplier',
      text: ['In Stock', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    },
    maxPrice: {
      container: '.money',
      euroFormat: false,
    },
    outOfStock: {
      container: '.supplier',
      text: ['Pre-Order', 'On Order'],
    },
  },
  backoffStatusCodes: [403, 429],

});
