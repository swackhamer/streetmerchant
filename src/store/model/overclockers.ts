/**
 * Store configuration for overclockers
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Overclockers store
 */
export const Overclockers = createStandardStore({
  name: 'overclockers',
  country: 'UK',
  currency: '£',
  labels: {
    inStock: {
      container: 'ck-addto-cart-wrapper',
      text: ['add to basket', 'in stock'],
    },
    maxPrice: {
      container: 'ck-product-cta-box .price__amount',
      euroFormat: false, // Note: Overclockers uses non-euroFromat as price seperator
    },
    outOfStock: {
      container: 'ck-addto-cart-wrapper',
      text: ['out of stock', 'pre order', 'bought to order'],
    },
  },

});
