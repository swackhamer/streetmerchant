/**
 * Store configuration for centrecom
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Centrecom store
 */
export const Centrecom = createStandardStore({
  name: 'centrecom',
  country: 'AU',
  currency: '$',
  labels: {
    inStock: {
      container: '.prod_stores_stock > li:nth-child(1) > span:nth-child(2)',
      text: ['In Stock'],
    },
    maxPrice: {
      container: 'div.prod_price_current.product-price > span',
      euroFormat: false,
    },
    outOfStock: {
      container: '.prod_stores_stock > li:nth-child(1) > span:nth-child(2)',
      text: ['Sold Out'],
    },
  },
  backoffStatusCodes: [403, 429],

});
