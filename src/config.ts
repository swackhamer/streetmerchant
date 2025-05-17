/**
 * Configuration module
 * 
 * This file is now a thin wrapper around the modular configuration system
 * for backward compatibility.
 */

// Re-export all configuration from the modular system
export { 
  config, 
  defaultStoreData, 
  setConfig,
  envOrArray,
  envOrBoolean,
  envOrNumber,
  envOrNumberMax,
  envOrNumberMin,
  envOrString
} from './config/index';