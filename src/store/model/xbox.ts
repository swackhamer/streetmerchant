/**
 * Store configuration for xbox
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Xbox store
 */
export const Xbox = createStandardStore({
  name: 'xbox',
  country: 'US',
  currency: '$',
  labels: {
    outOfStock: {
      container:
        '[class="BundleBuilderHeader-module__checkoutButton___3UyEq w-100 bg-light-green btn btn-primary"]',
      text: ['Out of stock'],
    },
  },

});
