/**
 * Store configuration for evatech
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Evatech store
 */
export const Evatech = createStandardStore({
  name: 'evatech',
  country: 'AU',
  currency: '$',
  labels: {
    inStock: {
      container: '.product_detail_add_to_cart > span:nth-child(2)',
      text: ['ADD TO CART'],
    },
    maxPrice: {
      container: '.product_detail_price',
      euroFormat: false,
    },
    outOfStock: {
      container: '.product_detail_add_to_cart > div:nth-child(2)',
      text: ['SOLD OUT'],
    },
  },
  backoffStatusCodes: [403, 429],

});
