// Set environment variables for testing
process.env.NODE_ENV = 'test';
process.env.LOW_BANDWIDTH = 'false';
process.env.HEADLESS = 'true';

// Create global cleanup operations
/* global afterAll, expect */
afterAll(() => {
  // Any global cleanup needed after all tests
});

// Extend Jest with custom matchers if needed
expect.extend({
  toBeWithinRange(received, floor, ceiling) {
    const pass = received >= floor && received <= ceiling;
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${received} to be within range ${floor} - ${ceiling}`,
        pass: false,
      };
    }
  },
});
