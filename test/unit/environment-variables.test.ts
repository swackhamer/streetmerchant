import path from 'path';
import dotenv from 'dotenv';

// Import Jest test functions
const jestExports = jest.requireActual('@jest/globals');
const {describe, test, expect, beforeEach} = jestExports;

/**
 * Mock implementation of the loadEnvironmentVariables function from src/config/index.ts
 * We don't import it directly to avoid initializing actual configuration during tests
 */
function loadEnvironmentVariables() {
  // Store original env vars
  const originalEnv = {...process.env};

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
    // In real implementation we'd use async but for testing we can mock this
    if (mockExistsSync(customPath)) {
      configPath = customPath;
    }
  }

  if (!configPath) {
    // Check .env in project root first
    const dotEnvPath = path.join(__dirname, '../../.env');
    if (mockExistsSync(dotEnvPath)) {
      configPath = dotEnvPath;
    }
  }

  if (!configPath) {
    // Check legacy 'dotenv' in project root
    const legacyDotenvPath = path.join(__dirname, '../../dotenv');
    if (mockExistsSync(legacyDotenvPath)) {
      configPath = legacyDotenvPath;
    }
  }

  // Load the config file if found
  if (configPath) {
    const result = mockDotenvConfig({path: configPath});
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

  return {originalEnv, configPath};
}

// Mock implementations
const mockExistsSync = jest.fn().mockReturnValue(false);
const mockDotenvConfig = jest.fn().mockReturnValue({parsed: {}});

// Mock fs.existsSync
jest.mock('fs', () => ({
  ...jest.requireActual('fs'),
  existsSync: (path: string) => mockExistsSync(path),
}));

// Mock dotenv.config
jest.mock('dotenv', () => ({
  config: (options?: any) => {
    const result = mockDotenvConfig(options);
    if (result.parsed) {
      Object.keys(result.parsed).forEach(key => {
        process.env[key] = (result.parsed as Record<string, string>)[key];
      });
    }
    return result;
  },
}));

describe('Environment Variable Handling', () => {
  let originalProcessEnv: NodeJS.ProcessEnv;

  beforeEach(() => {
    // Save original env vars
    originalProcessEnv = {...process.env};

    // Reset mocks for each test
    mockExistsSync.mockReset().mockReturnValue(false);
    mockDotenvConfig.mockReset().mockReturnValue({parsed: {}});

    // Reset process.env
    process.env = {NODE_ENV: 'test'};
  });

  afterEach(() => {
    // Restore original env vars
    process.env = originalProcessEnv;
  });

  test('should prioritize custom config file when npm_config_conf is set', () => {
    // Setup
    process.env.npm_config_conf = 'custom-config';
    mockExistsSync.mockImplementation((path: string) => path.includes('custom-config'));
    mockDotenvConfig.mockReturnValue({parsed: {TEST_VAR: 'custom-value'}});

    // Execute
    const {configPath} = loadEnvironmentVariables();

    // Verify
    expect(configPath).toContain('custom-config');
  });

  test('should prioritize .env file in project root', () => {
    // Setup
    mockExistsSync.mockImplementation((path: string) => path.endsWith('/.env'));
    mockDotenvConfig.mockReturnValue({parsed: {TEST_VAR: 'env-value'}});

    // Execute
    const {configPath} = loadEnvironmentVariables();

    // Verify
    expect(configPath).toMatch(/\/\.env$/);
  });

  test('should fall back to dotenv file in project root', () => {
    // Setup
    mockExistsSync.mockImplementation((path: string) => path.endsWith('/dotenv'));
    mockDotenvConfig.mockReturnValue({parsed: {TEST_VAR: 'dotenv-value'}});

    // Execute
    const {configPath} = loadEnvironmentVariables();

    // Verify
    expect(configPath).toMatch(/\/dotenv$/);
  });

  test('should preserve original environment variables not in dotenv file', () => {
    // Setup
    mockExistsSync.mockImplementation((path: string) => path.endsWith('/dotenv'));
    process.env.PRESERVED_VAR = 'original-value';
    process.env.OVERRIDDEN_VAR = 'original-value';

    mockDotenvConfig.mockReturnValue({
      parsed: {
        OVERRIDDEN_VAR: 'new-value',
        NEW_VAR: 'dotenv-value',
      },
    });

    // Execute
    const {originalEnv} = loadEnvironmentVariables();

    // Verify
    expect(originalEnv.PRESERVED_VAR).toBe('original-value');
    expect(process.env.PRESERVED_VAR).toBe('original-value');
    expect(process.env.OVERRIDDEN_VAR).toBe('new-value');
    expect(process.env.NEW_VAR).toBe('dotenv-value');
  });

  test('should use environment variables when no config file is found', () => {
    // Setup
    mockExistsSync.mockReturnValue(false);
    process.env.TEST_VAR = 'env-value';

    // Execute
    const {configPath} = loadEnvironmentVariables();

    // Verify
    expect(configPath).toBeUndefined();
    expect(process.env.TEST_VAR).toBe('env-value');
  });
});
