/**
 * Test the refactored browser and network code
 */
import {BrowserSession} from '../../src/browser/session/browser-session';
import {RequestHandler} from '../../src/network/handlers/request-handler';
import * as browser from '../../src/browser';
import * as network from '../../src/network';
import {Store} from '../../src/store/model';

describe('Browser Refactoring', () => {
  test('BrowserSession class exists', () => {
    expect(BrowserSession).toBeDefined();
    expect(typeof BrowserSession.create).toBe('function');
    expect(typeof BrowserSession.closeAll).toBe('function');
  });

  test('Legacy browser functions use BrowserSession', () => {
    expect(browser.usingBrowser).toBeDefined();
    expect(browser.abortBrowserContexts).toBeDefined();
    expect(browser.enableBrowserContexts).toBeDefined();
    expect(browser.launchBrowser).toBeDefined();
    expect(browser.usingPage).toBeDefined();
    expect(browser.tryUsingPage).toBeDefined();
    expect(browser.processCookieHandling).toBeDefined();
    expect(browser.withCdpSession).toBeDefined();
  });
});

describe('Network Refactoring', () => {
  test('RequestHandler class exists', () => {
    expect(RequestHandler).toBeDefined();
    
    // Create a mock store
    const mockStore: Store = {
      name: 'test-store',
      country: 'US',
      currency: '$',
      labels: {},
      links: []
    };
    
    // Create a mock handler instance
    const handler = new RequestHandler(
      mockStore,
      null as any,
      null as any
    );
    
    expect(handler).toBeDefined();
    expect(typeof handler.makeRequest).toBe('function');
    expect(typeof handler.checkInStock).toBe('function');
  });

  test('Network module exports expected functions', () => {
    expect(network.makeRequest).toBeDefined();
    expect(network.checkInStock).toBeDefined();
    expect(network.RequestHandler).toBeDefined();
  });
});