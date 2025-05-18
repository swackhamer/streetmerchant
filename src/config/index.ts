import dotenv from 'dotenv';
import {existsSync} from 'fs';
import path from 'path';
import chalk from 'chalk';
import {banner} from '../banner';
import {browser, captchaHandler} from './browser-config';
import {notifications} from './notification-config';
import {store} from './store-config';
import {proxy} from './proxy-config';
import {page} from './page-config';
import {nvidia} from './nvidia-config';

// Load environment variables from dotenv file
function loadEnvironmentVariables() {
  // Store original env vars
  const originalEnv = {...process.env};

  // Priority for environment file:
  // 1. Custom config file specified with npm_config_conf
  // 2. .env file in current working directory
  // 3. dotenv file in current working directory (legacy)

  let configPath: string | undefined;

  if (process.env.npm_config_conf) {
    // Custom config specified
    const customPath = path.resolve(process.cwd(), process.env.npm_config_conf);
    if (existsSync(customPath)) {
      configPath = customPath;
    }
  }

  if (!configPath) {
    // Check .env in current working directory
    const dotEnvPath = path.resolve(process.cwd(), '.env');
    if (existsSync(dotEnvPath)) {
      configPath = dotEnvPath;
    }
  }

  if (!configPath) {
    // Check legacy 'dotenv' in current working directory
    const legacyDotenvPath = path.resolve(process.cwd(), 'dotenv');
    if (existsSync(legacyDotenvPath)) {
      configPath = legacyDotenvPath;
    }
  }

  // Load the config file if found
  if (configPath) {
    // Load with overwrite option to ensure variables from .env override system variables
    const result = dotenv.config({path: configPath, override: true});
    if (result.error) {
      if (process.env.NODE_ENV !== 'test') {
        console.error(
          chalk.red(`Error loading environment variables from ${chalk.bold(configPath)}:`),
          result.error
        );
      } else {
        console.error(
          `Error loading environment variables from ${configPath}:`,
          result.error
        );
      }
    } else {
      if (process.env.NODE_ENV !== 'test') {
        console.info(chalk.green(`Loaded environment variables from ${chalk.bold(configPath)}`));
      } else {
        console.info(`Loaded environment variables from ${configPath}`);
      }

      // Log key environment variables for debugging
      if (process.env.SHOW_ONLY_SERIES) {
        if (process.env.NODE_ENV !== 'test') {
          console.info(
            chalk.green(`SHOW_ONLY_SERIES set to: ${chalk.cyan(process.env.SHOW_ONLY_SERIES)}`)
          );
        } else {
          console.info(`SHOW_ONLY_SERIES set to: ${process.env.SHOW_ONLY_SERIES}`);
        }
      }
      if (process.env.STORES) {
        if (process.env.NODE_ENV !== 'test') {
          console.info(chalk.green(`STORES set to: ${chalk.cyan(process.env.STORES)}`));
        } else {
          console.info(`STORES set to: ${process.env.STORES}`);
        }
      }
    }
  } else {
    if (process.env.NODE_ENV !== 'test') {
      console.info(
        chalk.yellow(
          'No .env or dotenv file found in current working directory, using environment variables'
        )
      );
    } else {
      console.info('No .env or dotenv file found in current working directory, using environment variables');
    }
  }
}

// Initialize environment
loadEnvironmentVariables();

// Render banner
console.info(
  banner.render(process.env.ASCII_BANNER === 'true', process.env.BANNER_COLOR || '#808080')
);

// Check for deprecated configuration values
function checkDeprecatedConfig() {
  if (process.env.MAX_PRICE) {
    if (process.env.NODE_ENV !== 'test') {
      console.warn(chalk.yellow('ℹ MAX_PRICE is deprecated, please use MAX_PRICE_SERIES_{{series}}'));
    } else {
      console.warn('ℹ MAX_PRICE is deprecated, please use MAX_PRICE_SERIES_{{series}}');
    }
  }

  if (
    process.env.TWITCH_ACCESS_TOKEN ||
    process.env.TWITCH_CHANNEL ||
    process.env.TWITCH_CLIENT_ID ||
    process.env.TWITCH_CLIENT_SECRET ||
    process.env.TWITCH_REFRESH_TOKEN
  ) {
    if (process.env.NODE_ENV !== 'test') {
      console.warn(
        chalk.yellow('ℹ TWITCH integrations are currently incompatible with this release')
      );
    } else {
      console.warn('ℹ TWITCH integrations are currently incompatible with this release');
    }
  }
}

checkDeprecatedConfig();

// Initialize showOnlySeries with appropriate default
// If SHOW_ONLY_SERIES is provided in env vars or store.showOnlySeries already has values,
// use those. Otherwise, use all available series from discord notifications.
//
// Note: We need to check both process.env.SHOW_ONLY_SERIES and store.showOnlySeries.length
// because sometimes the environment variable isn't directly accessible, but it was already
// processed by store-config.ts into the store.showOnlySeries array.
const hasUserConfiguredSeries =
  process.env.SHOW_ONLY_SERIES !== undefined || store.showOnlySeries.length > 0;

// If SHOW_ONLY_SERIES is explicitly set in env vars, always use that value directly
// This ensures environment variables properly override any defaults
if (process.env.SHOW_ONLY_SERIES !== undefined) {
  // Parse the environment variable directly rather than using the already processed value
  store.showOnlySeries = process.env.SHOW_ONLY_SERIES.split(',').map(s => s.trim());
  if (process.env.NODE_ENV !== 'test') {
    console.log(
      chalk.green(`Using series filter from environment: ${chalk.cyan(store.showOnlySeries)}`)
    );
  } else {
    console.log(`Using series filter from environment: ${store.showOnlySeries}`);
  }
} else if (store.showOnlySeries.length > 0) {
  // Keep what was already populated from env var in store-config.ts
  if (process.env.NODE_ENV !== 'test') {
    console.log(chalk.green(`Using series filter from config: ${chalk.cyan(store.showOnlySeries)}`));
  } else {
    console.log(`Using series filter from config: ${store.showOnlySeries}`);
  }
} else {
  // No user configuration, use all available series from discord notifications
  store.showOnlySeries = Object.keys(notifications.discord.notifyGroupSeries).filter(
    series => !['test:series', 'captcha-deterrent'].includes(series)
  );
  if (process.env.NODE_ENV !== 'test') {
    console.log(
      chalk.green(`Using default series list: ${chalk.bold.cyan(store.showOnlySeries.length)} series`)
    );
  } else {
    console.log(`Using default series list: ${store.showOnlySeries.length} series`);
  }
}

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

export {envOrArray, envOrBoolean, envOrNumber, envOrNumberMax, envOrNumberMin, envOrString};
