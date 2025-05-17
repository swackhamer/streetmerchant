/**
 * Store configuration for rosman
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Rosman store
 */
export const Rosman = createStandardStore({
  name: 'rosman',
  country: 'AU',
  currency: '$',
  labels: {
    inStock: {
      container:
        '#Availability > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(4)',
      text: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    },
    maxPrice: {
      container: 'span.price.price--withTax.price--main',
      euroFormat: false,
    },
    outOfStock: {
      container:
        '#Availability > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(4)',
      text: ['ETA', 'Call Us'],
    },
  },
  backoffStatusCodes: [403, 429],

});
