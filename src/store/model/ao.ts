/**
 * Store configuration for ao
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Ao store
 */
export const Ao = createStandardStore({
  name: 'ao',
  country: 'UK',
  currency: '£',
  labels: {
    outOfStock: {
      container: 'section.centred-heading-copy strong',
      text: ['currently unavailable'],
    },
  },

});
