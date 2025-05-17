/**
 * Store configuration for proshop-dk
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * ProshopDk store
 */
export const ProshopDk = createStandardStore({
  name: 'proshop-dk',
  country: 'DK',
  currency: 'kr.',
  labels: {
    inStock: {
      container: '.site-stock',
      text: ['1-2 dages levering', 'fjernlager'],
    },
    maxPrice: {
      container:
        '.site-currency-wrapper > span[class="site-currency-attention"]',
      euroFormat: true,
    },
    outOfStock: {
      container: '.site-stock',
      text: ['bestilt'],
    },
  },

});
