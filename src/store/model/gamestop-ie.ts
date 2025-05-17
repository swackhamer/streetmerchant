/**
 * Store configuration for gamestop-ie
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * GamestopIe store
 */
export const GamestopIe = createEuropeanStore({
  name: 'gamestop-ie',
  country: 'IE',
  currency: '€',
  labels: {
    inStock: {
      container: '#btnAddToCart',
      text: ['add to cart!'],
    },
    maxPrice: {
      container: 'span.pricetext',
    },
  },

});
