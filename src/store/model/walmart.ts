/**
 * Store configuration for walmart
 * Refactored to use factory approach and series-based organization
 */
import {createMarketplaceStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Walmart store
 */
export const Walmart = createMarketplaceStore({
  name: 'walmart',
  country: 'US',
  currency: '$',
  labels: {
    inStock: {
      container: '.button.spin-button.prod-ProductCTA--primary.button--primary',
      text: ['add to cart'],
    },
    maxPrice: {
      container: 'span[class*="price-characteristic"]',
    },
  },

});
