/**
 * Store configuration for gamestop-ca
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * GamestopCa store
 */
export const GamestopCa = createStandardStore({
  name: 'gamestop-ca',
  country: 'CA',
  currency: '$',
  labels: {
    maxPrice: {
      container: '.singleVariantText .prodPriceCont',
    },
    outOfStock: {
      container: '#btnAddToCart[style*="display:none;"] ',
      text: ['add to cart'],
    },
  },

});
