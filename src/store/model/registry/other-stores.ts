/**
 * Other region store configurations
 */
import {ExtendedStoreOptions} from './types';
import {commonLabels} from '../common/label-sets';

/**
 * Registry of Australian/NZ stores
 */
export const auNzStores: Record<string, ExtendedStoreOptions> = {
  pccg: {
    name: 'pccg',
    country: 'AU',
    currency: '$',
    storeType: 'standard',
    labels: {
      inStock: {
        container: '.product-data-container',
        text: ['add to cart'],
      },
    },
  },
  centrecom: {
    name: 'centrecom',
    country: 'AU',
    currency: '$',
    storeType: 'standard',
    labels: {
      inStock: {
        container: '.productRight',
        text: ['add to cart'],
      },
    },
  },
  // Add more AU/NZ stores here
};

/**
 * Registry of Asian stores
 */
export const asiaStores: Record<string, ExtendedStoreOptions> = {
  'amazon-sg': {
    name: 'amazon-sg',
    country: 'SG',
    currency: '$',
    storeType: 'marketplace',
    labels: commonLabels.amazon,
  },
  'newegg-sg': {
    name: 'newegg-sg',
    country: 'SG',
    currency: '$',
    storeType: 'standard',
    labels: commonLabels.newegg,
  },
  // Add more Asian stores here
};

/**
 * Registry of stores for specialty products
 */
export const specialtyStores: Record<string, ExtendedStoreOptions> = {
  'nvidia-de': {
    name: 'nvidia-de',
    country: 'DE',
    currency: '€',
    storeType: 'standard',
    labels: {
      inStock: {
        container: '.buy-section',
        text: ['add to cart'],
      },
    },
  },
  'nvidia-fr': {
    name: 'nvidia-fr',
    country: 'FR',
    currency: '€',
    storeType: 'standard',
    labels: {
      inStock: {
        container: '.buy-section',
        text: ['add to cart'],
      },
    },
  },
  'nvidia-gb': {
    name: 'nvidia-gb',
    country: 'UK',
    currency: '£',
    storeType: 'standard',
    labels: {
      inStock: {
        container: '.buy-section',
        text: ['add to cart'],
      },
    },
  },
  // Add more specialty stores here
};
