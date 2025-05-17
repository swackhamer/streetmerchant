/**
 * Store configuration for mwave
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Mwave store
 */
export const Mwave = createStandardStore({
  name: 'mwave',
  country: 'AU',
  currency: '$',
  labels: {
    maxPrice: {
      container: 'div.divPriceNormal > div',
      euroFormat: false,
    },
    outOfStock: {
      container: '.stockAndDelivery > li:nth-child(1) > dl > dd',
      text: ['Currently No Stock'],
    },
  },
  backoffStatusCodes: [403, 429],

});
