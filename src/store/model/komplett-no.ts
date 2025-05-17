/**
 * Store configuration for komplett-no
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * KomplettNo store
 */
export const KomplettNo = createStandardStore({
  name: 'komplett-no',
  country: 'NO',
  currency: 'kr.',
  labels: {
    inStock: {
      container:
        '#MainContent > div.no-bs-center.maincontent-container.container.main-body.ignore-gutter-xs.product-page-boxes > div.responsive-content-wrapper > div.product-page > section > div > section > div.product-main-info__body > div.product-main-info__buy-and-more > div.buy-button-section > div > div > div.product-main-info-buy-button > div.buy-button > button',
      text: ['LEGG I HANDLEVOGN'],
    },
    outOfStock: {
      container:
        '#MainContent > div.no-bs-center.maincontent-container.container.main-body.ignore-gutter-xs.product-page-boxes > div.responsive-content-wrapper > div.product-page > section > div > section > div.product-main-info__body > div.product-main-info__buy-and-more > div.buy-button-section > div > div > div.subscribe-product-container > div > div > button',
      text: ['MOTTA VARSEL'],
    },
  },

});
