/**
 * Registry type definitions
 */
import {StoreFactoryOptions} from '../common/store-factory';

/**
 * Extended options to help with store categorization
 */
export interface ExtendedStoreOptions extends StoreFactoryOptions {
  storeType: 'standard' | 'european' | 'marketplace';
}
