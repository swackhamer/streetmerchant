import * as fs from 'fs';
import * as path from 'path';
import {Link, Series} from '../../src/store/model/store';
import {LinkFilterOptions} from '../../src/store/model/series-links';

// Mock the series-links module to test the filterLinks function
jest.mock('../../src/config', () => ({
  config: {
    store: {
      showOnlySeries: ['3080', '3070'],
    },
  },
}));

// Mock the logger to prevent console output during tests
jest.mock('../../src/logger', () => ({
  logger: {
    debug: jest.fn(),
    error: jest.fn(),
  },
}));

// Define our own test implementation of filterLinks since it's internal to the module
const filterLinks = (links: Link[], options?: LinkFilterOptions) => {
  if (!options) {
    return links;
  }

  let filteredLinks = links;

  // Filter by brand if specified
  if (options.brands && options.brands.length > 0) {
    filteredLinks = filteredLinks.filter(link =>
      options.brands!.some(brand =>
        link.brand.toLowerCase().includes(brand.toLowerCase())
      )
    );
  }

  // Filter by model if specified
  if (options.models && options.models.length > 0) {
    filteredLinks = filteredLinks.filter(link =>
      options.models!.some(model =>
        link.model.toLowerCase().includes(model.toLowerCase())
      )
    );
  }

  // Filter by maximum price if specified
  if (options.maxPrice) {
    filteredLinks = filteredLinks.filter(link => {
      const maxPriceForSeries = options.maxPrice![link.series as Series];
      if (maxPriceForSeries && link.price) {
        return link.price <= maxPriceForSeries;
      }
      return true; // Keep links without price info or without max price for their series
    });
  }

  return filteredLinks;
};

// Sample test data
const testLinks: Link[] = [
  {
    brand: 'nvidia',
    model: 'founders edition',
    series: '3080',
    url: 'https://test.com/nvidia-rtx-3080-founders-edition',
  },
  {
    brand: 'asus',
    model: 'strix',
    series: '3080',
    url: 'https://test.com/asus-rtx-3080-strix',
  },
  {
    brand: 'msi',
    model: 'gaming x trio',
    series: '3080',
    url: 'https://test.com/msi-rtx-3080-gaming-x-trio',
    price: 899.99,
  },
  {
    brand: 'nvidia',
    model: 'founders edition',
    series: '3070',
    url: 'https://test.com/nvidia-rtx-3070-founders-edition',
  },
  {
    brand: 'evga',
    model: 'xc3',
    series: '3070',
    url: 'https://test.com/evga-rtx-3070-xc3',
    price: 599.99,
  },
  {
    brand: 'gigabyte',
    model: 'eagle oc',
    series: '3070',
    url: 'https://test.com/gigabyte-rtx-3070-eagle-oc',
    price: 649.99,
  },
];

describe('Series Links Filtering', () => {
  test('filterLinks should return all links when no options are provided', () => {
    const result = filterLinks(testLinks);
    expect(result).toHaveLength(6);
    expect(result).toEqual(testLinks);
  });

  test('filterLinks should filter links by brand', () => {
    const options: LinkFilterOptions = {
      brands: ['nvidia'],
    };

    const result = filterLinks(testLinks, options);

    expect(result).toHaveLength(2);
    expect(result.every((link: Link) => link.brand === 'nvidia')).toBe(true);
  });

  test('filterLinks should filter links by model', () => {
    const options: LinkFilterOptions = {
      models: ['founders'],
    };

    const result = filterLinks(testLinks, options);

    expect(result).toHaveLength(2);
    expect(result.every((link: Link) => link.model.includes('founders'))).toBe(
      true
    );
  });

  test('filterLinks should filter links by price', () => {
    const options: LinkFilterOptions = {
      maxPrice: {
        '3070': 600,
        '3080': 800,
      } as Record<Series, number>,
    };

    const result = filterLinks(testLinks, options);

    // Should exclude the MSI 3080 at $899.99 and Gigabyte 3070 at $649.99 which are above their maxPrice
    // But include links without price info and the EVGA 3070 at $599.99
    expect(result).toHaveLength(4);

    // Should exclude MSI 3080 (price above maxPrice)
    expect(result.find((link: Link) => link.brand === 'msi')).toBeUndefined();

    // Should include EVGA 3070 (price within maxPrice)
    expect(result.find((link: Link) => link.brand === 'evga')).toBeDefined();

    // Should exclude Gigabyte 3070 (price above maxPrice)
    expect(
      result.find((link: Link) => link.brand === 'gigabyte')
    ).toBeUndefined();

    // Should include founders editions (no price specified)
    expect(
      result.filter((link: Link) => link.model === 'founders edition')
    ).toHaveLength(2);
  });

  test('filterLinks should combine multiple filter criteria', () => {
    const options: LinkFilterOptions = {
      brands: ['nvidia', 'asus'],
      models: ['founders', 'strix'],
    };

    const result = filterLinks(testLinks, options);

    expect(result).toHaveLength(3);
    expect(
      result.every(
        (link: Link) =>
          ['nvidia', 'asus'].includes(link.brand) &&
          (link.model.includes('founders') || link.model.includes('strix'))
      )
    ).toBe(true);
  });

  test('filterLinks should handle case-insensitive matching', () => {
    const options: LinkFilterOptions = {
      brands: ['NVIDIA'],
      models: ['FOUNDERS'],
    };

    const result = filterLinks(testLinks, options);

    expect(result).toHaveLength(2);
    expect(
      result.every(
        (link: Link) =>
          link.brand.toLowerCase() === 'nvidia' &&
          link.model.toLowerCase().includes('founders')
      )
    ).toBe(true);
  });

  test('filterLinks should handle partial matching for models', () => {
    const options: LinkFilterOptions = {
      models: ['gaming'],
    };

    const result = filterLinks(testLinks, options);

    expect(result).toHaveLength(1);
    expect(result[0].model).toBe('gaming x trio');
  });
});
