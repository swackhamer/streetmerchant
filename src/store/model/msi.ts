/**
 * Store configuration for msi
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Msi store
 */
export const Msi = createStandardStore({
  name: 'msi',
  country: 'US',
  currency: '$',
  labels: {
    inStock: {
      container: '#button-cart',
      text: ['ADD TO CART'],
    },
    outOfStock: {
      container: '#product_qty > button.btn.add-cart-button-3',
      text: ['Notify Me'],
    },
    maxPrice: {
      container: '#prices-new',
    },
  },

});
