/**
 * Store configuration for lmc
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Lmc store
 */
export const Lmc = createStandardStore({
  name: 'lmc',
  country: 'AU',
  currency: '$',
  labels: {
    inStock: {
      container: '.stock-info-message',
      text: ['In Stock', 'Low In Stock', 'Stock in warehouse'],
    },
    maxPrice: {
      container: '.product-views-price-lead',
      euroFormat: false,
    },
    outOfStock: {
      container: '.stock-info-message',
      text: ['Pre-order', 'Call for ETA'],
    },
  },
  backoffStatusCodes: [403, 429],

});
