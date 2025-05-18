import * as abortctl from '../../src/abortctl';

describe('Abort Control Module', () => {
  afterEach(() => {
    // Reset all contexts after each test
    jest.resetModules();
  });

  test('should create and check context availability', () => {
    // Create a test context
    abortctl.create('test-context');

    // Check if context is available
    expect(abortctl.available('test-context')).toBe(true);
  });

  test('should destroy and check context availability', () => {
    // Create a test context
    abortctl.create('test-context');

    // Destroy the context
    abortctl.destroy('test-context');

    // Check if context is not available
    expect(abortctl.available('test-context')).toBe(false);
  });

  test('should handle unknown contexts gracefully', () => {
    // Check an unknown context
    expect(abortctl.available('unknown-context')).toBe(true);
  });

  test('should throw AsyncContextError when asserting unavailable context', () => {
    // Create and destroy a context
    abortctl.create('test-context');
    abortctl.destroy('test-context');

    // Assert should throw for destroyed context
    expect(() => abortctl.assert('test-context')).toThrow(abortctl.AsyncContextError);
    expect(() => abortctl.assert('test-context')).toThrow('context test-context is not available');
  });

  test('should not throw when asserting available context', () => {
    // Create a context
    abortctl.create('test-context');

    // Should not throw for available context
    expect(() => abortctl.assert('test-context')).not.toThrow();
  });
});
