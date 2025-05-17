/**
 * Store configuration for cpl
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Cpl store
 */
export const Cpl = createStandardStore({
  name: 'cpl',
  country: 'AU',
  currency: '$',
  labels: {
    inStock: {
      container:
        'div.product-stock > table > tbody > tr:nth-child(1) > td.stock-value',
      text: ['In Stock'],
    },
    outOfStock: {
      container:
        'div.product-stock > table > tbody > tr:nth-child(1) > td.stock-value',
      text: ['Pre Order'],
    },
  },
  backoffStatusCodes: [403, 429],

});
