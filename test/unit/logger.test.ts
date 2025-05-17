import chalk from 'chalk';
import {logger, Print, buildProductString, buildSetupString} from '../../src/logger';
import {Link, Store, Brand, Series} from '../../src/store/model';

// Mock the config so we don't depend on .env files
jest.mock('../../src/config', () => ({
  config: {
    logLevel: 'info'
  }
}));

// Sample test data
const testStore: Store = {
  name: 'test-store',
  country: 'us',
  currency: '$',
  disableAdBlocker: false,
  labels: {},
  links: [],
  minPageSleep: 1000,
  maxPageSleep: 2000,
  setupAction: jest.fn()
};

const testLink: Link = {
  brand: 'nvidia' as Brand,
  model: 'test-model',
  series: '3080' as Series,
  url: 'https://example.com/product'
};

// Proxy test data
const testStoreWithProxy: Store = {
  ...testStore,
  currentProxyIndex: 1,
  proxyList: [
    'http://proxy1.example.com:8080',
    'http://proxy2.example.com:8080',
    'http://proxy3.example.com:8080'
  ]
};

describe('Logger Module', () => {
  describe('buildProductString', () => {
    it('should format product string correctly without proxy', () => {
      // Arrange
      
      // Act
      const result = buildProductString(testLink, testStore);
      
      // Assert
      expect(result).toBe('[test-store] [nvidia (3080)] test-model');
    });

    it('should format product string correctly with proxy', () => {
      // Arrange
      
      // Act
      const result = buildProductString(testLink, testStoreWithProxy);
      
      // Assert
      expect(result).toBe('[2/3] [test-store] [nvidia (3080)] test-model');
    });

    it('should format colored product string correctly without proxy', () => {
      // Arrange
      
      // Act
      const result = buildProductString(testLink, testStore, true);
      
      // Assert
      // We can't test the exact chalk output, but we can check if it contains the right parts
      expect(result).toContain('[test-store]');
      expect(result).toContain('nvidia');
      expect(result).toContain('3080');
      expect(result).toContain('test-model');
    });

    it('should format colored product string correctly with proxy', () => {
      // Arrange
      
      // Act
      const result = buildProductString(testLink, testStoreWithProxy, true);
      
      // Assert
      expect(result).toContain('[2/3]');
      expect(result).toContain('[test-store]');
      expect(result).toContain('nvidia');
      expect(result).toContain('3080');
      expect(result).toContain('test-model');
    });
  });

  describe('buildSetupString', () => {
    it('should format setup string correctly without proxy', () => {
      // Arrange
      
      // Act
      const result = buildSetupString('config', testStore);
      
      // Assert
      expect(result).toBe('[test-store] [setup (config)]');
    });

    it('should format setup string correctly with proxy', () => {
      // Arrange
      
      // Act
      const result = buildSetupString('config', testStoreWithProxy);
      
      // Assert
      expect(result).toBe('[2/3] [test-store] [setup (config)]');
    });

    it('should format colored setup string correctly without proxy', () => {
      // Arrange
      
      // Act
      const result = buildSetupString('config', testStore, true);
      
      // Assert
      expect(result).toContain('[test-store]');
      expect(result).toContain('setup (config)');
    });

    it('should format colored setup string correctly with proxy', () => {
      // Arrange
      
      // Act
      const result = buildSetupString('config', testStoreWithProxy, true);
      
      // Assert
      expect(result).toContain('[2/3]');
      expect(result).toContain('[test-store]');
      expect(result).toContain('setup (config)');
    });
  });

  describe('Print formatters', () => {
    it('should format backoff message correctly', () => {
      // Arrange
      
      // Act
      const result = Print.backoff(testLink, testStore, { delay: 5000, statusCode: 429 });
      
      // Assert
      expect(result).toBe('✖ [test-store] [nvidia (3080)] test-model :: BACKOFF DELAY status=429 delay=5000');
    });

    it('should format colored backoff message correctly', () => {
      // Arrange
      
      // Act
      const result = Print.backoff(testLink, testStore, { delay: 5000, statusCode: 429 }, true);
      
      // Assert
      expect(result).toContain('✖');
      expect(result).toContain('[test-store]');
      expect(result).toContain('BACKOFF DELAY');
      expect(result).toContain('status=429');
      expect(result).toContain('delay=5000');
    });

    it('should format badStatusCode message correctly', () => {
      // Arrange
      
      // Act
      const result = Print.badStatusCode(testLink, testStore, 404);
      
      // Assert
      expect(result).toBe('✖ [test-store] [nvidia (3080)] test-model :: STATUS CODE ERROR 404');
    });

    it('should format bannedSeller message correctly', () => {
      // Arrange
      
      // Act
      const result = Print.bannedSeller(testLink, testStore);
      
      // Assert
      expect(result).toBe('✖ [test-store] [nvidia (3080)] test-model :: BANNED SELLER');
    });

    it('should format captcha message correctly', () => {
      // Arrange
      
      // Act
      const result = Print.captcha(testLink, testStore);
      
      // Assert
      expect(result).toBe('✖ [test-store] [nvidia (3080)] test-model :: CAPTCHA');
    });

    it('should format cloudflare message correctly', () => {
      // Arrange
      
      // Act
      const result = Print.cloudflare(testLink, testStore);
      
      // Assert
      expect(result).toBe('✖ [test-store] [nvidia (3080)] test-model :: CLOUDFLARE, WAITING');
    });

    it('should format inStock message correctly', () => {
      // Arrange
      
      // Act
      const result = Print.inStock(testLink, testStore);
      
      // Assert
      expect(result).toBe('🚀🚨 [test-store] [nvidia (3080)] test-model :: IN STOCK 🚨🚀');
    });

    it('should format inStock message for SMS correctly', () => {
      // Arrange
      
      // Act
      const result = Print.inStock(testLink, testStore, false, true);
      
      // Assert
      expect(result).toBe('[test-store] [nvidia (3080)] test-model :: IN STOCK');
    });

    it('should format inStockWaiting message correctly', () => {
      // Arrange
      
      // Act
      const result = Print.inStockWaiting(testLink, testStore);
      
      // Assert
      expect(result).toBe('ℹ [test-store] [nvidia (3080)] test-model :: IN STOCK, WAITING');
    });

    it('should format maxPrice message correctly', () => {
      // Arrange
      const linkWithPrice = { ...testLink, price: 1500 };
      
      // Act
      const result = Print.maxPrice(linkWithPrice, testStore, 1000);
      
      // Assert
      expect(result).toBe('✖ [test-store] [nvidia (3080)] test-model :: PRICE 1500 EXCEEDS LIMIT 1000');
    });

    it('should format message correctly', () => {
      // Arrange
      
      // Act
      const result = Print.message('Test message', 'notifications', testStore);
      
      // Assert
      expect(result).toBe('✖ [test-store] [setup (notifications)] :: Test message');
    });

    it('should format info message correctly', () => {
      // Arrange
      
      // Act
      const result = Print.message('Test message', 'notifications', testStore, false, true);
      
      // Assert
      expect(result).toBe('ℹ [test-store] [setup (notifications)] :: Test message');
    });

    it('should format noResponse message correctly', () => {
      // Arrange
      
      // Act
      const result = Print.noResponse(testLink, testStore);
      
      // Assert
      expect(result).toBe('✖ [test-store] [nvidia (3080)] test-model :: NO RESPONSE');
    });

    it('should format outOfStock message correctly', () => {
      // Arrange
      
      // Act
      const result = Print.outOfStock(testLink, testStore);
      
      // Assert
      expect(result).toBe('✖ [test-store] [nvidia (3080)] test-model :: OUT OF STOCK');
    });

    it('should format productInStock message correctly', () => {
      // Arrange
      
      // Act
      const result = Print.productInStock(testLink);
      
      // Assert
      expect(result).toBe('Product Page: https://example.com/product');
    });

    it('should format productInStock message with cart URL correctly', () => {
      // Arrange
      const linkWithCart = { ...testLink, cartUrl: 'https://example.com/cart' };
      
      // Act
      const result = Print.productInStock(linkWithCart);
      
      // Assert
      expect(result).toBe('Product Page: https://example.com/product\nAdd To Cart Link: https://example.com/cart');
    });

    it('should format rateLimit message correctly', () => {
      // Arrange
      
      // Act
      const result = Print.rateLimit(testLink, testStore);
      
      // Assert
      expect(result).toBe('✖ [test-store] [nvidia (3080)] test-model :: RATE LIMIT EXCEEDED');
    });

    it('should format recursionLimit message correctly', () => {
      // Arrange
      
      // Act
      const result = Print.recursionLimit(testLink, testStore);
      
      // Assert
      expect(result).toBe('✖ [test-store] [nvidia (3080)] test-model :: CLOUDFLARE RETRY LIMIT REACHED, ABORT');
    });
  });

  describe('Logger instance', () => {
    it('should export logger instance', () => {
      // Arrange
      
      // Act & Assert
      expect(logger).toBeDefined();
      expect(typeof logger.info).toBe('function');
      expect(typeof logger.error).toBe('function');
      expect(typeof logger.debug).toBe('function');
      expect(typeof logger.warn).toBe('function');
    });
  });
});