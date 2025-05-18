/**
 * UK store configurations
 */
import {ExtendedStoreOptions} from './types';
import {commonLabels} from '../common/label-sets';

/**
 * Registry of UK stores
 */
export const ukStores: Record<string, ExtendedStoreOptions> = {
  'amazon-uk': {
    name: 'amazon-uk',
    country: 'UK',
    currency: '£',
    storeType: 'marketplace',
    labels: commonLabels.amazon,
  },
  box: {
    name: 'box',
    country: 'UK',
    currency: '£',
    storeType: 'standard',
    labels: {
      inStock: {
        container: '#divBuyButton',
        text: ['add to basket'],
      },
    },
  },
  currys: {
    name: 'currys',
    country: 'UK',
    currency: '£',
    storeType: 'standard',
    labels: {
      inStock: {
        container: '.channels-search-results',
        text: ['add to basket', 'buy'],
      },
    },
  },
  scan: {
    name: 'scan',
    country: 'UK',
    currency: '£',
    storeType: 'standard',
    labels: {
      inStock: [
        {
          container: '#detailsAddToBasket',
          text: ['add to basket'],
        },
        {
          container: '#purchaseRegion',
          text: ['add to basket', 'in stock'],
        },
      ],
    },
  },
  // Add more UK stores here
};
