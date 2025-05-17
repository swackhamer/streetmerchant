/**
 * Store configuration for rosman-melb
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * RosmanMelb store
 */
export const RosmanMelb = createStandardStore({
  name: 'rosman-melb',
  country: 'AU',
  currency: '$',
  labels: {
    inStock: {
      container:
        '#Availability > div > table > tbody > tr:nth-child(2) > td:nth-child(1)',
      text: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    },
    maxPrice: {
      container: 'span.price.price--withTax.price--main',
      euroFormat: false,
    },
    outOfStock: {
      container:
        '#Availability > div > table > tbody > tr:nth-child(2) > td:nth-child(1)',
      text: ['ETA', 'Call Us'],
    },
  },
  backoffStatusCodes: [403, 429],

});
