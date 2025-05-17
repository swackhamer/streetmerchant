/**
 * Store configuration for megekko
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Megekko store
 */
export const Megekko = createEuropeanStore({
  name: 'megekko',
  country: 'NL',
  currency: '€',
  labels: {
    inStock: {
      container: '.product-order .text_green',
      text: ['dag', 'werkdag'],
    },
    maxPrice: {
      container: '.col_right_container .euro',
      euroFormat: false,
    },
    outOfStock: {
      container: '.product_detail .text_red',
      text: ['minimaal 10 dagen'],
    },
  },

});
