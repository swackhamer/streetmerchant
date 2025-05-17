/**
 * Link filtering functions for series data
 * 
 * This module provides functions to filter links based on configuration.
 */
import {Link} from '../store';
import {config} from '../../../config';

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