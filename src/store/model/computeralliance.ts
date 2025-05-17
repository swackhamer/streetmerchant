/**
 * Store configuration for computeralliance
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Computeralliance store
 */
export const Computeralliance = createStandardStore({
  name: 'computeralliance',
  country: 'AU',
  currency: '$',
  labels: {
    inStock: {
      container:
        '#main > div.col-md-12 > div:nth-child(1) > div.col-sm-7.product-information > div:nth-child(5) > div > ul > li:nth-child(1) > a',
      text: ['In Stock'],
    },
    maxPrice: {
      container: 'span.price',
      euroFormat: false,
    },
    outOfStock: {
      container:
        '#main > div.col-md-12 > div:nth-child(1) > div.col-sm-7.product-information > div:nth-child(5) > div > ul > li:nth-child(1) > a',
      text: ['Out of Stock'],
    },
  },
  backoffStatusCodes: [403, 429],

});
