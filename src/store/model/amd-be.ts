/**
 * Store configuration for amd-be
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * AmdBe store
 */
export const AmdBe = createEuropeanStore({
  name: 'amd-be',
  country: 'BE',
  currency: '€',
  labels: {
    inStock: {
      container: '.btn-shopping-cart',
      text: ['add to cart'],
    },
    maxPrice: {
      container: '.product-page-description h4',
      euroFormat: true,
    },
    outOfStock: {
      container: '.btn-radeon',
      text: ['ausverkauft'],
    },
  },

});
