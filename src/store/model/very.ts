/**
 * Store configuration for very
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Very store
 */
export const Very = createStandardStore({
  name: 'very',
  country: 'UK',
  currency: '£',
  labels: {
    inStock: {
      container: '.stockMessaging .indicator',
      text: ['available', 'low stock'],
    },
    maxPrice: {
      container: '.priceNow',
      euroFormat: false, // Note: Very uses non-euroFromat as price seperator
    },
    outOfStock: {
      container: '.stockMessaging .indicator',
      text: ['pre-order'],
    },
  },

});
