/**
 * Store configuration for ebuyer
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Ebuyer store
 */
export const Ebuyer = createStandardStore({
  name: 'ebuyer',
  country: 'UK',
  currency: '£',
  labels: {
    inStock: {
      container: '.purchase-info__cta',
      text: ['add to basket', 'pre-order'],
    },
    maxPrice: {
      container: '.purchase-info__price .price',
      euroFormat: false, // Note: ebuyer uses non-euroFromat as price seperator
    },
    outOfStock: {
      container: '.purchase-info',
      text: ['coming soon'],
    },
  },
  backoffStatusCodes: [403, 429, 503],

});
