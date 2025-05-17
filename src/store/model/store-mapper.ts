/**
 * Store configuration for store-mapper
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';

/**
 * StoreMapper store
 */
export const StoreMapper = createStandardStore({
  name: 'store-mapper',
  country: 'US',
  currency: '$',

});
