/**
 * Store configuration for xtremmedia
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Xtremmedia store
 */
export const Xtremmedia = createEuropeanStore({
  name: 'xtremmedia',
  country: 'ES',
  currency: '€',
  labels: {
    inStock: {
      container: '#detail > div.article-list-con_stock > a',
      text: ['DISPONIBLE'],
    },
    maxPrice: {
      container: '#detail > div.offerDetails.article-list-pvp',
      euroFormat: true,
    },
    outOfStock: {
      container: '#detail > div.article-list-sin_stock',
      text: ['AGOTADO'],
    },
  },

});
