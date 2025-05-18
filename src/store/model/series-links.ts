/**
 * Series Links - API for retrieving product links by series
 *
 * This file is now a thin wrapper around the modular series links system
 * for backward compatibility.
 */

// Re-export the types and functions from the modular implementation
export {
  LinkFilterOptions,
  getSeriesLinks,
  clearLinkCache,
  getAllSeriesNames,
  getAllSeriesNamesCombined,
  filterLinks,
} from './series-modules';
