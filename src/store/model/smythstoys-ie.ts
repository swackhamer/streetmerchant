/**
 * Store configuration for smythstoys-ie
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * SmythstoysIe store
 */
export const SmythstoysIe = createEuropeanStore({
  name: 'smythstoys-ie',
  country: 'IE',
  currency: '€',
  labels: {
    inStock: {
      container: '#addToCartButton',
      text: ['add to basket'],
    },
    maxPrice: {
      container: '.price_tag',
      euroFormat: false,
    },
    outOfStock: {
      container: '.instoreMessage',
      text: ['out of stock'],
    },
  },
  disableAdBlocker: true,

});
