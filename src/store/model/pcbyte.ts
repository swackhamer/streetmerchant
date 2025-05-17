/**
 * Store configuration for pcbyte
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Pcbyte store
 */
export const Pcbyte = createStandardStore({
  name: 'pcbyte',
  country: 'AU',
  currency: '$',
  labels: {
    inStock: {
      container: '.in-stock-label',
      text: ['in stock'],
    },
    maxPrice: {
      container: 'div.price-line.d-flex.mb-3 > div:nth-child(1) > span > span',
      euroFormat: false,
    },
    outOfStock: {
      container: 'a.btn:nth-child(3)',
      text: ['Pre Order', 'Pre-Order'],
    },
  },
  backoffStatusCodes: [403, 429],

});
