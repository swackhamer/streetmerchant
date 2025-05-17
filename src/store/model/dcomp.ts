/**
 * Store configuration for dcomp
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Dcomp store
 */
export const Dcomp = createStandardStore({
  name: 'dcomp',
  country: 'AU',
  currency: '$',
  labels: {
    inStock: {
      container: '#cart-info > button.btn.addToCart',
      text: ['Add to', ''],
    },
    maxPrice: {
      container: '#prodprice',
      euroFormat: false,
    },
    outOfStock: {
      container: '#cart-info > button.btn.notifyMe',
      text: ['Notify Me'],
    },
  },
  backoffStatusCodes: [403, 429],

});
