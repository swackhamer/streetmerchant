/**
 * Store configuration for awd
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Awd store
 */
export const Awd = createStandardStore({
  name: 'awd',
  country: 'UK',
  currency: '£',
  labels: {
    inStock: {
      container: '.product-info-stock-sku .stock-status',
      text: ['in stock'],
    },
    maxPrice: {
      container: '.product-info-details .price',
      euroFormat: false, // Note: Awd uses non-euroFromat as price seperator
    },
    outOfStock: {
      container: '.product-info-stock-sku .stock-status',
      text: ['out of stock', 'coming soon'],
    },
  },

});
