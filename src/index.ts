/* eslint-disable no-process-exit */
import fs from 'node:fs';
import {directory as temporaryDirectory} from 'tempy';
import {config} from './config'; // must be loaded before other application code
import {AsyncContextError} from './abortctl';
import * as abortctl from './abortctl';
import {abortBrowserContexts, enableBrowserContexts} from './browser';
import {logger} from './logger';
import {logTransferStats} from './stats';
import {tryLookupAndLoop} from './store';
import {usingBrowser} from './browser';
import {getStores, Store} from './store/model';
// Import sample links for testing the centralized link data store
import {addSampleLinks} from './store/model/sample-links';
import type {Timer} from './timers';
import * as timers from './timers';
import {startAPIServer, stopAPIServer} from './web';

class StreetMerchantApplication {
  readonly #processListeners: Map<NodeJS.Signals, () => void>;

  readonly #errorListeners: Map<
    NodeJS.UncaughtExceptionOrigin,
    (error: unknown) => void
  >;

  #checkForNewStoresTimer?: Timer;
  #errorRestartTimer?: Timer;
  #running = false;
  #statsTimer?: Timer;
  #stores: Store[] = [];
  #shutdownStartTime?: number;
  #tempDirectory?: string;

  constructor() {
    this.#processListeners = new Map([
      ['SIGINT', this.#sigIntHandler.bind(this)],
      ['SIGTERM', this.kill.bind(this)],
      ['SIGQUIT', this.kill.bind(this)],
    ]);

    this.#errorListeners = new Map([
      ['uncaughtException', this.#errorHandler.bind(this)],
      ['unhandledRejection', this.#errorHandler.bind(this)],
    ]);
  }

  async start(): Promise<void> {
    if (this.#running) {
      return;
    }

    // Add sample links to the centralized data store for testing
    addSampleLinks();

    this.#running = true;

    this.#registerListeners();

    abortctl.create('app.running');
    // Ensure browser context is enabled before timers
    enableBrowserContexts();
    timers.enable();

    // register restart handler
    if (config.restartTime > 0) {
      timers.addTimeout(this.restart.bind(this), config.restartTime);
    }

    await startAPIServer();

    this.#tempDirectory = temporaryDirectory({prefix: 'streetmerchant-'});
    config.browser.profileParentDir = this.#tempDirectory;

    // Add sample links to the centralized data store for testing
    addSampleLinks();

    this.#statsTimer = timers.addInterval(logTransferStats, 60000);
    this.#stores = [];

    this.#lookupEnabledStores();

    // check for stores enabled via the web interface every second
    // todo refactor this to use event emitter
    this.#checkForNewStoresTimer = timers.addInterval(
      this.#lookupEnabledStores.bind(this),
      1000
    );
  }

  /**
   * Stops the application and performs necessary cleanup operations including
   * clearing timers, closing browser instances, stopping API server, and
   * removing process event listeners. This method returns early and async tasks
   * may be left running until they finish. Use `kill()` to force exiting the
   * process.
   */
  async stop(): Promise<void> {
    if (!this.#running) {
      return;
    }

    this.#errorListeners.forEach((listener, signal) =>
      process.removeListener(signal, listener)
    );

    if (this.#checkForNewStoresTimer) {
      timers.removeInterval(this.#checkForNewStoresTimer);
      this.#checkForNewStoresTimer = undefined;
    }

    if (this.#errorRestartTimer) {
      timers.removeTimeout(this.#errorRestartTimer);
      this.#errorRestartTimer = undefined;
    }

    if (this.#statsTimer) {
      timers.removeTimeout(this.#statsTimer);
      this.#statsTimer = undefined;
    }

    // the ordering here is specific while page functions do not accept
    // signalling via an abort controller
    abortctl.destroy('app.running');
    timers.abort();
    await abortBrowserContexts();

    await stopAPIServer().catch(() => {});

    this.#stores = [];

    if (this.#tempDirectory) {
      logger.debug(`cleaning up temp directory: file://${this.#tempDirectory}`);
      await fs.promises
        .rm(this.#tempDirectory, {recursive: true, force: true})
        .catch(error =>
          logger.warn('✖ error cleaning up temp directory', error)
        );
      this.#tempDirectory = undefined;
    }

    this.#running = false;

    this.#processListeners.forEach((listener, signal) =>
      process.removeListener(signal, listener)
    );
  }

  async restart(): Promise<void> {
    logger.info('ℹ restarting...');
    await this.stop();
    await this.start();
  }

  async kill(): Promise<void> {
    await this.stop().catch(() => {});
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  }

  #lookupEnabledStores() {
    const pending = [...getStores().values()].filter(
      store => !this.#stores.includes(store)
    );

    for (const store of pending) {
      usingBrowser(store, browser => tryLookupAndLoop(browser)).finally(() => {
        const i = this.#stores.indexOf(store);
        if (i >= 0) {
          this.#stores.splice(i, 1);
        }
      });
      this.#stores.push(store);
    }
  }

  /**
   * Handles the SIGINT signal for graceful shutdown of the application.
   * This method ensures that the application stops all operations and exits
   * appropriately. If the application is already in the shutting down state,
   * it forces the process to exit with status code 1.
   */
  async #sigIntHandler() {
    if (this.#shutdownStartTime) {
      if (Date.now() - this.#shutdownStartTime < 100) {
        // noop if sigint received more than once in 100 ms span
        // workaround for (p)npm sending sigint too many times
        return;
      } else {
        logger.warn('✖ forcing shutdown...');
        process.exit(1);
      }
    }

    logger.info('ℹ shutdown requested...');
    this.#shutdownStartTime = Date.now();
    await this.stop();
  }

  async #errorHandler(error: unknown) {
    if (
      this.#shutdownStartTime ||
      this.#errorRestartTimer ||
      error instanceof AsyncContextError
    ) {
      return;
    }

    logger.error(
      '✖ something bad happened, resetting streetmerchant in 5 seconds',
      error
    );

    this.#errorRestartTimer = timers.addTimeout(this.restart.bind(this), 5000);
  }

  #registerListeners() {
    this.#processListeners.forEach((listener, signal) =>
      process.addListener(signal, listener)
    );

    this.#errorListeners.forEach((listener, signal) =>
      process.addListener(signal as 'uncaughtException', listener)
    );
  }
}

export const app = new StreetMerchantApplication();

void app.start();
