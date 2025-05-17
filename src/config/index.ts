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
  if (process.env.npm_config_conf) {
    if (
      existsSync(path.join(__dirname, '../../' + process.env.npm_config_conf))
    ) {
      dotenv.config({
        path: path.join(__dirname, '../../' + process.env.npm_config_conf),
      });
    } else {
      dotenv.config({path: path.join(__dirname, '../../.env')});
    }
  } else if (existsSync(path.join(__dirname, '../../dotenv'))) {
    dotenv.config({path: path.join(__dirname, '../../dotenv')});
  } else if (existsSync(path.join(__dirname, '../dotenv'))) {
    dotenv.config({path: path.join(__dirname, '../dotenv')});
  } else {
    dotenv.config({path: path.join(__dirname, '../../.env')});
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