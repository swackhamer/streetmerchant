import {Store} from './store';
import {getSeriesLinks} from './series-links';
import {Browser} from 'puppeteer';
import {logger} from '../../logger';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Check if a store has series-specific links
 * 
 * @param storeName The name of the store to check
 * @returns True if the store has series-specific links
 */
export function hasSeriesLinks(storeName: string): boolean {
  const seriesDir = path.join(__dirname, 'series');
  
  if (!fs.existsSync(seriesDir)) {
    return false;
  }
  
  // Check if any series directory contains files for this store
  const seriesDirs = fs.readdirSync(seriesDir)
    .filter(file => fs.statSync(path.join(seriesDir, file)).isDirectory());
  
  for (const series of seriesDirs) {
    const storeFile = path.join(seriesDir, series, `${storeName}.ts`);
    if (fs.existsSync(storeFile)) {
      return true;
    }
  }
  
  return false;
}

/**
 * Initialize setupAction for a store to load series links
 * 
 * @param store The store to initialize
 */
export function initializeSeriesLinksLoader(store: Store): void {
  // Only initialize for stores that have series links
  if (hasSeriesLinks(store.name)) {
    const originalSetupAction = store.setupAction;
    
    // Create a setupAction that loads series links
    store.setupAction = async (browser: Browser) => {
      // Call the original setupAction if it exists
      if (originalSetupAction) {
        await originalSetupAction(browser);
      }
      
      // Load series links
      logger.debug(`Loading series links for store: ${store.name}`);
      const seriesLinks = await getSeriesLinks(store.name);
      
      if (seriesLinks.length > 0) {
        logger.info(`Loaded ${seriesLinks.length} links from series directories for ${store.name}`);
        store.links = store.links.concat(seriesLinks);
      }
    };
  }
}