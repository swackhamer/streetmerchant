/**
 * Series Data - Centralized data storage for product links
 * 
 * This file provides a data-driven approach to storing product links
 * organized by series and store, rather than having separate files for each.
 */
import {Link, Series, Brand, Model} from './store';

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
  // 3080 Series
  '3080': {
    'amazon': [
      {
        brand: 'pny',
        model: 'xlr8 revel',
        series: '3080',
        url: 'https://www.amazon.com/dp/B08HBR7QBM',
        cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HBR7QBM&Quantity.1=1',
      },
      {
        brand: 'pny',
        model: 'xlr8 revel',
        series: '3080',
        url: 'https://www.amazon.com/dp/B08HBTJMLJ',
        cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HBTJMLJ&Quantity.1=1',
      },
      {
        brand: 'msi',
        model: 'gaming x trio',
        series: '3080',
        url: 'https://www.amazon.com/dp/B08HR7SV3M',
        cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HR7SV3M&Quantity.1=1',
      },
    ],
    'bestbuy': [
      {
        brand: 'nvidia',
        model: 'founders edition',
        series: '3080',
        url: 'https://www.bestbuy.com/site/nvidia-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-graphics-card-titanium-and-black/6429440.p',
      },
      {
        brand: 'evga',
        model: 'xc3 ultra',
        series: '3080',
        url: 'https://www.bestbuy.com/site/evga-geforce-rtx-3080-10gb-xc3-ultra-gaming-gddr6-pci-express-4-0-graphics-card/6432400.p',
      },
    ],
  },
  
  // 5080 Series
  '5080': {
    'newegg': [
      {
        brand: 'nvidia',
        model: 'founders edition',
        series: '5080',
        url: 'https://www.newegg.com/nvidia-geforce-rtx-5080/p/N82E16814998015',
      },
    ],
    'bestbuy': [
      {
        brand: 'nvidia',
        model: 'founders edition',
        series: '5080',
        url: 'https://www.bestbuy.com/site/nvidia-geforce-rtx-5080-16gb-gddr7-pci-express-4-0-graphics-card/6598532.p',
      },
    ],
  },
  
  // ryzen9950x3d Series
  'ryzen9950x3d': {
    'amazon': [
      {
        brand: 'amd',
        model: '9950x3d',
        series: 'ryzen9950x3d',
        url: 'https://www.amazon.com/AMD-9950X3D-24-Core-Desktop-Processor/dp/B0D2W41RQM',
      },
    ],
  },
};

/**
 * Gets links for a specific store and series from the centralized data
 * 
 * @param storeName The name of the store
 * @param seriesName The series to get links for
 * @returns Array of links or empty array if none found
 */
export function getStoreSeriesLinksFromData(
  storeName: string,
  seriesName: Series
): Link[] {
  // Check if the series exists in the data
  if (!seriesData[seriesName]) {
    return [];
  }
  
  // Check if the store exists for this series
  if (!seriesData[seriesName]?.[storeName]) {
    return [];
  }
  
  // Return the links for this store and series
  return seriesData[seriesName]?.[storeName] || [];
}

/**
 * Gets all series names that have data
 */
export function getAllSeriesNamesFromData(): Series[] {
  return Object.keys(seriesData) as Series[];
}

/**
 * Gets all store names that have data for a given series
 */
export function getStoreNamesForSeries(seriesName: Series): string[] {
  if (!seriesData[seriesName]) {
    return [];
  }
  
  return Object.keys(seriesData[seriesName] || {});
}

/**
 * Filters links by brand, model, and price
 */
export function filterSeriesDataLinks(
  links: Link[],
  options: {
    brands?: string[];
    models?: string[];
    maxPrice?: Record<Series, number>;
  }
): Link[] {
  let filteredLinks = [...links];
  
  // Filter by brand
  if (options.brands && options.brands.length > 0) {
    filteredLinks = filteredLinks.filter(link => 
      options.brands!.some(brand => 
        link.brand.toLowerCase().includes(brand.toLowerCase())
      )
    );
  }
  
  // Filter by model
  if (options.models && options.models.length > 0) {
    filteredLinks = filteredLinks.filter(link => 
      options.models!.some(model => 
        link.model.toLowerCase().includes(model.toLowerCase())
      )
    );
  }
  
  // Filter by price
  if (options.maxPrice) {
    filteredLinks = filteredLinks.filter(link => {
      const maxPrice = options.maxPrice![link.series as Series];
      if (maxPrice && link.price) {
        return link.price <= maxPrice;
      }
      return true;
    });
  }
  
  return filteredLinks;
}