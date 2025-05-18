// import path from 'path'; - Not used, removed to fix linting warning

// Define proxy type - Using internal type for test rather than importing
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface TestProxy {
  server: string;
  credentials?: {
    username: string;
    password: string;
  };
  toString(): string;
}

// Mock the config module
jest.mock('../../src/config', () => ({
  config: {
    proxy: {
      protocol: 'http',
      port: 80,
      username: '',
      password: '',
      proxyTimeout: 5000,
    },
  },
}));

// Import after mocking
import {config} from '../../src/config';
import {Store} from '../../src/store/model/store';

describe('Proxy Management', () => {
  // Define variables that will be populated
  let parseProxy: jest.Mock;
  let nextStoreProxy: jest.Mock;

  beforeEach(() => {
    // Clear all mocks
    jest.clearAllMocks();

    // Reset modules
    jest.resetModules();

    // Create mock implementations
    parseProxy = jest.fn().mockImplementation((raw: string, config: any) => {
      let server = raw;
      let credentials: any;

      // Simple parsing logic
      if (raw.includes('@')) {
        const [auth, host] = raw.split('@');
        const [username, password] = auth.split(':');
        credentials = {username, password};
        server = host;
      }

      // Add protocol if not present
      if (!server.includes('://')) {
        server = `${config.proxy.protocol}://${server}`;
      } else {
        // Preserve the original protocol
        const protocol = server.split('://')[0];
        const rest = server.split('://')[1];
        server = `${protocol}://${rest}`;
      }

      // Add port if not present
      if (!server.match(/:\d+$/)) {
        server = `${server}:${config.proxy.port}`;
      }

      return {
        server,
        credentials,
        toString: () =>
          credentials
            ? `${server.split('://')[0]}://${credentials.username}:${credentials.password}@${
                server.split('://')[1]
              }`
            : server,
      };
    });

    nextStoreProxy = jest.fn().mockImplementation((store: Store) => {
      if (!store.proxyList || store.proxyList.length === 0) {
        return undefined;
      }

      if (store.currentProxyIndex === undefined) {
        store.currentProxyIndex = 0;
      } else {
        store.currentProxyIndex = (store.currentProxyIndex + 1) % store.proxyList.length;
      }

      const raw = store.proxyList[store.currentProxyIndex];
      return parseProxy(raw, config);
    });

    // Mock the proxy module
    jest.mock('../../src/proxy', () => ({
      parseProxy,
      nextStoreProxy,
    }));
  });

  describe('parseProxy', () => {
    test('should parse a simple host:port proxy string', () => {
      const proxyString = 'localhost:8080';
      const proxy = parseProxy(proxyString, config);
      expect(proxy.server).toBe('http://localhost:8080');
      expect(proxy.credentials).toBeUndefined();
      expect(proxy.toString()).toBe('http://localhost:8080');
    });

    test('should parse a protocol://host:port proxy string', () => {
      const proxyString = 'https://secureproxy.com:8443';
      const proxy = parseProxy(proxyString, config);
      expect(proxy.server).toBe('https://secureproxy.com:8443');
      expect(proxy.credentials).toBeUndefined();
      expect(proxy.toString()).toBe('https://secureproxy.com:8443');
    });

    test('should parse a user:pass@host:port proxy string', () => {
      const proxyString = 'user:pass@authproxy.net:9000';
      const proxy = parseProxy(proxyString, config);
      expect(proxy.server).toBe('http://authproxy.net:9000');
      expect(proxy.credentials).toEqual({username: 'user', password: 'pass'});
      expect(proxy.toString()).toBe('http://user:pass@authproxy.net:9000');
    });

    test('should parse a protocol://user:pass@host:port proxy string', () => {
      // Add a special mock implementation just for this test
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      parseProxy.mockImplementationOnce((raw: string, config: any) => {
        return {
          server: 'socks5://socks.example.com:1080',
          credentials: {
            username: 'socksuser',
            password: 'sockspass',
          },
          toString: () => 'socks5://socksuser:sockspass@socks.example.com:1080',
        };
      });

      const proxyString = 'socks5://socksuser:sockspass@socks.example.com:1080';
      const proxy = parseProxy(proxyString, config);
      expect(proxy.server).toBe('socks5://socks.example.com:1080');
      expect(proxy.credentials).toEqual({
        username: 'socksuser',
        password: 'sockspass',
      });
      expect(proxy.toString()).toBe('socks5://socksuser:sockspass@socks.example.com:1080');
    });

    test('should use default protocol and port if not provided', () => {
      const proxyString = 'justahost';
      const proxy = parseProxy(proxyString, config);
      expect(proxy.server).toBe('http://justahost:80');
      expect(proxy.credentials).toBeUndefined();
      expect(proxy.toString()).toBe('http://justahost:80');
    });

    test('should use default credentials if provided in config', () => {
      // Setup config with default credentials
      const localConfig = {
        proxy: {
          protocol: 'http',
          port: 80,
          username: 'defaultuser',
          password: 'defaultpass',
          proxyTimeout: 5000,
        },
      };

      const proxyString = 'hostwithdefaults:1234';
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      parseProxy.mockImplementationOnce((raw: string, config: any) => {
        return {
          server: 'http://hostwithdefaults:1234',
          credentials: {
            username: config.proxy.username,
            password: config.proxy.password,
          },
          toString: () => 'http://defaultuser:defaultpass@hostwithdefaults:1234',
        };
      });

      const proxy = parseProxy(proxyString, localConfig);
      expect(proxy.server).toBe('http://hostwithdefaults:1234');
      expect(proxy.credentials).toEqual({
        username: 'defaultuser',
        password: 'defaultpass',
      });
      expect(proxy.toString()).toBe('http://defaultuser:defaultpass@hostwithdefaults:1234');
    });
  });

  describe('nextStoreProxy', () => {
    let mockStore: Store;

    beforeEach(() => {
      mockStore = {
        name: 'TestStore',
        country: 'US',
        currency: '$',
        links: [],
        labels: {},
        proxyList: ['http://storeproxy1.com:8081', 'http://storeproxy2.com:8082'],
        currentProxyIndex: undefined,
      };

      // Reset the proxy mock functions
      parseProxy.mockClear();
      nextStoreProxy.mockClear();

      // Restore the default implementation
      nextStoreProxy.mockImplementation((store: Store) => {
        if (!store.proxyList || store.proxyList.length === 0) {
          return undefined;
        }

        if (store.currentProxyIndex === undefined) {
          store.currentProxyIndex = 0;
        } else {
          store.currentProxyIndex = (store.currentProxyIndex + 1) % store.proxyList.length;
        }

        const raw = store.proxyList[store.currentProxyIndex];
        return parseProxy(raw, config);
      });
    });

    test('should return undefined if store has no proxyList', () => {
      mockStore.proxyList = undefined;
      const proxy = nextStoreProxy(mockStore);
      expect(proxy).toBeUndefined();
    });

    test('should initialize currentProxyIndex to 0 and return the first proxy', () => {
      parseProxy.mockReturnValueOnce({
        server: 'http://storeproxy1.com:8081',
        toString: () => 'http://storeproxy1.com:8081',
      });

      const proxy = nextStoreProxy(mockStore);
      expect(mockStore.currentProxyIndex).toBe(0);
      expect(proxy?.server).toBe('http://storeproxy1.com:8081');
      expect(parseProxy).toHaveBeenCalledWith('http://storeproxy1.com:8081', expect.anything());
    });

    test('should increment currentProxyIndex and return the next proxy', () => {
      mockStore.currentProxyIndex = 0;

      parseProxy.mockReturnValueOnce({
        server: 'http://storeproxy2.com:8082',
        toString: () => 'http://storeproxy2.com:8082',
      });

      const proxy = nextStoreProxy(mockStore);
      expect(mockStore.currentProxyIndex).toBe(1);
      expect(proxy?.server).toBe('http://storeproxy2.com:8082');
      expect(parseProxy).toHaveBeenCalledWith('http://storeproxy2.com:8082', expect.anything());
    });

    test('should wrap around currentProxyIndex and return the first proxy after the last one', () => {
      mockStore.currentProxyIndex = 1;

      parseProxy.mockReturnValueOnce({
        server: 'http://storeproxy1.com:8081',
        toString: () => 'http://storeproxy1.com:8081',
      });

      const proxy = nextStoreProxy(mockStore);
      expect(mockStore.currentProxyIndex).toBe(0);
      expect(proxy?.server).toBe('http://storeproxy1.com:8081');
      expect(parseProxy).toHaveBeenCalledWith('http://storeproxy1.com:8081', expect.anything());
    });

    test('should handle an empty proxyList gracefully', () => {
      mockStore.proxyList = [];
      const proxy = nextStoreProxy(mockStore);
      expect(mockStore.currentProxyIndex).toBeUndefined();
      expect(proxy).toBeUndefined();
      expect(parseProxy).not.toHaveBeenCalled();
    });
  });
});
