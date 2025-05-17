/**
 * Logger - Main export point for logging utilities
 * 
 * This file is now a thin wrapper around the modular logger implementation
 * for backward compatibility.
 */

// Re-export all components from the modular logger implementation
export {logger, Print, buildProductString, buildSetupString} from './logger/index';