/**
 * Link filtering utilities
 */
import {Link, Series} from '../store';
import {LinkFilterOptions} from './link-types';
import {filterSeriesDataLinks} from './link-filter';

/**
 * Filters links based on provided options
 * 
 * @param links The links to filter
 * @param options Filter options
 * @returns Filtered links
 */
export function filterLinks(links: Link[], options?: LinkFilterOptions): Link[] {
  if (!options) {
    return links;
  }
  
  // Use the centralized filtering function if available
  if (options.useCentralizedData) {
    // The centralized filtering function now uses config directly
    return filterSeriesDataLinks(links);
  }
  
  let filteredLinks = links;
  
  // Filter by brand if specified
  if (options.brands && options.brands.length > 0) {
    filteredLinks = filteredLinks.filter(link => 
      options.brands!.some(brand => 
        link.brand.toLowerCase().includes(brand.toLowerCase())
      )
    );
  }
  
  // Filter by model if specified
  if (options.models && options.models.length > 0) {
    filteredLinks = filteredLinks.filter(link => 
      options.models!.some(model => 
        link.model.toLowerCase().includes(model.toLowerCase())
      )
    );
  }
  
  // Filter by maximum price if specified
  if (options.maxPrice) {
    filteredLinks = filteredLinks.filter(link => {
      const maxPriceForSeries = options.maxPrice![link.series as Series];
      if (maxPriceForSeries && link.price) {
        return link.price <= maxPriceForSeries;
      }
      return true; // Keep links without price info or without max price for their series
    });
  }
  
  return filteredLinks;
}