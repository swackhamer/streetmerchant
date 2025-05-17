/**
 * Store configuration for microsoft
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Microsoft store
 */
export const Microsoft = createStandardStore({
  name: 'microsoft',
  country: 'US',
  currency: '$',
  labels: {
    inStock: {
      container: 'button[aria-label="Checkout bundle"]',
      text: ['Checkout'],
    },
    outOfStock: {
      container: 'button[aria-label="Checkout bundle"]',
      text: ['Out of stock'],
    },
  },

});
