/**
 * Store configuration for bandh
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Bandh store
 */
export const Bandh = createStandardStore({
  name: 'bandh',
  country: 'US',
  currency: '$',
  labels: {
    inStock: {
      container: 'div[data-selenium="addToCartSection"]',
      text: ['add to cart'],
    },
    maxPrice: {
      container: 'div[data-selenium="pricingPrice"]',
      euroFormat: false,
    },
    outOfStock: {
      container: 'button[data-selenium="notifyAvailabilityButton"]',
      text: ['notify when available'],
    },
  },
  backoffStatusCodes: [403, 429],

});
