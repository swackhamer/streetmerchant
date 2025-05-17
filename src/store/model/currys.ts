/**
 * Store configuration for currys
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Currys store
 */
export const Currys = createStandardStore({
  name: 'currys',
  country: 'UK',
  currency: '£',
  labels: {
    inStock: {
      container: '.prices-add-to-cart-actions button.add-to-cart',
      text: ['add to basket'],
    },
    maxPrice: {
      container: '.prices-add-to-cart-actions .price',
      euroFormat: false, // Note: Currys uses non-euroFromat as price seperator
    },
    outOfStock: {
      container: '.prices-add-to-cart-actions button.oos-submit-button',
      text: ['not available for delivery'],
    },
  },

});
