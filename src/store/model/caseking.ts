/**
 * Store configuration for caseking
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Caseking store
 */
export const Caseking = createEuropeanStore({
  name: 'caseking',
  country: 'DE',
  currency: '€',
  labels: {
    inStock: {
      container: '.delivery_container',
      text: ['lagernd', 'im zulauf', 'ab'],
    },
    maxPrice: {
      container: '#buybox .article_details_price',
      euroFormat: true,
    },
    outOfStock: {
      container: '.delivery_container',
      text: ['unbekannt'],
    },
  },
  backoffStatusCodes: [403, 429],

});
