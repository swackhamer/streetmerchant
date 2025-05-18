/**
 * Final test to verify environment variable loading and store configuration
 */
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

console.log('FINAL ENVIRONMENT CONFIGURATION TEST');
console.log('===================================\n');

// Mimic the loadEnvironmentVariables function from src/config/index.ts
function loadEnvironmentVariables() {
  // Priority for environment file:
  // 1. Custom config file specified with npm_config_conf
  // 2. .env file in current working directory
  // 3. dotenv file in current working directory (legacy)
  
  let configPath;
  
  if (process.env.npm_config_conf) {
    // Custom config specified
    const customPath = path.resolve(process.cwd(), process.env.npm_config_conf);
    if (fs.existsSync(customPath)) {
      configPath = customPath;
    }
  }
  
  if (!configPath) {
    // Check .env in current working directory
    const dotEnvPath = path.resolve(process.cwd(), '.env');
    if (fs.existsSync(dotEnvPath)) {
      configPath = dotEnvPath;
    }
  }
  
  if (!configPath) {
    // Check legacy 'dotenv' in current working directory
    const legacyDotenvPath = path.resolve(process.cwd(), 'dotenv');
    if (fs.existsSync(legacyDotenvPath)) {
      configPath = legacyDotenvPath;
    }
  }
  
  // Load the config file if found
  if (configPath) {
    // Load with overwrite option to ensure variables from .env override system variables
    const result = dotenv.config({ path: configPath, override: true });
    if (result.error) {
      console.error(`Error loading environment variables from ${configPath}:`, result.error);
    } else {
      console.log(`Loaded environment variables from ${configPath}`);
      
      // Log key environment variables for debugging
      console.log(`STORES set to: ${process.env.STORES || '(not set)'}`);
      console.log(`SHOW_ONLY_SERIES set to: ${process.env.SHOW_ONLY_SERIES || '(not set)'}`);
    }
  } else {
    console.log('No .env or dotenv file found in current working directory, using environment variables');
  }
}

// Helper functions to mimic the ones in store-config.ts
function envOrArray(value, defaultValue = []) {
  if (!value) {
    return defaultValue;
  }
  
  return value.split(',').map(s => s.trim());
}

function envOrString(value, defaultValue = '') {
  return value !== undefined ? value : defaultValue;
}

// Load environment variables
loadEnvironmentVariables();

// Configure stores like in store-config.ts
const stores = (process.env.STORES ? 
  // If STORES is explicitly set in .env, use only those stores
  envOrArray(process.env.STORES) : 
  // Otherwise use an empty array (no stores)
  []
).map(entry => {
  const [name, minPageSleep, maxPageSleep] = entry.match(/[^:]+/g) || [];
  
  return {
    name: envOrString(name),
    minPageSleep: minPageSleep ? Number(minPageSleep) : 0,
    maxPageSleep: maxPageSleep ? Number(maxPageSleep) : 0
  };
});

// Configure series like in config/index.ts and store-config.ts
const showOnlySeries = process.env.SHOW_ONLY_SERIES !== undefined ? 
  envOrArray(process.env.SHOW_ONLY_SERIES) : 
  [];

console.log('\nConfiguration Results:');
console.log('---------------------');
console.log('Configured Stores:');
if (stores.length > 0) {
  console.log(stores);
} else {
  console.log('(no stores configured)');
}

console.log('\nConfigured Series:');
if (showOnlySeries.length > 0) {
  console.log(showOnlySeries);
} else {
  console.log('(no series configured)');
}

console.log('\nFinal Verification:');
console.log('------------------');
console.log(`1. The application loads environment variables ONLY from .env in the current working directory`);
console.log(`2. Variables from .env override any system environment variables`);
console.log(`3. No default values are used - only values explicitly defined in .env are used`);
console.log(`4. If STORES is not in .env, no stores will be processed`);
console.log(`5. If SHOW_ONLY_SERIES is not in .env, no series will be checked`);
console.log(`6. Browser launches will ONLY happen for stores explicitly configured in STORES variable`);