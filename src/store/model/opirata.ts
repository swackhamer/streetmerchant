/**
 * Store configuration for opirata
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Opirata store
 */
export const Opirata = createEuropeanStore({
  name: 'opirata',
  country: 'ES',
  currency: '€',
  labels: {
    inStock: {
      container:
        '#app > div.wrapper-container.full > div.container.list > div.row.less-gutters > div:nth-child(2) > div > div:nth-child(2) > div > form > div:nth-child(4) > div.col-12.text-right > button',
      text: ['Comprar'],
    },
    maxPrice: {
      container:
        '#app > div.wrapper-container.full > div.container.list > div.row.less-gutters > div:nth-child(2) > div > div:nth-child(2) > div > form > div.row.info-details-buy > div.col-12.col-md-6.product-price.text-right > div:nth-child(1) > div > h3',
      euroFormat: false,
    },
    outOfStock: {
      container:
        '#app > div.wrapper-container.full > div.container.list > div.row.less-gutters > div:nth-child(2) > div > div:nth-child(2) > div > form > div:nth-child(4) > div.col-12.text-right > button',
      text: ['Avísame'],
    },
  },

});
