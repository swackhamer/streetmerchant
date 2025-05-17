/**
 * Store configuration for cyberport-at
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Cyberport-at store
 */
export const CyberportAt = createStoreFromRegistry('cyberport-at');
