/**
 * Store configuration for multicom
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Multicom store
 */
export const Multicom = createStandardStore({
  name: 'multicom',
  country: 'NO',
  currency: 'kr.',
  labels: {
    inStock: {
      container:
        '#ctl00_ContentMain_skPC_ctl00_ctl53_ctl02_btnBuy > div:nth-child(1) > span:nth-child(1)',
      text: ['LEGG I HANDLEVOGN'],
    },
    maxPrice: {
      container: '.b-product-price_',
    },
    outOfStock: {
      container: '.stock-notification-btn',
      text: ['MOTTA VARSEL!'],
    },
  },

});
