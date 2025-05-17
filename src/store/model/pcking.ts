/**
 * Store configuration for pcking
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Pcking store
 */
export const Pcking = createEuropeanStore({
  name: 'pcking',
  country: 'DE',
  currency: '€',
  labels: {
    inStock: {
      container: '.es_order_box-article_detail',
      text: ['sofort lieferbar [Versand]', 'abholbereit [PC-KING]'],
    },
    maxPrice: {
      container: 'div.es_product_price-article_detail > b',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: '.es_order_box-article_detail',
        text: ['nicht lieferbar'],
      },
    ],
  },

});
