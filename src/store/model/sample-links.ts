/**
 * Sample links for testing purposes
 * 
 * This file contains sample links for various product series
 * Used for testing and development purposes
 */
import {Link} from './types';

/**
 * Sample set of links
 */
export const sampleLinks: Link[] = [
  {
    brand: 'test:brand',
    model: 'test:model',
    series: 'test:series',
    url: 'https://www.example.com/test-product-url'
  },
  {
    brand: 'nvidia',
    model: 'founders edition',
    series: '3080',
    url: 'https://www.example.com/nvidia-3080-fe'
  },
  {
    brand: 'evga',
    model: 'xc3 ultra',
    series: '3070',
    url: 'https://www.example.com/evga-3070-xc3-ultra'
  },
  {
    brand: 'amd',
    model: 'reference',
    series: 'rx6800',
    url: 'https://www.example.com/amd-rx6800-reference'
  }
];

/**
 * Add sample links to a store
 * @param store Store object to add links to (optional)
 */
export function addSampleLinks(store?: any): any {
  // For backwards compatibility with index.ts calls
  if (!store) {
    return sampleLinks;
  }
  if (!store.links) {
    store.links = [];
  }
  
  // Add test link if no links exist
  if (store.links.length === 0) {
    store.links.push(sampleLinks[0]);
  }
}