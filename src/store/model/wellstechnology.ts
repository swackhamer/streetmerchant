/**
 * Store configuration for wellstechnology
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Wellstechnology store
 */
export const Wellstechnology = createStandardStore({
  name: 'wellstechnology',
  country: 'AU',
  currency: '$',
  labels: {
    inStock: {
      container:
        '#addToCartForm-product-template > div.payment-buttons.payment-buttons--small > div > div > div > div',
      text: ['Buy it now'],
    },
    maxPrice: {
      container: '#productPrice-product-template *',
      euroFormat: false,
    },
    outOfStock: {
      container: '#addToCartText-product-template',
      text: ['Sold Out'],
    },
  },
  backoffStatusCodes: [403, 429],

});
