/**
 * Store configuration for hardware-planet
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Hardware-planet store
 */
export const HardwarePlanet = createStoreFromRegistry('hardware-planet');
