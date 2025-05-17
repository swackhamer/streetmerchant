/**
 * Store configuration for scorptec
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Scorptec store
 */
export const Scorptec = createStoreFromRegistry('scorptec');
