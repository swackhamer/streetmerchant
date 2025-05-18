/**
 * Link validator for series links
 * Verifies that links are valid and conform to expected format
 * 
 * Maintained for backwards compatibility with tests and existing modules
 */
import {Link} from './types';

/**
 * Result interface for link validation
 */
interface ValidationResult {
  valid: boolean;
  errors: string[];
  link?: Link;
}

/**
 * Validates a set of store links
 * @param links An array of links to validate
 * @param storeName Optional store name for error reporting
 * @returns Array of validated links with validation results
 */
export function validateLinks(links: Link[], storeName?: string): any[] {
  if (!Array.isArray(links)) {
    throw new Error('Links must be an array');
  }

  return links.map((link, i) => {
    const result: ValidationResult = {
      valid: true,
      errors: [],
      link
    };

    if (!link.brand) {
      result.valid = false;
      result.errors.push('Missing required field: brand');
    }

    if (!link.model) {
      result.valid = false;
      result.errors.push('Missing required field: model');
    }

    if (!link.series) {
      result.valid = false;
      result.errors.push('Missing required field: series');
    }

    if (!link.url) {
      result.valid = false;
      result.errors.push('Missing required field: url');
    } else if (!link.url.startsWith('http')) {
      result.valid = false;
      result.errors.push(`Invalid URL format: ${link.url}`);
    }

    // Add price validation if present
    if (link.price !== undefined && link.price !== null && 
        (isNaN(Number(link.price)) || Number(link.price) < 0)) {
      result.valid = false;
      result.errors.push(`Invalid price value: ${link.price}`);
    }

    // Series format validation
    if (link.series && typeof link.series === 'string' && /[^a-z0-9]/.test(link.series)) {
      result.valid = false;
      result.errors.push(`Invalid series format: ${link.series}`);
    }

    return result;
  });
}

/**
 * Validates a single store link
 * @param link Link to validate
 * @param storeName Optional store name for error reporting
 * @returns Validated link object with validation result
 */
export function validateLink(link: Link, storeName?: string): any {
  return validateLinks([link], storeName)[0];
}