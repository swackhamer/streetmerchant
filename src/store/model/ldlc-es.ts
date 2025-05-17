/**
 * Store configuration for ldlc-es
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * LdlcEs store
 */
export const LdlcEs = createEuropeanStore({
  name: 'ldlc-es',
  country: 'ES',
  currency: '€',
  labels: {
    inStock: {
      container: '#product-page-stock > div > div.content > div > span',
      text: ['stock'],
    },
    maxPrice: {
      container:
        '#activeOffer > div.product-info > div.wrap-aside > aside > div.price > div',
      euroFormat: true,
    },
    outOfStock: {
      container: '#product-page-stock > div > div.content > div > span',
      text: ['agotado'],
    },
  },

});
