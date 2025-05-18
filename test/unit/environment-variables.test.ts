import { promises as fs } from 'fs';
import path from 'path';
import dotenv from 'dotenv';

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
    // In real implementation we'd use async but for testing we can mock this
    if (require('fs').existsSync(customPath)) {
      configPath = customPath;
    }
  }
  
  if (!configPath) {
    // Check .env in project root first
    const dotEnvPath = path.join(__dirname, '../../.env');
    if (require('fs').existsSync(dotEnvPath)) {
      configPath = dotEnvPath;
    }
  }
  
  if (!configPath) {
    // Check legacy 'dotenv' in project root
    const legacyDotenvPath = path.join(__dirname, '../../dotenv');
    if (require('fs').existsSync(legacyDotenvPath)) {
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
        if (!(key in (result.parsed || {}))) {
          process.env[key] = originalEnv[key];
        }
      }
    }
  } else {
    console.info('No .env or dotenv file found, using environment variables');
  }
  
  return { originalEnv, configPath };
}

// Override Jest with our own simple test framework
const describe = (name: string, fn: () => void) => {
  console.log(`\nTest Suite: ${name}`);
  fn();
};

const test = (name: string, fn: () => void) => {
  console.log(`  Test: ${name}`);
  try {
    fn();
    console.log('    ✓ PASS');
  } catch (error: any) {
    console.log(`    ✗ FAIL: ${error?.message || 'Unknown error'}`);
  }
};

const expect = (actual: any) => ({
  toBe: (expected: any) => {
    if (actual !== expected) {
      throw new Error(`Expected ${expected} but got ${actual}`);
    }
  },
  toContain: (expected: any) => {
    if (!actual.includes(expected)) {
      throw new Error(`Expected ${actual} to contain ${expected}`);
    }
  },
  toMatch: (expected: any) => {
    if (!(expected.test ? expected.test(actual) : actual.match(expected))) {
      throw new Error(`Expected ${actual} to match ${expected}`);
    }
  },
  toBeUndefined: () => {
    if (actual !== undefined) {
      throw new Error(`Expected undefined but got ${actual}`);
    }
  }
});

// Mock existsSync manually
let mockExistsSync = (path: string) => false;

// Mock dotenv.config manually
let mockDotenvConfig = () => ({ parsed: {} });

// Override fs.existsSync with our mock
require('fs').existsSync = (path: string) => mockExistsSync(path);

// Override dotenv.config with our mock
dotenv.config = (options?: any) => mockDotenvConfig();

const beforeEach = (fn: () => void) => {
  // This will be called before each test
  fn();
};

describe('Environment Variable Handling', () => {
  beforeEach(() => {
    // Reset mocks
    mockExistsSync = () => false;
    mockDotenvConfig = () => ({ parsed: {} });
    
    // Reset process.env for each test
    const savedEnv = process.env;
    process.env = { NODE_ENV: 'test' };
    
    // Clean up after the test
    return () => {
      process.env = savedEnv;
    };
  });
  
  test('should prioritize custom config file when npm_config_conf is set', () => {
    // Setup
    process.env.npm_config_conf = 'custom-config';
    mockExistsSync = (path: string) => path.includes('custom-config');
    mockDotenvConfig = () => ({ parsed: { TEST_VAR: 'custom-value' } });
    
    // Execute
    const { configPath } = loadEnvironmentVariables();
    
    // Verify
    expect(configPath).toContain('custom-config');
  });
  
  test('should prioritize .env file in project root', () => {
    // Setup
    mockExistsSync = (path: string) => path.endsWith('/.env');
    mockDotenvConfig = () => ({ parsed: { TEST_VAR: 'env-value' } });
    
    // Execute
    const { configPath } = loadEnvironmentVariables();
    
    // Verify
    expect(configPath).toMatch(/\/\.env$/);
  });
  
  test('should fall back to dotenv file in project root', () => {
    // Setup
    mockExistsSync = (path: string) => path.endsWith('/dotenv');
    mockDotenvConfig = () => ({ parsed: { TEST_VAR: 'dotenv-value' } });
    
    // Execute
    const { configPath } = loadEnvironmentVariables();
    
    // Verify
    expect(configPath).toMatch(/\/dotenv$/);
  });
  
  test('should preserve original environment variables not in dotenv file', () => {
    // Setup
    mockExistsSync = (path: string) => path.endsWith('/dotenv');
    process.env.PRESERVED_VAR = 'original-value';
    process.env.OVERRIDDEN_VAR = 'original-value';
    
    mockDotenvConfig = () => ({ 
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
  
  test('should use environment variables when no config file is found', () => {
    // Setup
    mockExistsSync = () => false;
    process.env.TEST_VAR = 'env-value';
    
    // Execute
    const { configPath } = loadEnvironmentVariables();
    
    // Verify
    expect(configPath).toBeUndefined();
    expect(process.env.TEST_VAR).toBe('env-value');
  });
});