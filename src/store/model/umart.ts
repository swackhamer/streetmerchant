/**
 * Store configuration for umart
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Umart store
 */
export const Umart = createStandardStore({
  name: 'umart',
  country: 'AU',
  currency: '$',
  labels: {
    inStock: {
      container: '#youhuo_delivery',
      text: ['in stock'],
    },
    maxPrice: {
      container: '.goods-price',
      euroFormat: false,
    },
    outOfStock: {
      container: 'div.price-box > div.stock-label',
      text: ['out of stock'],
    },
  },
  backoffStatusCodes: [403, 429],

});
