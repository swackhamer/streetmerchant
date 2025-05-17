/**
 * Series Data - Centralized data storage for product links
 * 
 * This file provides a data-driven approach to storing product links
 * organized by series and store, rather than having separate files for each.
 */
import {Link, Series} from './store';
import {config} from '../../config';

/**
 * Type definition for series data structure
 * Organized as: series -> store -> links
 */
export type SeriesData = {
  [key in Series]?: {
    [storeName: string]: Link[];
  };
};

/**
 * Central repository for product links organized by series and store
 */
export const seriesData: SeriesData = {
  '3080': {
    'bestbuy': [
      {
        brand: 'nvidia',
        model: 'founders edition',
        series: '3080',
        url: 'https://api.bestbuy.com/click/-/6429440/pdp',
      },
    ],
    'amazon': [
      {
        brand: 'asus',
        model: 'tuf',
        series: '3080',
        url: 'https://www.amazon.com/dp/B08HH5WF97',
      },
    ],
  },
  '3070': {
    'bestbuy': [
      {
        brand: 'nvidia',
        model: 'founders edition',
        series: '3070',
        url: 'https://api.bestbuy.com/click/-/6429442/pdp',
      },
    ],
  },
};

/**
 * Gets links for a specific series and store
 */
export function getLinksForSeriesAndStore(
  series: Series,
  storeName: string
): Link[] {
  if (!seriesData[series]) {
    return [];
  }
  
  return seriesData[series]?.[storeName] || [];
}

/**
 * Helper function to retrieve all links for a specific series
 */
export function getAllLinksForSeries(series: Series): {[store: string]: Link[]} {
  return seriesData[series] || {};
}

/**
 * Helper function to get all available series
 */
export function getAllSeries(): Series[] {
  return Object.keys(seriesData) as Series[];
}

/**
 * Gets all links for a store from the centralized data by series
 */
export function getStoreSeriesLinksFromData(
  storeName: string
): Link[] {
  const links: Link[] = [];

  // Iterate through all series in the centralized data
  for (const series of getAllSeries()) {
    if (config.store.showOnlySeries.length > 0 && !config.store.showOnlySeries.includes(series as Series)) {
      continue;
    }
    
    // Get links for this store and series
    const seriesLinks = getLinksForSeriesAndStore(series as Series, storeName);
    if (seriesLinks.length > 0) {
      links.push(...seriesLinks);
    }
  }

  return links;
}

/**
 * Filters links from series data based on config
 */
export function filterSeriesDataLinks(links: Link[]): Link[] {
  return links.filter(link => {
    // Filter by series
    if (config.store.showOnlySeries.length > 0 && !config.store.showOnlySeries.includes(link.series)) {
      return false;
    }
    
    // Filter by brand
    if (config.store.showOnlyBrands.length > 0 && !config.store.showOnlyBrands.includes(link.brand)) {
      return false;
    }
    
    // Filter by model
    if (config.store.showOnlyModels.length > 0) {
      const sanitizedModel = link.model.replace(/\\s/g, '');
      const sanitizedSeries = link.series.replace(/\\s/g, '');
      
      for (const configModelEntry of config.store.showOnlyModels) {
        const sanitizedConfigModel = configModelEntry.name.replace(/\\s/g, '');
        const sanitizedConfigSeries = configModelEntry.series.replace(/\\s/g, '');
        
        if (sanitizedConfigSeries) {
          if (
            sanitizedSeries === sanitizedConfigSeries &&
            sanitizedModel === sanitizedConfigModel
          ) {
            return true;
          }
        } else if (sanitizedModel === sanitizedConfigModel) {
          return true;
        }
      }
      return false;
    }
    
    return true;
  });
}