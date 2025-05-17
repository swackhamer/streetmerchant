/**
 * Store configuration for elkjop
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Elkjop store
 */
export const Elkjop = createStandardStore({
  name: 'elkjop',
  country: 'NO',
  currency: 'kr.',
  labels: {
    inStock: {
      container:
        '#product-detail-wrapper > div.col.any-5-12.M-2-5.information > div.buy-button-container.align-left.any-1-1.table-btn > div > div > div.product-price-button-wrap > div > div > span > span',
      text: ['Legg i handlevogn'],
    },
    maxPrice: {
      container: '.product-price-container > span:nth-child(1)',
    },
    outOfStock: {
      container:
        '#product-detail-wrapper > div.col.any-5-12.M-2-5.information > div.buy-button-container.align-left.any-1-1.table-btn > div > div > div.product-price-button-wrap > div > div > span > span',
      text: ['Ikke tilgjengelig'],
    },
  },

});
