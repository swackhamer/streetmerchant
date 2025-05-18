/**
 * Type definitions for series links
 */
import {Link, Series} from '../store';

/**
 * Options for filtering links
 */
export interface LinkFilterOptions {
  // Filter by specific brands (e.g., 'nvidia', 'asus')
  brands?: string[];
  // Filter by specific models (e.g., 'founders edition', 'strix')
  models?: string[];
  // Filter by maximum price (per series)
  maxPrice?: Record<Series, number>;
  // Whether to use the centralized data approach
  useCentralizedData?: boolean;
}
