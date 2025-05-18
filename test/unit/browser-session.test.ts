import {BrowserSession} from '../../src/browser/session/browser-session';
import * as abortctl from '../../src/abortctl';
import {Store} from '../../src/store/model/store';
import {Browser, Page} from 'puppeteer';

// Mock dependencies
jest.mock('../../src/abortctl', () => ({
  assert: jest.fn(),
  create: jest.fn(),
  destroy: jest.fn(),
  available: jest.fn(),
  AsyncContextError: class AsyncContextError extends Error {
    name = 'AsyncContextError';
  },
}));

// Mock puppeteer-related modules
jest.mock('../../src/browser/session/utils', () => ({
  cleanUserDataDir: jest.fn(),
  getDefaultUserAgent: jest.fn().mockResolvedValue('mock-user-agent'),
  launchBrowser: jest.fn().mockImplementation(() =>
    Promise.resolve({
      newPage: jest.fn().mockImplementation(() =>
        Promise.resolve({
          close: jest.fn().mockResolvedValue(undefined),
        })
      ),
      close: jest.fn().mockResolvedValue(undefined),
    })
  ),
  getCookiePolicy: jest.fn().mockReturnValue('default'),
  clearBrowserCookies: jest.fn().mockResolvedValue(undefined),
}));

describe('BrowserSession', () => {
  // Mock store for testing
  const mockStore: Store = {
    name: 'test-store',
    country: 'test-country',
    currency: '$',
    labels: {},
    links: [],
  };

  beforeEach(() => {
    jest.clearAllMocks();

    // Reset/initialize browser context
    abortctl.create('browser');
    (abortctl.available as jest.Mock).mockReturnValue(true);
  });

  test('should create a new BrowserSession instance', async () => {
    const session = await BrowserSession.create(mockStore);
    expect(session).toBeInstanceOf(BrowserSession);
  });

  test('should enable browser contexts', () => {
    BrowserSession.enableBrowserContexts();
    expect(abortctl.create).toHaveBeenCalledWith('browser');
  });

  test('should close all browser sessions', async () => {
    // Create a session first
    await BrowserSession.create(mockStore);

    // Close all sessions
    await BrowserSession.closeAll();

    // Should call abortctl.destroy
    expect(abortctl.destroy).toHaveBeenCalledWith('browser');
  });

  test('should handle AsyncContextError and retry browser creation', async () => {
    // Mock abortctl.assert to throw AsyncContextError on first call
    (abortctl.assert as jest.Mock).mockImplementationOnce(() => {
      throw new abortctl.AsyncContextError('context browser is not available');
    });

    // Should still create a session successfully
    const session = await BrowserSession.create(mockStore);
    expect(session).toBeInstanceOf(BrowserSession);

    // Should have called abortctl.create to re-enable browser context
    expect(abortctl.create).toHaveBeenCalledWith('browser');
  });
});
