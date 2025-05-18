import dotenv from 'dotenv';
import { existsSync } from 'fs';
import path from 'path';
import { banner } from '../banner';
import { browser, captchaHandler } from './browser-config';
import { notifications } from './notification-config';
import { store } from './store-config';
import { proxy } from './proxy-config';
import { page } from './page-config';
import { nvidia } from './nvidia-config';

// Load environment variables from dotenv file
function loadEnvironmentVariables() {
  // Store original env vars
  const originalEnv = { ...process.env };
  
  // Priority for environment file:
  // 1. Custom config file specified with npm_config_conf
  // 2. .env file in project root
  // 3. dotenv file in project root (legacy)
  // 4. .env file in parent directory
  // 5. dotenv file in parent directory (legacy)
  
  let configPath: string | undefined;
  
  if (process.env.npm_config_conf) {
    // Custom config specified
    const customPath = path.join(__dirname, '../../' + process.env.npm_config_conf);
    if (existsSync(customPath)) {
      configPath = customPath;
    }
  }
  
  if (!configPath) {
    // Check .env in project root first
    const dotEnvPath = path.join(__dirname, '../../.env');
    if (existsSync(dotEnvPath)) {
      configPath = dotEnvPath;
    }
  }
  
  if (!configPath) {
    // Check legacy 'dotenv' in project root
    const legacyDotenvPath = path.join(__dirname, '../../dotenv');
    if (existsSync(legacyDotenvPath)) {
      configPath = legacyDotenvPath;
    }
  }
  
  if (!configPath) {
    // Check .env in parent directory
    const parentDotEnvPath = path.join(__dirname, '../.env');
    if (existsSync(parentDotEnvPath)) {
      configPath = parentDotEnvPath;
    }
  }
  
  if (!configPath) {
    // Check legacy 'dotenv' in parent directory
    const parentLegacyPath = path.join(__dirname, '../dotenv');
    if (existsSync(parentLegacyPath)) {
      configPath = parentLegacyPath;
    }
  }
  
  // Load the config file if found
  if (configPath) {
    const result = dotenv.config({ path: configPath });
    if (result.error) {
      console.error(`Error loading environment variables from ${configPath}:`, result.error);
    } else {
      console.info(`Loaded environment variables from ${configPath}`);
      
      // Restore original env vars for any values not in the env file
      // This preserves environment variables not specified in the file
      for (const key in originalEnv) {
        if (!(key in (result.parsed || {}))) {
          process.env[key] = originalEnv[key];
        }
      }
    }
  } else {
    console.info('No .env or dotenv file found, using environment variables');
  }
}

// Initialize environment
loadEnvironmentVariables();

// Render banner
console.info(
  banner.render(
    process.env.ASCII_BANNER === 'true',
    process.env.BANNER_COLOR || '#808080'
  )
);

// Check for deprecated configuration values
function checkDeprecatedConfig() {
  if (process.env.MAX_PRICE) {
    console.warn(
      'ℹ MAX_PRICE is deprecated, please use MAX_PRICE_SERIES_{{series}}'
    );
  }

  if (
    process.env.TWITCH_ACCESS_TOKEN ||
    process.env.TWITCH_CHANNEL ||
    process.env.TWITCH_CLIENT_ID ||
    process.env.TWITCH_CLIENT_SECRET ||
    process.env.TWITCH_REFRESH_TOKEN
  ) {
    console.warn(
      'ℹ TWITCH integrations are currently incompatible with this release'
    );
  }
}

checkDeprecatedConfig();

// Initialize showOnlySeries with appropriate default
store.showOnlySeries = store.showOnlySeries.length > 0 
  ? store.showOnlySeries 
  : Object.keys(notifications.discord.notifyGroupSeries).filter(
      series => !['test:series', 'captcha-deterrent'].includes(series)
    );

// Set default browser values for store configurations
store.stores = store.stores.map(storeConfig => ({
  ...storeConfig,
  maxPageSleep: storeConfig.maxPageSleep || browser.maxSleep,
  minPageSleep: storeConfig.minPageSleep || browser.minSleep,
}));

const docker = process.env.DOCKER === 'true';
const logLevel = process.env.LOG_LEVEL || 'info';
const restartTime = process.env.RESTART_TIME ? Number(process.env.RESTART_TIME) : 0;

export const defaultStoreData = {
  maxPageSleep: browser.maxSleep,
  minPageSleep: browser.minSleep,
};

export const config = {
  browser,
  captchaHandler,
  docker,
  logLevel,
  notifications,
  nvidia,
  page,
  proxy,
  store,
  restartTime,
};

export function setConfig(newConfig: any) {
  const writeConfig = config as any;
  for (const key of Object.keys(newConfig)) {
    writeConfig[key] = newConfig[key];
  }
}

// Import helper functions for external use
import {
  envOrArray,
  envOrBoolean,
  envOrNumber,
  envOrNumberMax,
  envOrNumberMin,
  envOrString,
} from './env-utils';

export {
  envOrArray,
  envOrBoolean,
  envOrNumber,
  envOrNumberMax,
  envOrNumberMin,
  envOrString,
};