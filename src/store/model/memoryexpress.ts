/**
 * Store configuration for memoryexpress
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Memoryexpress store
 */
export const Memoryexpress = createStandardStore({
  name: 'memoryexpress',
  country: 'CA',
  currency: '$',
  labels: {
    maxPrice: {
      container:
        '#ProductPricing .GrandTotal.c-capr-pricing__grand-total > div',
      euroFormat: false,
    },
    outOfStock: {
      container:
        '.c-capr-inventory-selector__details-online .c-capr-inventory-store__availability',
      text: ['Out of Stock', 'Backorder'],
    },
  },

});
