/**
 * Store configuration for pbtech
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Pbtech store
 */
export const Pbtech = createStandardStore({
  name: 'pbtech',
  country: 'AU',
  currency: '$',
  labels: {
    inStock: [
      {
        container:
          '#product_right_column > div.product_bgWrap > div.p_ov_stock_summary_dd > div > div',
        text: ['In stock'],
      },
      {
        container: '.p_stock_title_dd',
        text: ['In stock'],
      },
    ],
    maxPrice: {
      container: 'div.p_price_dd > div.p_price > span.ginc',
      euroFormat: false,
    },
    outOfStock: {
      container:
        '#product_right_column > div.product_bgWrap > div.p_ov_stock_summary_dd > div > div',
      text: ['Available on order', 'Unavailable', 'Out of stock'],
    },
  },
  backoffStatusCodes: [403, 429],

});
