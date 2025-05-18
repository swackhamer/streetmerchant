import {Browser, launch} from 'puppeteer';
import {config} from '../src/config';
import {logger} from '../src/logger';
import {Link, Store} from '../src/store/model';
import path from 'path';
import fs from 'fs';

/**
 * Get a test link for general testing purposes
 */
export function getTestLink(): Link {
  const link: Link = {
    brand: 'test:brand',
    cartUrl: 'https://www.example.com/cartUrl',
    model: 'test:model',
    price: 100,
    series: 'test:series',
    url: 'https://www.example.com/url',
  };
  return link;
}

/**
 * Get a test link that will trigger captcha detection
 */
export function getCaptchaTestLink(): Link {
  const link: Link = {
    brand: 'test:brand',
    cartUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/RickRoll.png/250px-RickRoll.png',
    model: 'test:model',
    price: 100,
    series: 'test:series',
    url: 'https://en.wikipedia.org/wiki/Rickrolling',
  };
  return link;
}

/**
 * Get a test store with a variety of configurations
 */
export function getTestStore(): Store {
  const storeLinks = [getTestLink(), getCaptchaTestLink()];

  const store: Store = {
    currency: '',
    labels: {
      captcha: {
        container: '#firstHeading',
        text: ['Rickrolling'],
      },
      captchaHandler: {
        challenge: 'img.thumbimage',
        input: '#searchInput',
        submit: 'body',
        captureType: 'image',
      },
      inStock: {
        container: 'test:container',
        text: ['test:text'],
      },
    },
    links: storeLinks,
    name: 'test:name',
    country: 'TEST',
  };

  return store;
}

/**
 * Get a test store configured specifically for in-stock detection
 */
export function getInStockTestStore(): Store {
  const store = getTestStore();
  store.labels.inStock = {
    container: 'body',
    text: ['In Stock', 'Add to Cart'],
  };
  store.labels.outOfStock = {
    container: 'body',
    text: ['Out of Stock', 'Sold Out'],
  };
  return store;
}

/**
 * Launch a browser instance suitable for testing
 */
export async function launchTestBrowser(): Promise<Browser> {
  const args: string[] = [];

  // Skip Chromium Linux Sandbox
  // https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#setting-up-chrome-linux-sandbox
  if (config.browser.isTrusted) {
    args.push('--no-sandbox');
    args.push('--disable-setuid-sandbox');
  }

  // https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#tips
  // https://stackoverflow.com/questions/48230901/docker-alpine-with-node-js-and-chromium-headless-puppeter-failed-to-launch-c
  if (config.docker) {
    args.push('--disable-dev-shm-usage');
    args.push('--no-sandbox');
    args.push('--disable-setuid-sandbox');
    args.push('--headless');
    args.push('--disable-gpu');
    config.browser.open = false;
  }

  // Add the address of the proxy server if defined
  if (config.proxy.address) {
    args.push(
      `--proxy-server=${config.proxy.protocol}://${config.proxy.address}:${config.proxy.port}`
    );
  }

  if (args.length > 0) {
    logger.info('ℹ puppeteer config: ', args);
  }

  // Force headless mode for tests regardless of config
  return await launch({
    args,
    defaultViewport: {
      height: config.page.height,
      width: config.page.width,
    },
    headless: true,
  });
}

/**
 * Helper to get the absolute path to a test fixture
 * @param relativePath Relative path from the test fixtures directory
 * @returns Absolute path to the test fixture
 */
export function getFixturePath(relativePath: string): string {
  return path.resolve(__dirname, 'fixtures', relativePath);
}

/**
 * Cleanup resources after tests
 * @param browser Browser instance to close
 */
export async function cleanup(browser?: Browser): Promise<void> {
  if (browser) {
    await browser.close();
  }
}

/**
 * Create a temporary test file with the given content
 * @param fileName Name of the temp file
 * @param content Content to write to the temp file
 * @returns Path to the created temp file
 */
export function createTempFile(fileName: string, content: string): string {
  const tempDir = path.resolve(__dirname, 'temp');

  // Create temp directory if it doesn't exist
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, {recursive: true});
  }

  const filePath = path.join(tempDir, fileName);
  fs.writeFileSync(filePath, content);

  return filePath;
}

/**
 * Remove a temporary test file
 * @param filePath Path to the temp file to remove
 */
export function removeTempFile(filePath: string): void {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
}

/**
 * Sleep for a specified duration
 * @param ms Milliseconds to sleep
 * @returns Promise that resolves after the specified duration
 */
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Create test fixtures directory if it doesn't exist
 */
export function ensureFixturesDir(): void {
  const fixturesDir = path.resolve(__dirname, 'fixtures');
  if (!fs.existsSync(fixturesDir)) {
    fs.mkdirSync(fixturesDir, {recursive: true});
  }
}
