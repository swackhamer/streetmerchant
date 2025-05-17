/**
 * Store configuration for microsoft-ca
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Microsoft-ca store
 */
export const MicrosoftCa = createStoreFromRegistry('microsoft-ca');
