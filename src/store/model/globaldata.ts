/**
 * Store configuration for globaldata
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Globaldata store
 */
export const Globaldata = createEuropeanStore({
  name: 'globaldata',
  country: 'PT',
  currency: '€',
  labels: {
    inStock: {
      container:
        'body > main > div.main-container > div.container.mb-5 > div.row.align-items-lg-start.z-above-pattern > ck-product-cta-box > div > div.d-flex.mt-4 > div.w-100 > ck-addto-cart-wrapper > form > div > div.w-100.pl-3 > button > span',
      text: ['Adicionar ao carrinho'],
    },
    outOfStock: {
      container:
        'body > main > div.main-container > div.container.mb-5 > div.row.align-items-lg-start.z-above-pattern > ck-product-cta-box > div > div.d-flex.mt-4 > div.w-100 > button',
      text: ['Notifique-me quando estiver em stock'],
    },
  },

});
