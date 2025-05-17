/**
 * Store configuration for ccl
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Ccl store
 */
export const Ccl = createStandardStore({
  name: 'ccl',
  country: 'UK',
  currency: '£',
  labels: {
    inStock: {
      container: '#pnlAddToBasket',
      text: ['add to basket'],
    },
    maxPrice: {
      container: '#pnlPriceText > p',
      euroFormat: false, // Note: CCL uses non-euroFromat as price seperator
    },
    outOfStock: {
      container: '#pnlSoldOut',
      text: ['sold out', 'coming soon'],
    },
  },
  backoffStatusCodes: [403, 429, 503],

});
