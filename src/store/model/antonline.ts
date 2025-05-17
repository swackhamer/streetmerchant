/**
 * Store configuration for antonline
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Antonline store
 */
export const Antonline = createStandardStore({
  name: 'antonline',
  country: 'US',
  currency: '$',
  labels: {
    inStock: {
      container: '.uk-button',
      text: ['Add to Cart'],
    },
    maxPrice: {
      container: '.cPrice',
      euroFormat: false,
    },
    outOfStock: {
      container: '.priceView-price .priceView-hero-price span',
      text: ['Sold Out'],
    },
  },

});
