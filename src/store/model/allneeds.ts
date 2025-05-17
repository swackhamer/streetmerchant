/**
 * Store configuration for allneeds
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Allneeds store
 */
export const Allneeds = createStandardStore({
  name: 'allneeds',
  country: 'AU',
  currency: '$',
  labels: {
    inStock: {
      container: '.amstockstatus',
      text: ['In Stock'],
    },
    maxPrice: {
      container: 'span.price',
      euroFormat: false,
    },
    outOfStock: {
      container: '.amstockstatus',
      text: ['sold out'],
    },
  },
  backoffStatusCodes: [403, 429],

});
