/**
 * Store configuration for msy
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Msy store
 */
export const Msy = createStandardStore({
  name: 'msy',
  country: 'AU',
  currency: '$',
  labels: {
    inStock: {
      container:
        '.product-collateral > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > b:nth-child(1)',
      text: ['In Stock'],
    },
    maxPrice: {
      container:
        '#product-details-form > div > div.product-essential > div.overview > div.prices > div > span',
      euroFormat: false,
    },
    outOfStock: {
      container: 'td.spec-name:nth-child(2)',
      text: ['Out of Stock'],
    },
  },
  backoffStatusCodes: [403, 429],

});
