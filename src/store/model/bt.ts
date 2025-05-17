/**
 * Store configuration for bt
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Bt store
 */
export const Bt = createStandardStore({
  name: 'bt',
  country: 'UK',
  currency: '£',
  labels: {
    outOfStock: {
      container: '#cms-component-content-panel-200124986 p',
      text: ["We've sold out of our current allocation of PlayStation 5"],
    },
  },

});
