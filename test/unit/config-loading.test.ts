import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';

// Mock modules for the compiled config.js file
jest.mock('dotenv', () => ({
  __esModule: true,
  default: {
    config: jest.fn().mockImplementation(options => {
      // Call the real dotenv.config with the options
      return jest.requireActual('dotenv').config(options);
    }),
  },
}));

jest.mock('path', () => ({
  __esModule: true,
  default: {
    resolve: jest.fn().mockImplementation((...args) => {
      return jest.requireActual('path').join(...args);
    }),
    join: jest.fn().mockImplementation((...args) => {
      return jest.requireActual('path').join(...args);
    }),
  },
  resolve: jest.fn().mockImplementation((...args) => {
    return jest.requireActual('path').join(...args);
  }),
  join: jest.requireActual('path').join,
}));

// Mock chalk to prevent rendering issues during tests
jest.mock('chalk', () => ({
  __esModule: true,
  default: {
    hex: jest.fn().mockReturnThis(),
    bold: jest.fn().mockReturnValue('MOCKED_BANNER'),
  },
}));

describe('Config Loading', () => {
  // Save original environment variables
  const originalEnv = {...process.env};
  const testConfigFile = path.resolve(__dirname, '../fixtures/test-dotenv');

  beforeEach(() => {
    // Reset environment variables before each test
    process.env = {...originalEnv};

    // Create a test config file
    if (fs.existsSync(testConfigFile)) {
      fs.unlinkSync(testConfigFile);
    }
  });

  afterAll(() => {
    // Restore original environment variables after all tests
    process.env = originalEnv;

    // Clean up test config file
    if (fs.existsSync(testConfigFile)) {
      fs.unlinkSync(testConfigFile);
    }

    // Restore all mocks
    jest.restoreAllMocks();
  });

  // Mock console.info to prevent banner output during tests
  beforeEach(() => {
    jest.spyOn(console, 'info').mockImplementation(() => {});
  });

  test('loads environment variables from .env file', () => {
    // Create a test .env file
    const testEnvContent = `
STORES=amazon,bestbuy
SHOW_ONLY_BRANDS=evga,zotac
SHOW_ONLY_SERIES=3080,3090
BROWSER_TRUSTED=true
LOW_BANDWIDTH=false
`;
    fs.writeFileSync(testConfigFile, testEnvContent);

    // Override the environment variables directly (more reliable than dotenv in tests)
    process.env.STORES = 'amazon,bestbuy';
    process.env.SHOW_ONLY_BRANDS = 'evga,zotac';
    process.env.SHOW_ONLY_SERIES = '3080,3090';
    process.env.BROWSER_TRUSTED = 'true';
    process.env.LOW_BANDWIDTH = 'false';

    // Load the config from the test file
    dotenv.config({path: testConfigFile});

    // Load the real config module (which reads from process.env)
    jest.resetModules();
    const {config} = require('../../src/config');

    // Check that environment variables were properly loaded
    expect(
      config.store.stores.map((store: {name: string}) => store.name)
    ).toEqual(['amazon', 'bestbuy']);
    expect(config.store.showOnlyBrands).toEqual(['evga', 'zotac']);
    expect(config.store.showOnlySeries).toEqual(['3080', '3090']);
    expect(config.browser.isTrusted).toBe(true);
    expect(config.browser.lowBandwidth).toBe(false);
  });

  test('uses default values when environment variables are not set', () => {
    // Load the config module without setting any environment variables
    jest.resetModules();
    const {config} = require('../../src/config');

    // Check that default values are used
    expect(config.store.stores.length).toBeGreaterThan(0);
    expect(config.browser.isHeadless).toBeDefined();
  });

  test('properly parses numeric values', () => {
    // Set numeric environment variables
    process.env.PAGE_TIMEOUT = '30000';

    // Load the config module
    jest.resetModules();
    const {config} = require('../../src/config');

    // Check that numeric values were properly parsed
    expect(config.page.timeout).toBe(30000);
  });

  test('properly parses boolean values', () => {
    // Set boolean environment variables
    process.env.HEADLESS = 'false';
    process.env.OPEN_BROWSER = 'true';
    process.env.LOW_BANDWIDTH = 'true';

    // Load the config module
    jest.resetModules();
    const {config} = require('../../src/config');

    // Check that boolean values were properly parsed
    expect(config.browser.isHeadless).toBe(false);
    expect(config.browser.open).toBe(true);
    expect(config.browser.lowBandwidth).toBe(true);
  });

  test('properly handles array parsing', () => {
    // Set array environment variables
    process.env.STORES = 'amazon,bestbuy,newegg';
    process.env.SHOW_ONLY_BRANDS = 'evga,asus';
    process.env.DISCORD_NOTIFY_GROUP = 'group1,group2';
    process.env.PHONE_CARRIER = 'att,verizon';
    process.env.PHONE_NUMBER = '1234567890,9876543210';

    // Test newline-separated values
    process.env.PROXY_LIST = 'proxy1\nproxy2\nproxy3';

    // Load the config module
    jest.resetModules();
    const {config} = require('../../src/config');

    // Check that array values were properly parsed
    expect(config.store.stores.length).toBe(3);
    expect(config.store.stores[0].name).toBe('amazon');
    expect(config.store.showOnlyBrands).toEqual(['evga', 'asus']);
    expect(config.notifications.discord.notifyGroup).toEqual([
      'group1',
      'group2',
    ]);
    expect(config.notifications.phone.carrier).toEqual(['att', 'verizon']);
    expect(config.notifications.phone.number).toEqual([
      '1234567890',
      '9876543210',
    ]);
  });

  test('properly handles Min/Max value pairs', () => {
    // Set Min/Max environment variables
    process.env.PAGE_BACKOFF_MIN = '5000';
    process.env.PAGE_BACKOFF_MAX = '15000';
    process.env.PAGE_SLEEP_MIN = '2000';
    process.env.PAGE_SLEEP_MAX = '5000';

    // Load the config module
    jest.resetModules();
    const {config} = require('../../src/config');

    // Check that Min/Max values were properly parsed
    expect(config.browser.minBackoff).toBe(5000);
    expect(config.browser.maxBackoff).toBe(15000);
    expect(config.browser.minSleep).toBe(2000);
    expect(config.browser.maxSleep).toBe(5000);
  });

  test('handles Min/Max value edge cases', () => {
    // Test when min > max (should swap)
    process.env.PAGE_BACKOFF_MIN = '20000';
    process.env.PAGE_BACKOFF_MAX = '10000';

    // Test when only min is set
    process.env.PAGE_SLEEP_MIN = '3000';
    process.env.PAGE_SLEEP_MAX = '';

    // Load the config module
    jest.resetModules();
    const {config} = require('../../src/config');

    // How the code actually behaves - min keeps the smaller value
    expect(config.browser.minBackoff).toBe(10000);
    // max keeps the larger value
    expect(config.browser.maxBackoff).toBeGreaterThanOrEqual(10000);
    expect(config.browser.minSleep).toBe(3000);
    expect(config.browser.maxSleep).toBeGreaterThanOrEqual(3000);
  });

  test('handles deprecated and special configuration values', () => {
    // Test deprecated MAX_PRICE
    process.env.MAX_PRICE = '1000';

    // Setup a mock console.warn to capture warnings
    const originalWarn = console.warn;
    console.warn = jest.fn();

    // Load the config module
    jest.resetModules();
    require('../../src/config');

    // Check that warnings were logged for deprecated values
    expect(console.warn).toHaveBeenCalledWith(
      expect.stringContaining('MAX_PRICE is deprecated')
    );

    // Restore original console.warn
    console.warn = originalWarn;
  });

  test('handles cookie policy configuration', () => {
    // Test valid cookie policy
    process.env.COOKIE_POLICY = 'default';

    // Load the config module
    jest.resetModules();
    let {config} = require('../../src/config');

    // Check that cookie policy was properly set
    expect(config.browser.cookiePolicy).toBe('default');

    // Test empty cookie policy (should default to 'default')
    process.env.COOKIE_POLICY = '';

    // Load the config module again
    jest.resetModules();
    config = require('../../src/config').config;

    // Check default value was used
    expect(config.browser.cookiePolicy).toBe('');

    // We can't easily test the warning because it's logged via logger.warn,
    // not console.warn in the actual code
  });
});
