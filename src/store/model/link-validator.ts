import {Link, Series} from './store';
import {logger} from '../../logger';

/**
 * Result of validating a link
 */
export interface LinkValidationResult {
  valid: boolean;
  errors: string[];
}

/**
 * Validates a single link
 * 
 * @param link The link to validate
 * @returns Validation result
 */
export function validateLink(link: Link): LinkValidationResult {
  const errors: string[] = [];
  
  // Required fields
  if (!link.brand) {
    errors.push('Missing required field: brand');
  }
  
  if (!link.model) {
    errors.push('Missing required field: model');
  }
  
  if (!link.series) {
    errors.push('Missing required field: series');
  }
  
  if (!link.url) {
    errors.push('Missing required field: url');
  } else {
    // URL format validation
    try {
      new URL(link.url);
    } catch (error) {
      errors.push(`Invalid URL format: ${link.url}`);
    }
  }
  
  // Check for URL duplicates within the same store
  // Check for URL duplicates within the same store
  if (link.url && (link as any).duplicate) {
    errors.push(`Duplicate URL detected: ${link.url}`);
  }
  
  // Validate price if present
  if (link.price !== undefined) {
    if (typeof link.price !== 'number' || link.price < 0) {
      errors.push(`Invalid price value: ${link.price}`);
    }
  }
  
  // Series format validation (can expand with known valid values if needed)
  if (link.series && !/^[\w-]+$/.test(link.series)) {
    errors.push(`Invalid series format: ${link.series}`);
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
}

/**
 * Validates an array of links
 * 
 * @param links Array of links to validate
 * @param storeName Name of the store (for logging)
 * @returns Array of valid links
 */
export function validateLinks(links: Link[], storeName: string): Link[] {
  if (!Array.isArray(links)) {
    logger.error(`Invalid links format for store ${storeName}: expected array`);
    return [];
  }
  
  const validLinks: Link[] = [];
  const invalidLinks: Link[] = [];
  
  // Check for duplicates
  const urlMap = new Map<string, boolean>();
  
  // First pass - mark duplicates
  links.forEach(link => {
    if (link.url) {
      if (urlMap.has(link.url)) {
        (link as any).duplicate = true;
      } else {
        urlMap.set(link.url, true);
      }
    }
  });
  
  // Second pass - validate each link
  links.forEach(link => {
    const result = validateLink(link);
    
    if (result.valid) {
      validLinks.push(link);
    } else {
      // Log validation errors
      logger.debug(
        `Invalid link for store ${storeName}: ${link.url || 'unknown URL'}`,
        result.errors
      );
      invalidLinks.push(link);
    }
  });
  
  if (invalidLinks.length > 0) {
    logger.warn(
      `Found ${invalidLinks.length} invalid links for store ${storeName}`
    );
  }
  
  return validLinks;
}