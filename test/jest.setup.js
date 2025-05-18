// Set environment variables for testing
process.env.NODE_ENV = 'test';
process.env.LOW_BANDWIDTH = 'false';
process.env.HEADLESS = 'true';

// Mock chalk for tests
jest.mock('chalk', () => {
  // Simple text passthrough
  const simpleColorFn = (text) => text;
  
  // Create a color function that returns a function that returns the input text
  const createColorFn = () => {
    const fn = simpleColorFn;
    // Add color methods that all pass through text
    fn.bold = simpleColorFn;
    fn.green = simpleColorFn;
    fn.red = simpleColorFn;
    fn.yellow = simpleColorFn;
    fn.blue = simpleColorFn;
    fn.cyan = simpleColorFn;
    fn.magenta = simpleColorFn;
    fn.white = simpleColorFn;
    fn.gray = simpleColorFn;
    fn.grey = simpleColorFn;
    fn.bgRed = simpleColorFn;
    fn.bgGreen = simpleColorFn;
    fn.bgYellow = simpleColorFn;
    fn.bgBlue = simpleColorFn;
    fn.underline = simpleColorFn;
    return fn;
  };

  // Create a chalk-like object with all necessary methods
  const mockChalk = simpleColorFn;
  mockChalk.bold = createColorFn();
  mockChalk.red = createColorFn();
  mockChalk.green = createColorFn();
  mockChalk.yellow = createColorFn();
  mockChalk.blue = createColorFn();
  mockChalk.magenta = createColorFn();
  mockChalk.cyan = createColorFn();
  mockChalk.white = createColorFn();
  mockChalk.gray = createColorFn();
  mockChalk.grey = createColorFn();
  mockChalk.bgRed = createColorFn();
  mockChalk.bgGreen = createColorFn();
  mockChalk.bgYellow = createColorFn();
  mockChalk.bgBlue = createColorFn();
  mockChalk.hex = () => simpleColorFn;
  mockChalk.underline = createColorFn();
  
  return mockChalk;
});

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
