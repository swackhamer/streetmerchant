/**
 * Store configuration for zotac
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Zotac store
 */
export const Zotac = createStandardStore({
  name: 'zotac',
  country: 'US',
  currency: '$',
  labels: {
    inStock: {
      container: '.add-to-cart-wrapper',
      text: ['add to cart'],
    },
    maxPrice: {
      container: 'div[class="product-shop"] span[class="price"]',
      euroFormat: false,
    },
  },
  backoffStatusCodes: [403, 503],

});
