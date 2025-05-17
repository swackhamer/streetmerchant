/**
 * Store configuration for cyberport
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Cyberport store
 */
export const Cyberport = createStoreFromRegistry('cyberport');
