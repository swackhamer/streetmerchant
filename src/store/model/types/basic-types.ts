/**
 * Basic type definitions for the store model
 */

/**
 * Element definition for selectors
 */
export type Element = {
  container?: string;
  text: string[];
};

/**
 * Pricing information structure
 */
export type Pricing = {
  container: string;
  euroFormat?: boolean;
};
