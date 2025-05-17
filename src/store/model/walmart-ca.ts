/**
 * Store configuration for walmart-ca
 * Refactored to use factory approach and series-based organization
 */
import {createMarketplaceStore} from './common/store-factory';
import {Labels} from './store';

/**
 * WalmartCa store
 */
export const WalmartCa = createMarketplaceStore({
  name: 'walmart-ca',
  country: 'CA',
  currency: '$',
  labels: {
    inStock: {
      container: '[data-automation="cta-button"]',
      text: ['add to cart'],
    },
    maxPrice: {
      container: '[data-automation="buybox-price"]',
    },
  },

});
