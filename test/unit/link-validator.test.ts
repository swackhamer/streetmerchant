import {Link} from '../../src/store/model/store';
import {
  validateLink,
  validateLinks,
} from '../../src/store/model/link-validator';

// Mock the logger to prevent console output during tests
jest.mock('../../src/logger', () => ({
  logger: {
    debug: jest.fn(),
    warn: jest.fn(),
    error: jest.fn(),
  },
}));

describe('Link Validator', () => {
  describe('validateLink', () => {
    test('should validate a correct link', () => {
      const link: Link = {
        brand: 'nvidia',
        model: 'founders edition',
        series: '3080',
        url: 'https://example.com/nvidia-rtx-3080',
      };

      const result = validateLink(link);

      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    test('should validate a link with optional properties', () => {
      const link: Link = {
        brand: 'nvidia',
        model: 'founders edition',
        series: '3080',
        url: 'https://example.com/nvidia-rtx-3080',
        price: 699.99,
        cartUrl: 'https://example.com/cart/nvidia-rtx-3080',
      };

      const result = validateLink(link);

      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    test('should report missing required fields', () => {
      const link = {
        brand: 'nvidia',
        model: 'founders edition',
        // series: missing
        // url: missing
      } as Link;

      const result = validateLink(link);

      expect(result.valid).toBe(false);
      expect(result.errors).toHaveLength(2);
      expect(result.errors).toContain('Missing required field: series');
      expect(result.errors).toContain('Missing required field: url');
    });

    test('should validate URL format', () => {
      const link: Link = {
        brand: 'nvidia',
        model: 'founders edition',
        series: '3080',
        url: 'not-a-valid-url',
      };

      const result = validateLink(link);

      expect(result.valid).toBe(false);
      expect(result.errors).toHaveLength(1);
      expect(result.errors[0]).toContain('Invalid URL format');
    });

    test('should validate price format', () => {
      const link: Link = {
        brand: 'nvidia',
        model: 'founders edition',
        series: '3080',
        url: 'https://example.com/nvidia-rtx-3080',
        price: -100, // Negative price
      };

      const result = validateLink(link);

      expect(result.valid).toBe(false);
      expect(result.errors).toHaveLength(1);
      expect(result.errors[0]).toContain('Invalid price value');
    });

    test('should validate series format', () => {
      const link: Link = {
        brand: 'nvidia',
        model: 'founders edition',
        series: '3080 !@#' as any, // Invalid series with special characters
        url: 'https://example.com/nvidia-rtx-3080',
      };

      const result = validateLink(link);

      expect(result.valid).toBe(false);
      expect(result.errors).toHaveLength(1);
      expect(result.errors[0]).toContain('Invalid series format');
    });

    test('should detect duplicate URLs', () => {
      const link = {
        brand: 'nvidia',
        model: 'founders edition',
        series: '3080',
        url: 'https://example.com/nvidia-rtx-3080',
        duplicate: true, // Marked as duplicate - using type assertion for test
      } as any;

      const result = validateLink(link);

      expect(result.valid).toBe(false);
      expect(result.errors).toHaveLength(1);
      expect(result.errors[0]).toContain('Duplicate URL detected');
    });
  });

  describe('validateLinks', () => {
    test('should validate an array of links', () => {
      const links: Link[] = [
        {
          brand: 'nvidia',
          model: 'founders edition',
          series: '3080',
          url: 'https://example.com/nvidia-rtx-3080',
        },
        {
          brand: 'asus',
          model: 'strix',
          series: '3080',
          url: 'https://example.com/asus-rtx-3080-strix',
        },
      ];

      const result = validateLinks(links, 'test-store');

      expect(result).toHaveLength(2);
      expect(result).toEqual(links);
    });

    test('should filter out invalid links', () => {
      const links: Link[] = [
        {
          brand: 'nvidia',
          model: 'founders edition',
          series: '3080',
          url: 'https://example.com/nvidia-rtx-3080',
        },
        {
          brand: 'asus',
          // model: missing
          series: '3080',
          url: 'https://example.com/asus-rtx-3080',
          model: '' as any, // Adding empty model that will fail validation
        },
        {
          brand: 'evga',
          model: 'ftw3',
          series: '3080',
          // url: missing
        } as Link,
      ];

      const result = validateLinks(links, 'test-store');

      expect(result).toHaveLength(1);
      expect(result[0]).toEqual(links[0]);
    });

    test('should detect duplicate URLs', () => {
      const links: Link[] = [
        {
          brand: 'nvidia',
          model: 'founders edition',
          series: '3080',
          url: 'https://example.com/nvidia-rtx-3080',
        },
        {
          brand: 'nvidia',
          model: 'founders edition',
          series: '3080',
          url: 'https://example.com/nvidia-rtx-3080', // Duplicate URL
        },
      ];

      const result = validateLinks(links, 'test-store');

      // Should keep only valid links (only one since the second is marked as duplicate)
      expect(result).toHaveLength(1);
    });

    test('should handle non-array input', () => {
      const result = validateLinks(null as any, 'test-store');

      expect(result).toHaveLength(0);
    });
  });
});
