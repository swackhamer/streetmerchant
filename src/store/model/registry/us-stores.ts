/**
 * United States store configurations
 */
import {ExtendedStoreOptions} from './types';
import {commonLabels} from '../common/label-sets';

/**
 * Registry of US stores
 */
export const usStores: Record<string, ExtendedStoreOptions> = {
  amazon: {
    name: 'amazon',
    country: 'US',
    currency: '$',
    storeType: 'marketplace',
    labels: commonLabels.amazon,
  },
  bestbuy: {
    name: 'bestbuy',
    country: 'US',
    currency: '$',
    storeType: 'standard',
    labels: commonLabels.bestbuy,
  },
  newegg: {
    name: 'newegg',
    country: 'US',
    currency: '$',
    storeType: 'standard',
    labels: commonLabels.newegg,
  },
  antonline: {
    name: 'antonline',
    country: 'US',
    currency: '$',
    storeType: 'standard',
    labels: {
      inStock: {
        container: '.uk-button',
        text: ['Add to Cart'],
      },
      maxPrice: {
        container: '.cPrice',
        euroFormat: false,
      },
      outOfStock: {
        container: '.priceView-price .priceView-hero-price span',
        text: ['Sold Out'],
      },
    },
  },
  microcenter: {
    name: 'microcenter',
    country: 'US',
    currency: '$',
    storeType: 'standard',
    labels: {
      inStock: {
        container: '#cart-options',
        text: ['in stock'],
      },
      maxPrice: {
        container: 'span.price-label',
      },
    },
  },
  adorama: {
    name: 'adorama',
    country: 'US',
    currency: '$',
    storeType: 'standard',
    labels: {
      inStock: {
        container: '.buy-section',
        text: ['add to cart'],
      },
    },
  },
  amd: {
    name: 'amd',
    country: 'US',
    currency: '$',
    storeType: 'standard',
    labels: {
      inStock: {
        container: '.product-page-description',
        text: ['add to cart'],
      },
    },
  },
  bandh: {
    name: 'bandh',
    country: 'US',
    currency: '$',
    storeType: 'standard',
    labels: {
      inStock: {
        container: '.purchase-wrap',
        text: ['add to cart'],
      },
    },
  },
  corsair: {
    name: 'corsair',
    country: 'US',
    currency: '$',
    storeType: 'standard',
    labels: {
      inStock: {
        container: '.product-details-page',
        text: ['add to cart'],
      },
    },
  },
  evga: {
    name: 'evga',
    country: 'US',
    currency: '$',
    storeType: 'standard',
    labels: {
      inStock: {
        container: '.product-buy',
        text: ['add to cart'],
      },
    },
  },
  gamestop: {
    name: 'gamestop',
    country: 'US',
    currency: '$',
    storeType: 'standard',
    labels: {
      inStock: {
        container: '.add-to-cart-buttons',
        text: ['add to cart'],
      },
    },
  },
  microsoft: {
    name: 'microsoft',
    country: 'US',
    currency: '$',
    storeType: 'standard',
    labels: {
      inStock: {
        container: '.purchase-button-container',
        text: ['add to cart'],
      },
    },
  },
  officedepot: {
    name: 'officedepot',
    country: 'US',
    currency: '$',
    storeType: 'standard',
    labels: {
      inStock: {
        container: '.buybox__actions',
        text: ['add to cart'],
      },
    },
  },
  pny: {
    name: 'pny',
    country: 'US',
    currency: '$',
    storeType: 'standard',
    labels: {
      inStock: {
        container: '.product-info-main',
        text: ['add to cart'],
      },
    },
  },
  target: {
    name: 'target',
    country: 'US',
    currency: '$',
    storeType: 'standard',
    labels: {
      inStock: {
        container: '.styles__ButtonsWrapper-sc-17dxxwu-11',
        text: ['add to cart'],
      },
    },
  },
  toysrus: {
    name: 'toysrus',
    country: 'US',
    currency: '$',
    storeType: 'standard',
    labels: {
      inStock: {
        container: '.product-detail-page',
        text: ['add to cart'],
      },
    },
  },
  walmart: {
    name: 'walmart',
    country: 'US',
    currency: '$',
    storeType: 'standard',
    labels: {
      inStock: {
        container: '.add-to-cart-container',
        text: ['add to cart'],
      },
    },
  },
  xbox: {
    name: 'xbox',
    country: 'US',
    currency: '$',
    storeType: 'standard',
    labels: {
      inStock: {
        container: '.product-details-hero',
        text: ['add to cart'],
      },
    },
  },
};
