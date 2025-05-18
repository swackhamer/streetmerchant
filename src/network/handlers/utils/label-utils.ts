import {includesLabels} from '../../../store/includes-labels';

/**
 * Utility for converting various label formats to string arrays
 *
 * Handles different label formats used throughout the app:
 * - Simple strings
 * - String arrays
 * - Element objects with text property
 * - Arrays of Element objects
 */
export function getLabelStrings(label: any): string[] {
  if (typeof label === 'string') {
    return [label];
  } else if (Array.isArray(label)) {
    if (typeof label[0] === 'string') {
      return label as string[];
    } else {
      // Element[]
      return label.flatMap(elem =>
        typeof elem === 'object' && Array.isArray(elem.text) ? elem.text : []
      );
    }
  } else if (typeof label === 'object' && Array.isArray(label.text)) {
    // Single Element
    return label.text;
  }
  return [];
}

/**
 * Check if page content has any captcha indicators
 */
export function hasCaptcha(pageContent: string, captchaLabels: any): boolean {
  // If no captcha labels defined, assume there's no captcha
  if (!captchaLabels) {
    return false;
  }

  // Convert captcha labels to string[] and check if any of them are in the page content
  const captchaStrings = getLabelStrings(captchaLabels);
  return includesLabels(pageContent, captchaStrings);
}

/**
 * Check if a product is in stock based on page content and labels
 */
export function checkInStock(pageContent: string, labels: any): boolean {
  // If no labels defined, assume not in stock
  if (!labels.inStock) {
    return false;
  }

  // Check if page content includes in-stock indicators
  const inStockLabels = getLabelStrings(labels.inStock);
  const hasInStockLabels = includesLabels(pageContent, inStockLabels);

  // If out-of-stock labels are defined, make sure they're not present
  const hasOutOfStockLabels = labels.outOfStock
    ? includesLabels(pageContent, getLabelStrings(labels.outOfStock))
    : false;

  // Check for banned seller labels if defined
  const hasBannedSeller = labels.bannedSeller
    ? includesLabels(pageContent, getLabelStrings(labels.bannedSeller))
    : false;

  // Product is in stock if it has in-stock labels, doesn't have out-of-stock labels,
  // and doesn't have banned seller labels
  return hasInStockLabels && !hasOutOfStockLabels && !hasBannedSeller;
}
