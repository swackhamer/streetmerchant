/**
 * Series Data - JSON-based product links management
 * 
 * This file implements a data-driven approach to managing product links
 * instead of having separate files for each store and series combination.
 * This significantly reduces file count and makes maintenance easier.
 */

/**
 * Interface for a single product link
 */
export interface SeriesLink {
  brand: string;
  model: string;
  url: string;
  cartUrl?: string;
  price?: number;
  itemNumber?: string;
}

/**
 * Interface for store links within a series
 */
export interface SeriesStore {
  [storeName: string]: SeriesLink[];
}

/**
 * Interface for all series data
 */
export interface SeriesData {
  [seriesName: string]: SeriesStore;
}

/**
 * Sample data for selected series
 * In a full implementation, this would be loaded from JSON files
 * or could be split into separate files that are combined
 */
export const seriesData: SeriesData = {
  '3080': {
    'amazon': [
      {
        brand: 'pny',
        model: 'xlr8 revel',
        url: 'https://www.amazon.com/dp/B08HBR7QBM',
        cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HBR7QBM&Quantity.1=1',
      },
      {
        brand: 'pny',
        model: 'xlr8 revel',
        url: 'https://www.amazon.com/dp/B08HBTJMLJ',
        cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HBTJMLJ&Quantity.1=1',
      },
      {
        brand: 'msi',
        model: 'gaming x trio',
        url: 'https://www.amazon.com/dp/B08HR7SV3M',
        cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HR7SV3M&Quantity.1=1',
      },
      {
        brand: 'msi',
        model: 'ventus 3x oc',
        url: 'https://www.amazon.com/dp/B08HR5SXPS',
        cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HR5SXPS&Quantity.1=1',
      },
    ],
    'bestbuy': [
      {
        brand: 'nvidia',
        model: 'founders edition',
        url: 'https://www.bestbuy.com/site/nvidia-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-graphics-card-titanium-and-black/6429440.p',
      },
      {
        brand: 'evga',
        model: 'xc3 ultra',
        url: 'https://www.bestbuy.com/site/evga-geforce-rtx-3080-xc3-ultra-gaming-10g-10gb-gddr6-pci-express-4-0-graphics-card/6436195.p',
      },
    ],
  },
  
  '3070': {
    'amazon': [
      {
        brand: 'asus',
        model: 'tuf',
        url: 'https://www.amazon.com/dp/B08L8HPKR6',
        cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08L8HPKR6&Quantity.1=1',
      },
      {
        brand: 'evga',
        model: 'xc3 ultra',
        url: 'https://www.amazon.com/dp/B08L8L71SM',
        cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08L8L71SM&Quantity.1=1',
      },
    ],
    'bestbuy': [
      {
        brand: 'nvidia',
        model: 'founders edition',
        url: 'https://www.bestbuy.com/site/nvidia-geforce-rtx-3070-8gb-gddr6-pci-express-4-0-graphics-card-dark-platinum-and-black/6429442.p',
      },
    ],
  },
  
  'rx6800': {
    'amd': [
      {
        brand: 'amd',
        model: 'amd reference',
        url: 'https://www.amd.com/en/direct-buy/5458372800/us',
      },
    ],
    'bestbuy': [
      {
        brand: 'amd',
        model: 'amd reference',
        url: 'https://www.bestbuy.com/site/amd-radeon-rx-6800-16g-gddr6-pci-express-4-0-graphics-card-black/6441020.p',
      },
    ],
  },
  
  'ryzen5900': {
    'amazon': [
      {
        brand: 'amd',
        model: 'ryzen 9 5900x',
        url: 'https://www.amazon.com/dp/B08164VTWH',
        cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08164VTWH&Quantity.1=1',
      },
    ],
    'bestbuy': [
      {
        brand: 'amd',
        model: 'ryzen 9 5900x',
        url: 'https://www.bestbuy.com/site/amd-ryzen-9-5900x-4th-gen-12-core-24-threads-unlocked-desktop-processor-without-cooler/6438942.p',
      },
    ],
  },
};

/**
 * Gets all available series names
 */
export function getAllSeriesNames(): string[] {
  return Object.keys(seriesData);
}

/**
 * Gets all store names for a given series
 */
export function getStoresForSeries(seriesName: string): string[] {
  if (!seriesData[seriesName]) {
    return [];
  }
  return Object.keys(seriesData[seriesName]);
}

/**
 * Gets all links for a store across all series
 */
export function getAllStoreLinks(storeName: string): SeriesLink[] {
  const result: SeriesLink[] = [];
  
  for (const seriesName of getAllSeriesNames()) {
    if (seriesData[seriesName][storeName]) {
      result.push(...seriesData[seriesName][storeName]);
    }
  }
  
  return result;
}

/**
 * Gets all links for a series across all stores
 */
export function getAllSeriesLinks(seriesName: string): SeriesLink[] {
  const result: SeriesLink[] = [];
  
  if (!seriesData[seriesName]) {
    return [];
  }
  
  for (const storeName of Object.keys(seriesData[seriesName])) {
    result.push(...seriesData[seriesName][storeName]);
  }
  
  return result;
}

/**
 * Adds a link to the series data (useful for runtime updates)
 */
export function addSeriesLink(storeName: string, seriesName: string, link: SeriesLink): void {
  // Create series if it doesn't exist
  if (!seriesData[seriesName]) {
    seriesData[seriesName] = {};
  }
  
  // Create store in series if it doesn't exist
  if (!seriesData[seriesName][storeName]) {
    seriesData[seriesName][storeName] = [];
  }
  
  // Add the link
  seriesData[seriesName][storeName].push(link);
}