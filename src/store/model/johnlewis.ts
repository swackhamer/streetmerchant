/**
 * Store configuration for johnlewis
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Johnlewis store
 */
export const Johnlewis = createStandardStore({
  name: 'johnlewis',
  country: 'UK',
  currency: '£',
  labels: {
    inStock: {
      container: '#button--add-to-basket',
      text: ['Add to your basket'],
    },
  },

});
