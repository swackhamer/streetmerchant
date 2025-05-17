/**
 * Integration tests for refactored modules
 * 
 * These tests verify that our refactored modules work together correctly
 * and maintain the expected behavior of the original code.
 */
import {logger, Print} from '../../src/logger';
import {
  seriesData,
  getLinksForSeriesAndStore, 
  getAllSeries
} from '../../src/store/model/series-modules';
import {
  commonLabels,
  inStockLabels
} from '../../src/store/model/common/labels';
import {Link, Store, Brand, Series} from '../../src/store/model/store';

// Create test data
const testStore: Store = {
  name: 'test-store',
  country: 'us',
  currency: '$',
  disableAdBlocker: false,
  labels: commonLabels.standard,
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

// Mock external dependencies
jest.mock('../../src/config', () => ({
  config: {
    logLevel: 'info',
    store: {
      showOnlySeries: [],
      showOnlyBrands: [],
      showOnlyModels: []
    }
  }
}));

describe('Module Integration', () => {
  describe('Logger and Store Integration', () => {
    it('should format store information correctly', () => {
      // Arrange
      const store = {...testStore};
      const link = {...testLink};
      
      // Act
      const message = Print.inStock(link, store);
      
      // Assert
      expect(message).toContain(store.name);
      expect(message).toContain(link.brand);
      expect(message).toContain(link.series);
      expect(message).toContain(link.model);
      expect(message).toContain('IN STOCK');
    });
    
    it('should handle proxy information in logging', () => {
      // Arrange
      const storeWithProxy = {
        ...testStore,
        currentProxyIndex: 1,
        proxyList: [
          'http://proxy1.example.com:8080',
          'http://proxy2.example.com:8080',
          'http://proxy3.example.com:8080'
        ]
      };
      
      // Act
      const message = Print.inStock(testLink, storeWithProxy);
      
      // Assert
      expect(message).toContain('[2/3]');
      expect(message).toContain(storeWithProxy.name);
    });
  });
  
  describe('Series Data and Store Integration', () => {
    it('should retrieve links for valid stores', () => {
      // Arrange
      const validSeries = getAllSeries()[0]; // Get the first available series
      const validStore = Object.keys(seriesData[validSeries] || {})[0]; // Get the first available store
      
      // Skip test if no valid data found
      if (!validSeries || !validStore) {
        console.log('Skipping test - no valid series/store data found');
        return;
      }
      
      // Act
      const links = getLinksForSeriesAndStore(validSeries, validStore);
      
      // Assert
      expect(links.length).toBeGreaterThan(0);
      expect(links[0].brand).toBeDefined();
      expect(links[0].model).toBeDefined();
      expect(links[0].series).toBe(validSeries);
      expect(links[0].url).toBeDefined();
    });
  });
  
  describe('Label System Integration', () => {
    it('should provide compatible label structures', () => {
      // Arrange
      const store = {
        ...testStore,
        labels: commonLabels.amazon // Using Amazon-specific labels
      };
      
      // Act & Assert
      expect(store.labels.inStock).toBeDefined();
      expect(store.labels.inStock).toBe(inStockLabels.amazonAddToCart);
      expect(store.labels.outOfStock).toBeDefined();
      expect(store.labels.maxPrice).toBeDefined();
      expect(store.labels.captcha).toBeDefined();
    });
    
    it('should support different store label configurations', () => {
      // Arrange
      const europeanStore = {
        ...testStore,
        labels: commonLabels.european
      };
      
      const amazonStore = {
        ...testStore,
        labels: commonLabels.amazon
      };
      
      // Act & Assert - European store
      expect(europeanStore.labels.inStock).toBeDefined();
      expect(europeanStore.labels.maxPrice?.euroFormat).toBe(true);
      
      // Act & Assert - Amazon store
      expect(amazonStore.labels.inStock).toBeDefined();
      expect(amazonStore.labels.bannedSeller).toBeDefined();
    });
  });
  
  describe('Cross-Module Integration', () => {
    it('should work across logger, series data, and labels', () => {
      // Arrange
      const allSeries = getAllSeries();
      const validSeries = allSeries[0];
      const validStore = Object.keys(seriesData[validSeries] || {})[0];
      
      // Skip test if no valid data found
      if (!validSeries || !validStore) {
        console.log('Skipping test - no valid series/store data found');
        return;
      }
      
      // Create a proper store with labels
      const store: Store = {
        name: validStore,
        country: 'us',
        currency: '$',
        disableAdBlocker: false,
        labels: commonLabels.standard,
        links: [],
        minPageSleep: 1000,
        maxPageSleep: 2000,
        setupAction: jest.fn()
      };
      
      // Get a real link
      const links = getLinksForSeriesAndStore(validSeries, validStore);
      const link = links[0];
      
      // Act
      const inStockMessage = Print.inStock(link, store);
      const outOfStockMessage = Print.outOfStock(link, store);
      
      // Assert
      expect(inStockMessage).toContain(store.name);
      expect(inStockMessage).toContain(link.brand);
      expect(inStockMessage).toContain(link.series);
      expect(inStockMessage).toContain('IN STOCK');
      
      expect(outOfStockMessage).toContain(store.name);
      expect(outOfStockMessage).toContain(link.brand);
      expect(outOfStockMessage).toContain(link.series);
      expect(outOfStockMessage).toContain('OUT OF STOCK');
    });
  });
});