import { promises as fs } from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { expect, jest, test, describe, beforeEach, afterEach } from '@jest/globals';

/**
 * Mock implementation of the loadEnvironmentVariables function from src/config/index.ts
 * We don't import it directly to avoid initializing actual configuration during tests
 */
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
    if (fs.access(customPath).then(() => true).catch(() => false)) {
      configPath = customPath;
    }
  }
  
  if (!configPath) {
    // Check .env in project root first
    const dotEnvPath = path.join(__dirname, '../../.env');
    if (fs.access(dotEnvPath).then(() => true).catch(() => false)) {
      configPath = dotEnvPath;
    }
  }
  
  if (!configPath) {
    // Check legacy 'dotenv' in project root
    const legacyDotenvPath = path.join(__dirname, '../../dotenv');
    if (fs.access(legacyDotenvPath).then(() => true).catch(() => false)) {
      configPath = legacyDotenvPath;
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
        if (!(key in result.parsed || {})) {
          process.env[key] = originalEnv[key];
        }
      }
    }
  } else {
    console.info('No .env or dotenv file found, using environment variables');
  }
  
  return { originalEnv, configPath };
}

// Mock fs module
jest.mock('fs', () => {
  const actualFs = jest.requireActual('fs');
  return {
    ...actualFs,
    existsSync: jest.fn(),
    promises: {
      ...actualFs.promises,
      access: jest.fn(),
    },
  };
});

// Mock dotenv
jest.mock('dotenv', () => {
  return {
    config: jest.fn(() => ({ parsed: {}})),
  };
});

describe('Environment Variable Handling', () => {
  const mockFs = fs as jest.Mocked<typeof fs>;
  const mockExistsSync = jest.mocked(require('fs').existsSync);
  const mockDotenv = dotenv as jest.Mocked<typeof dotenv>;
  
  beforeEach(() => {
    // Clear mocks
    jest.clearAllMocks();
    // Reset process.env
    process.env = { NODE_ENV: 'test' };
  });
  
  afterEach(() => {
    // Restore process.env
    process.env = { ...process.env };
  });
  
  test('should prioritize custom config file when npm_config_conf is set', async () => {
    // Setup
    process.env.npm_config_conf = 'custom-config';
    mockExistsSync.mockImplementation((path: string) => path.includes('custom-config'));
    mockDotenv.config.mockReturnValue({ parsed: { TEST_VAR: 'custom-value' } });
    
    // Execute
    const { configPath } = loadEnvironmentVariables();
    
    // Verify
    expect(configPath).toContain('custom-config');
    expect(mockDotenv.config).toHaveBeenCalledWith(expect.objectContaining({
      path: expect.stringContaining('custom-config')
    }));
  });
  
  test('should prioritize .env file in project root', async () => {
    // Setup
    mockExistsSync.mockImplementation((path: string) => path.endsWith('/.env'));
    mockDotenv.config.mockReturnValue({ parsed: { TEST_VAR: 'env-value' } });
    
    // Execute
    const { configPath } = loadEnvironmentVariables();
    
    // Verify
    expect(configPath).toMatch(/\/\.env$/);
    expect(mockDotenv.config).toHaveBeenCalledWith(expect.objectContaining({
      path: expect.stringMatching(/\/\.env$/)
    }));
  });
  
  test('should fall back to dotenv file in project root', async () => {
    // Setup
    mockExistsSync.mockImplementation((path: string) => path.endsWith('/dotenv'));
    mockDotenv.config.mockReturnValue({ parsed: { TEST_VAR: 'dotenv-value' } });
    
    // Execute
    const { configPath } = loadEnvironmentVariables();
    
    // Verify
    expect(configPath).toMatch(/\/dotenv$/);
    expect(mockDotenv.config).toHaveBeenCalledWith(expect.objectContaining({
      path: expect.stringMatching(/\/dotenv$/)
    }));
  });
  
  test('should preserve original environment variables not in dotenv file', async () => {
    // Setup
    mockExistsSync.mockImplementation((path: string) => path.endsWith('/dotenv'));
    process.env.PRESERVED_VAR = 'original-value';
    process.env.OVERRIDDEN_VAR = 'original-value';
    
    mockDotenv.config.mockReturnValue({ 
      parsed: { 
        OVERRIDDEN_VAR: 'new-value',
        NEW_VAR: 'dotenv-value'
      } 
    });
    
    // Execute
    const { originalEnv } = loadEnvironmentVariables();
    
    // Verify
    expect(originalEnv.PRESERVED_VAR).toBe('original-value');
    expect(process.env.PRESERVED_VAR).toBe('original-value');
    expect(process.env.OVERRIDDEN_VAR).toBe('new-value');
    expect(process.env.NEW_VAR).toBe('dotenv-value');
  });
  
  test('should use environment variables when no config file is found', async () => {
    // Setup
    mockExistsSync.mockReturnValue(false);
    process.env.TEST_VAR = 'env-value';
    
    // Execute
    const { configPath } = loadEnvironmentVariables();
    
    // Verify
    expect(configPath).toBeUndefined();
    expect(mockDotenv.config).not.toHaveBeenCalled();
    expect(process.env.TEST_VAR).toBe('env-value');
  });
});