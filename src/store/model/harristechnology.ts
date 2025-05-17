/**
 * Store configuration for harristechnology
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Harristechnology store
 */
export const Harristechnology = createStandardStore({
  name: 'harristechnology',
  country: 'AU',
  currency: '$',
  labels: {
    inStock: {
      container:
        '#content_tab-description > div.desc2 > p.product-availability',
      text: ['in stock'],
    },
    outOfStock: {
      container:
        '#content_tab-description > div.desc2 > p.product-availability',
      text: ['Please call or e-mail us for availability'],
    },
  },
  backoffStatusCodes: [403, 429],

});
