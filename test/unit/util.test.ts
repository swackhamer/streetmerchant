import {
  getSleepTime,
  delay,
  isStatusCodeInRange,
  getRandomUserAgent,
  deleteFile,
  logUnexpectedError,
} from '../../src/util';
import {AsyncContextError} from '../../src/abortctl';
import {logger} from '../../src/logger';
import * as fs from 'fs';

jest.mock('../../src/logger', () => ({
  logger: {
    silly: jest.fn(),
    error: jest.fn(),
    debug: jest.fn(),
  },
}));

// Mock top-user-agents
jest.mock('top-user-agents/desktop', () => ['Chrome/90.0', 'Firefox/85.0'], {
  virtual: true,
});

// Mock fs module
jest.mock('fs', () => ({
  unlinkSync: jest.fn(),
}));

describe('Utility Functions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getSleepTime', () => {
    test('should return a value within the min and max range', () => {
      const store = {
        minPageSleep: 1000,
        maxPageSleep: 3000,
      };

      const sleepTime = getSleepTime(store as any);
      expect(sleepTime).toBeGreaterThanOrEqual(1000);
      expect(sleepTime).toBeLessThanOrEqual(3000);
    });
  });

  describe('delay', () => {
    test('should resolve after specified time', async () => {
      const start = Date.now();
      await delay(50); // Short delay for test
      const end = Date.now();

      // Should take at least 50ms, but allow some wiggle room
      expect(end - start).toBeGreaterThanOrEqual(40);
    });
  });

  describe('isStatusCodeInRange', () => {
    test('should return true if status code equals a single number in range', () => {
      expect(isStatusCodeInRange(200, [200])).toBe(true);
    });

    test('should return true if status code is within a range', () => {
      expect(isStatusCodeInRange(404, [[400, 499]])).toBe(true);
    });

    test('should return true if status code matches any item in array', () => {
      expect(isStatusCodeInRange(403, [200, 403, [500, 599]])).toBe(true);
    });

    test('should return false if status code does not match any range', () => {
      expect(isStatusCodeInRange(400, [200, [500, 599]])).toBe(false);
    });
  });

  describe('getRandomUserAgent', () => {
    test('should return a random user agent from the available list', () => {
      const userAgent = getRandomUserAgent();
      expect(userAgent).toBeTruthy(); // Just verify we get something
      expect(typeof userAgent).toBe('string');
      expect(userAgent.length).toBeGreaterThan(0);
      expect(logger.debug).toHaveBeenCalledWith('user agent', {userAgent});
    });

    test('should use environment variable if available', () => {
      const originalEnv = process.env.USER_AGENT;
      process.env.USER_AGENT = 'CustomAgent/1.0';

      const userAgent = getRandomUserAgent();
      expect(userAgent).toBe('CustomAgent/1.0');

      process.env.USER_AGENT = originalEnv;
    });

    test('should handle newline-separated user agents', () => {
      const originalEnv = process.env.USER_AGENT;
      // Use actual newline in the string
      process.env.USER_AGENT = 'Agent1/1.0\nAgent2/2.0';

      const userAgent = getRandomUserAgent();
      expect(['Agent1/1.0', 'Agent2/2.0']).toContain(userAgent);

      process.env.USER_AGENT = originalEnv;
    });
  });

  describe('deleteFile', () => {
    beforeEach(() => {
      // Reset the mock before each test
      jest.clearAllMocks();
    });

    test('should attempt to delete a file', () => {
      deleteFile('some-file.txt');
      expect(fs.unlinkSync).toHaveBeenCalledWith('some-file.txt');
    });

    test('should log an error if file deletion fails', () => {
      // Setup unlinkSync to throw an error
      (fs.unlinkSync as jest.Mock).mockImplementationOnce(() => {
        throw new Error('Mock deletion error');
      });

      deleteFile('some-file.txt');
      expect(logger.error).toHaveBeenCalled();
    });
  });

  describe('logUnexpectedError', () => {
    test('should not log AsyncContextError', () => {
      const error = new AsyncContextError('test');
      logUnexpectedError(error);

      expect(logger.silly).not.toHaveBeenCalled();
      expect(logger.error).not.toHaveBeenCalled();
    });

    test('should log error as silly if it matches ignore pattern', () => {
      const error = new Error('Connection closed');
      logUnexpectedError(error);

      expect(logger.silly).toHaveBeenCalledWith(error.toString());
      expect(logger.error).not.toHaveBeenCalled();
    });

    test('should log error as error if it does not match ignore pattern', () => {
      const error = new Error('Unknown error');
      logUnexpectedError(error);

      expect(logger.silly).not.toHaveBeenCalled();
      expect(logger.error).toHaveBeenCalledWith(error.toString());
    });

    test('should handle non-Error objects', () => {
      const notAnError = 'string error';
      logUnexpectedError(notAnError);

      expect(logger.error).toHaveBeenCalledWith(notAnError);
    });

    test('should handle protocol error messages', () => {
      const protocolError = new Error('Protocol error: Network.enable timed out');
      logUnexpectedError(protocolError);

      expect(logger.silly).toHaveBeenCalledWith(protocolError.toString());
      expect(logger.error).not.toHaveBeenCalled();
    });
  });
});
