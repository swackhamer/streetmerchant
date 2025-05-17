/**
 * Store configuration for pny
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Pny store
 */
export const Pny = createStandardStore({
  name: 'pny',
  country: 'US',
  currency: '$',
  labels: {
    inStock: {
      container: '#ctl01_lbtnAddToCart',
      text: ['add to cart'],
    },
    maxPrice: {
      container: 'span[itemprop="price"]',
      euroFormat: false,
    },
  },

});
