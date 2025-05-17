/**
 * Store configuration for overclockers
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Overclockers store
 */
export const Overclockers = createStoreFromRegistry('overclockers');
