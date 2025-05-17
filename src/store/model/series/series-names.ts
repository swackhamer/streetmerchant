/**
 * Utility functions for series names
 */
import * as fs from 'fs';
import * as path from 'path';

// Cache series names to avoid repeated filesystem operations
let cachedSeriesNames: string[] | null = null;

/**
 * Gets all available series names from the directory structure
 * 
 * @returns Array of all series names
 */
export function getAllSeriesNames(): string[] {
  // Return cached names if available
  if (cachedSeriesNames) {
    return cachedSeriesNames;
  }

  const seriesDir = path.join(__dirname);
  
  if (!fs.existsSync(seriesDir)) {
    return [];
  }
  
  // Find all directories that aren't hidden/special (don't start with .)
  const seriesNames = fs.readdirSync(seriesDir)
    .filter(file => {
      const fullPath = path.join(seriesDir, file);
      return fs.statSync(fullPath).isDirectory() && !file.startsWith('.');
    });
  
  // Cache the result
  cachedSeriesNames = seriesNames;
  
  return seriesNames;
}

/**
 * Clears the cached series names
 */
export function clearSeriesNamesCache(): void {
  cachedSeriesNames = null;
}