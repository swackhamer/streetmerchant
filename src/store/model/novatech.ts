/**
 * Store configuration for novatech
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Novatech store
 */
export const Novatech = createStandardStore({
  name: 'novatech',
  country: 'UK',
  currency: '£',
  labels: {
    inStock: {
      container: '.newspec-specprice',
      text: ['add to basket'],
    },
    maxPrice: {
      container: 'p[class="newspec-price"]',
      euroFormat: false, // Note: Novatech uses non-euroFromat as price seperator
    },
    outOfStock: {
      container: '.newspec-pricesection',
      text: [
        'very short supply, no confirmed date',
        'this product is only available to buy when in stock',
        'ordered upon request',
        'price to be confirmed',
      ],
    },
  },

});
