import {
  seriesData,
  getLinksForSeriesAndStore,
  getAllLinksForSeries,
  getAllSeries,
  getStoreSeriesLinksFromData,
  filterSeriesDataLinks,
} from '../../src/store/model/series-modules';
import {Link, Series} from '../../src/store/model/store';

// Mock the config so we don't depend on .env files
jest.mock('../../src/config', () => ({
  config: {
    store: {
      showOnlySeries: [],
      showOnlyBrands: [],
      showOnlyModels: [],
    },
  },
}));

describe('Series Data Modules', () => {
  describe('seriesData', () => {
    it('should contain 3080 series data', () => {
      // Arrange & Act

      // Assert
      expect(seriesData['3080']).toBeDefined();
    });

    it('should have bestbuy links for 3080', () => {
      // Arrange & Act

      // Assert
      expect(seriesData['3080']?.['bestbuy']).toBeDefined();
      expect(seriesData['3080']?.['bestbuy'].length).toBeGreaterThan(0);
    });

    it('should have properly structured links', () => {
      // Arrange & Act
      const link = seriesData['3080']?.['bestbuy'][0];

      // Assert
      expect(link).toBeDefined();
      expect(link?.brand).toBe('nvidia');
      expect(link?.model).toBe('founders edition');
      expect(link?.series).toBe('3080');
      expect(link?.url).toBeDefined();
    });
  });

  describe('getLinksForSeriesAndStore', () => {
    it('should return links for a valid series and store', () => {
      // Arrange

      // Act
      const links = getLinksForSeriesAndStore('3080' as Series, 'bestbuy');

      // Assert
      expect(links.length).toBeGreaterThan(0);
      expect(links[0].brand).toBe('nvidia');
    });

    it('should return empty array for non-existent series', () => {
      // Arrange

      // Act
      const links = getLinksForSeriesAndStore('nonexistent' as Series, 'bestbuy');

      // Assert
      expect(links).toEqual([]);
    });

    it('should return empty array for non-existent store', () => {
      // Arrange

      // Act
      const links = getLinksForSeriesAndStore('3080' as Series, 'nonexistent');

      // Assert
      expect(links).toEqual([]);
    });
  });

  describe('getAllLinksForSeries', () => {
    it('should return all store links for a valid series', () => {
      // Arrange

      // Act
      const storeLinks = getAllLinksForSeries('3080' as Series);

      // Assert
      expect(Object.keys(storeLinks).length).toBeGreaterThan(0);
      expect(storeLinks['bestbuy']).toBeDefined();
    });

    it('should return empty object for non-existent series', () => {
      // Arrange

      // Act
      const storeLinks = getAllLinksForSeries('nonexistent' as Series);

      // Assert
      expect(storeLinks).toEqual({});
    });
  });

  describe('getAllSeries', () => {
    it('should return an array of all available series', () => {
      // Arrange

      // Act
      const series = getAllSeries();

      // Assert
      expect(series.length).toBeGreaterThan(0);
      expect(series).toContain('3080');
      expect(series).toContain('3070');
    });
  });

  describe('getStoreSeriesLinksFromData', () => {
    it('should return all links for a store across series', () => {
      // Arrange

      // Act
      const links = getStoreSeriesLinksFromData('bestbuy');

      // Assert
      expect(links.length).toBeGreaterThan(0);

      // Check that we have links from different series
      const series = new Set(links.map(link => link.series));
      expect(series.size).toBeGreaterThan(0);
    });

    it('should return empty array for non-existent store', () => {
      // Arrange

      // Act
      const links = getStoreSeriesLinksFromData('nonexistent');

      // Assert
      expect(links).toEqual([]);
    });

    it('should filter by config.store.showOnlySeries when specified', () => {
      // Arrange
      // Temporarily modify the mock
      const originalShowOnlySeries = require('../../src/config').config.store.showOnlySeries;
      require('../../src/config').config.store.showOnlySeries = ['3080'];

      // Act
      const links = getStoreSeriesLinksFromData('bestbuy');

      // Assert
      expect(links.length).toBeGreaterThan(0);

      // Verify all links are for the 3080 series
      links.forEach(link => {
        expect(link.series).toBe('3080');
      });

      // Restore original mock state
      require('../../src/config').config.store.showOnlySeries = originalShowOnlySeries;
    });
  });

  describe('filterSeriesDataLinks', () => {
    // Sample links for testing
    const testLinks: Link[] = [
      {
        brand: 'nvidia',
        model: 'founders edition',
        series: '3080',
        url: 'https://example.com/nvidia-3080-fe',
      },
      {
        brand: 'asus',
        model: 'strix',
        series: '3070',
        url: 'https://example.com/asus-3070-strix',
      },
      {
        brand: 'evga',
        model: 'ftw3',
        series: '3090',
        url: 'https://example.com/evga-3090-ftw3',
      },
    ];

    it('should return all links when no filters are specified', () => {
      // Arrange

      // Act
      const filtered = filterSeriesDataLinks(testLinks);

      // Assert
      expect(filtered.length).toBe(3);
    });

    it('should filter by series when config.store.showOnlySeries is specified', () => {
      // Arrange
      // Temporarily modify the mock
      const originalShowOnlySeries = require('../../src/config').config.store.showOnlySeries;
      require('../../src/config').config.store.showOnlySeries = ['3080'];

      // Act
      const filtered = filterSeriesDataLinks(testLinks);

      // Assert
      expect(filtered.length).toBe(1);
      expect(filtered[0].series).toBe('3080');

      // Restore original mock state
      require('../../src/config').config.store.showOnlySeries = originalShowOnlySeries;
    });

    it('should filter by brand when config.store.showOnlyBrands is specified', () => {
      // Arrange
      // Temporarily modify the mock
      const originalShowOnlyBrands = require('../../src/config').config.store.showOnlyBrands;
      require('../../src/config').config.store.showOnlyBrands = ['asus'];

      // Act
      const filtered = filterSeriesDataLinks(testLinks);

      // Assert
      expect(filtered.length).toBe(1);
      expect(filtered[0].brand).toBe('asus');

      // Restore original mock state
      require('../../src/config').config.store.showOnlyBrands = originalShowOnlyBrands;
    });

    it('should filter by model when config.store.showOnlyModels is specified', () => {
      // Arrange
      // Temporarily modify the mock
      const originalShowOnlyModels = require('../../src/config').config.store.showOnlyModels;
      require('../../src/config').config.store.showOnlyModels = [{name: 'ftw3', series: '3090'}];

      // Act
      const filtered = filterSeriesDataLinks(testLinks);

      // Assert
      expect(filtered.length).toBe(1);
      expect(filtered[0].model).toBe('ftw3');
      expect(filtered[0].series).toBe('3090');

      // Restore original mock state
      require('../../src/config').config.store.showOnlyModels = originalShowOnlyModels;
    });

    // Test with the actual implementation's behavior
    it('should handle model names with spaces correctly', () => {
      // Arrange
      // Links with spaces in model names
      const linksWithSpaces: Link[] = [
        {
          brand: 'nvidia',
          model: 'founders edition', // This has a space
          series: '3080',
          url: 'https://example.com/nvidia-3080-fe',
        },
      ];

      // Setup model filtering to match with spaces
      const originalShowOnlyModels = require('../../src/config').config.store.showOnlyModels;
      require('../../src/config').config.store.showOnlyModels = [
        {name: 'founders edition', series: '3080'}, // Match with spaces
      ];

      // Act
      const filtered = filterSeriesDataLinks(linksWithSpaces);

      // Assert
      expect(filtered.length).toBe(1);
      expect(filtered[0].model).toBe('founders edition');

      // Restore original state
      require('../../src/config').config.store.showOnlyModels = originalShowOnlyModels;
    });
  });
});
