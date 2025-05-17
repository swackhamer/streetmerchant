/**
 * Store configuration for extended-store
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';

/**
 * ExtendedStore store
 */
export const ExtendedStore = createStandardStore({
  name: 'extended-store',
  country: 'US',
  currency: '$',

});
