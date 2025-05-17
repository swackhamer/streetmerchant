/**
 * United States store configurations
 */
import {ExtendedStoreOptions} from './types';
import {commonLabels} from '../common/label-sets';

/**
 * Registry of US stores
 */
export const usStores: Record<string, ExtendedStoreOptions> = {
  'amazon': {
    name: 'amazon',
    country: 'US',
    currency: '$',
    storeType: 'marketplace',
    labels: commonLabels.amazon,
  },
  'bestbuy': {
    name: 'bestbuy',
    country: 'US',
    currency: '$',
    storeType: 'standard',
    labels: commonLabels.bestbuy,
  },
  'newegg': {
    name: 'newegg',
    country: 'US',
    currency: '$',
    storeType: 'standard',
    labels: commonLabels.newegg,
  },
  'antonline': {
    name: 'antonline',
    country: 'US',
    currency: '$',
    storeType: 'standard',
    labels: {
      container: 'div.product-info-container',
      inStock: {
        container: '.product-info-container',
        text: ['add to cart'],
      }
    },
  },
  'microcenter': {
    name: 'microcenter',
    country: 'US',
    currency: '$',
    storeType: 'standard',
    labels: {
      inStock: {
        container: '#cart-options',
        text: ['in stock']
      },
      maxPrice: {
        container: 'span.price-label',
      }
    },
  },
  // Add more US stores here
};