/**
 * Canadian store configurations
 */
import {ExtendedStoreOptions} from './types';
import {commonLabels} from '../common/label-sets';

/**
 * Registry of Canadian stores
 */
export const caStores: Record<string, ExtendedStoreOptions> = {
  'amazon-ca': {
    name: 'amazon-ca',
    country: 'CA',
    currency: '$',
    storeType: 'marketplace',
    labels: commonLabels.amazon,
  },
  'bestbuy-ca': {
    name: 'bestbuy-ca',
    country: 'CA',
    currency: '$',
    storeType: 'standard',
    labels: commonLabels.bestbuy,
  },
  'newegg-ca': {
    name: 'newegg-ca',
    country: 'CA',
    currency: '$',
    storeType: 'standard',
    labels: commonLabels.newegg,
  },
  'canadacomputers': {
    name: 'canadacomputers',
    country: 'CA',
    currency: '$',
    storeType: 'standard',
    labels: {
      inStock: {
        container: '.pi-prod-availability',
        text: ['online in stock']
      },
    },
  },
  'memoryexpress': {
    name: 'memoryexpress',
    country: 'CA',
    currency: '$',
    storeType: 'standard',
    labels: {
      inStock: {
        container: '.c-capr-inventory-selector__details-online',
        text: ['in stock']
      },
    },
  },
  // Add more Canadian stores here
};