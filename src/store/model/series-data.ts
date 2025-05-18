/**
 * Series Data - Centralized data storage for product links
 *
 * This file is now a thin wrapper around the modular series data system
 * for backward compatibility.
 */
import {Link, Series} from './store';

// Import and re-export everything from the modular implementation
export {
  SeriesData,
  seriesData,
  getLinksForSeriesAndStore,
  getAllLinksForSeries,
  getAllSeries,
  getStoreSeriesLinksFromData,
  filterSeriesDataLinks,
} from './series-modules';
