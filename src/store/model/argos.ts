/**
 * Store configuration for argos
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Argos store
 */
export const Argos = createStandardStore({
  name: 'argos',
  country: 'UK',
  currency: '£',
  labels: {
    inStock: {
      container: 'button[data-test="add-to-trolley-button-button"',
      text: ['to trolley'],
    },
    maxPrice: {
      container: 'li[itemprop="price"]',
    },
  },

});
