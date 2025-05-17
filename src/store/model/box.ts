/**
 * Store configuration for box
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Box store
 */
export const Box = createStandardStore({
  name: 'box',
  country: 'UK',
  currency: '£',
  labels: {
    inStock: {
      container: '.flex-col button',
      text: ['add to basket'],
    },
    maxPrice: {
      container: '.flex-col span.heading_primary',
      euroFormat: false, // Note: Box uses non-euroFromat as price seperator
    },
    outOfStock: {
      container: '.flex-col button',
      text: ['request stock alert', 'coming soon', 'notify me'],
    },
  },
  backoffStatusCodes: [403, 429, 503],

});
