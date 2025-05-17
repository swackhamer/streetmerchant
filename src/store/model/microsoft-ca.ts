/**
 * Store configuration for microsoft-ca
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * MicrosoftCa store
 */
export const MicrosoftCa = createStandardStore({
  name: 'microsoft-ca',
  country: 'CA',
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
