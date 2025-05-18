/**
 * European store configurations
 */
import {ExtendedStoreOptions} from './types';
import {commonLabels} from '../common/label-sets';

/**
 * Registry of German stores
 */
export const deStores: Record<string, ExtendedStoreOptions> = {
  'amazon-de': {
    name: 'amazon-de',
    country: 'DE',
    currency: '€',
    storeType: 'marketplace',
    labels: commonLabels.amazon,
  },
  'alternate-de': {
    name: 'alternate-de',
    country: 'DE',
    currency: '€',
    storeType: 'european',
    labels: {
      inStock: {
        container: '.stockStatus',
        text: ['auf lager', 'lieferbar']
      },
    },
  },
  'caseking': {
    name: 'caseking',
    country: 'DE',
    currency: '€',
    storeType: 'european',
    labels: {
      inStock: {
        container: '.delivery_container',
        text: ['auf lager', 'verfügbar']
      },
    },
  },
  // Add more German stores here
};

/**
 * Registry of French stores
 */
export const frStores: Record<string, ExtendedStoreOptions> = {
  'amazon-fr': {
    name: 'amazon-fr',
    country: 'FR',
    currency: '€',
    storeType: 'marketplace',
    labels: commonLabels.amazon,
  },
  'ldlc': {
    name: 'ldlc',
    country: 'FR',
    currency: '€',
    storeType: 'european',
    labels: {
      inStock: {
        container: '.stock',
        text: ['stock'],
      },
      maxPrice: {
        container: '.price .price',
        euroFormat: true,
      },
      outOfStock: {
        container: '.stock',
        text: ['rupture'],
      },
    },
  },
  // Add more French stores here
};

/**
 * Registry of other European stores
 */
export const otherEuStores: Record<string, ExtendedStoreOptions> = {
  'amazon-es': {
    name: 'amazon-es',
    country: 'ES',
    currency: '€',
    storeType: 'marketplace',
    labels: commonLabels.amazon,
  },
  'amazon-it': {
    name: 'amazon-it',
    country: 'IT',
    currency: '€',
    storeType: 'marketplace',
    labels: commonLabels.amazon,
  },
  'amazon-nl': {
    name: 'amazon-nl',
    country: 'NL',
    currency: '€',
    storeType: 'marketplace',
    labels: commonLabels.amazon,
  },
  // Add more European stores here
};