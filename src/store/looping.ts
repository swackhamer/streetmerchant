/**
 * Store looping functionality
 *
 * Handles the main loop for repeatedly looking up product stock.
 */
import {Browser} from 'puppeteer';
import {config} from '../config';
import {logger} from '../logger';
import {getSleepTime, delay} from '../util';
import {usingBrowser} from '../browser';
import {lookup, lookupAllStores} from './lookup';
import {Store} from './model';
import chalk from 'chalk';

/**
 * Try to lookup and loop with exponential backoff on error
 */
export async function tryLookupAndLoop(browser: Browser): Promise<void> {
  try {
    await lookupAllStores(browser);
  } catch (error) {
    logger.error(
      `${chalk.red('✖')} [${chalk.magenta('looping')}] unexpected error: ${chalk.red(error)}`
    );
  }

  // Create a minimal store object for sleep time calculation
  const sleepTime = getSleepTime({
    links: [],
    labels: {},
    name: 'looping',
    country: '',
    currency: '',
    minPageSleep: config.browser.minBackoff,
    maxPageSleep: config.browser.maxBackoff,
  });

  logger.debug(`ℹ [looping] sleeping for ${chalk.bold.cyan(sleepTime + 'ms')}`);
  setTimeout(tryLookupAndLoop, sleepTime, browser);
}

/**
 * Start the main store checking loop
 */
export async function startLoop(browser: Browser): Promise<void> {
  await tryLookupAndLoop(browser);
}

/**
 * Start a dedicated loop for a single store
 */
export async function startStoreLoop(store: Store): Promise<void> {
  try {
    await usingBrowser(store, async browser => {
      while (true) {
        await lookup(browser, store);

        // Calculate the actual sleep time - ensure it's at least 5 seconds
        let sleepTime = getSleepTime(store);
        if (!sleepTime || sleepTime < 5000) {
          logger.warn(
            `Sleep time for ${chalk.yellow(store.name)} is too short (${chalk.red(
              sleepTime + 'ms'
            )}), using ${chalk.green('5000ms')} minimum`
          );
          sleepTime = 5000;
        }

        logger.info(
          `${chalk.cyan('⏳')} Sleeping for ${chalk.bold.green(
            Math.round(sleepTime / 1000) + ' seconds'
          )} before next check of ${chalk.yellow(store.name)}`
        );
        await delay(sleepTime);
      }
    });
  } catch (error) {
    logger.error(
      `${chalk.red('✖')} [${chalk.yellow(store.name)}] store loop error: ${chalk.red(error)}`
    );
  }
}
