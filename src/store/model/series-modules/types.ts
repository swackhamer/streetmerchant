/**
 * Type definitions for the series data system
 */
import {Link, Series} from '../store';

/**
 * Type definition for series data structure
 * Organized as: series -> store -> links
 */
export type SeriesData = {
  [key in Series]?: {
    [storeName: string]: Link[];
  };
};