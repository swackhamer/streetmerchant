/**
 * File-based series link loader
 */
import {Link, Series} from '../store';
import {logger} from '../../../logger';
import * as fs from 'fs';
import * as path from 'path';
import {validateLinks} from '../link-validator';
import {cacheLinksBySeries, getCachedLinks} from './link-cache';

/**
 * Gets all available series names from the series directory
 * 
 * @returns Array of all series names
 */
export function getAllSeriesNames(): string[] {
  const seriesDir = path.join(__dirname, '..', 'series');
  
  if (!fs.existsSync(seriesDir)) {
    return [];
  }
  
  return fs.readdirSync(seriesDir)
    .filter(file => fs.statSync(path.join(seriesDir, file)).isDirectory());
}

/**
 * Gets links for a specific store and series from file-based approach
 * 
 * @param storeName The name of the store
 * @param series The series to get links for
 * @returns Links for the specified store and series
 */
export async function getStoreSeriesLinksFromFiles(
  storeName: string, 
  series: Series
): Promise<Link[]> {
  // Return cached links if available
  const cachedLinks = getCachedLinks(storeName, series, 'file');
  if (cachedLinks) {
    return cachedLinks;
  }
  
  // Try to import the series-specific links file
  const seriesDir = path.join(__dirname, '..', 'series', series);
  const filePathTS = path.join(seriesDir, `${storeName}.ts`);
  const filePathJS = path.join(seriesDir, `${storeName}.js`);
  
  // Check for either TS or JS file (JS for compiled code)
  if (fs.existsSync(filePathTS) || fs.existsSync(filePathJS)) {
    try {
      // Use dynamic import to load the module
      // Note: The import path is relative to the current directory
      const module = await import(`../series/${series}/${storeName}`);
      
      // Validate links before caching
      const rawLinks = module.links || [];
      const validLinks = validateLinks(rawLinks, `${storeName}_${series}`);
      
      // Cache the valid links
      cacheLinksBySeries(storeName, series, validLinks, 'file');
      
      if (validLinks.length < rawLinks.length) {
        logger.warn(
          `Filtered out ${rawLinks.length - validLinks.length} invalid links for store ${storeName}, series ${series}`
        );
      }
      
      return validLinks;
    } catch (error) {
      logger.error(`Error loading links for store ${storeName}, series ${series}`);
      cacheLinksBySeries(storeName, series, [], 'file');
      return [];
    }
  } else {
    // No links file found for this store/series combination
    cacheLinksBySeries(storeName, series, [], 'file');
    return [];
  }
}