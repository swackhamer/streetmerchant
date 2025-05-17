/**
 * Store configuration for power-no
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * PowerNo store
 */
export const PowerNo = createStandardStore({
  name: 'power-no',
  country: 'NO',
  currency: 'kr.',
  labels: {
    inStock: {
      container:
        '#product-intro > div.container.old-product-page.ng-star-inserted > div > div > div.col-md-7 > div > div.product-control > div.buy-area.ng-star-inserted > div.buy-area__webshop > button',
      text: ['Legg til handlekurv'],
    },
    outOfStock: {
      container:
        '#product-intro > div.container.old-product-page.ng-star-inserted > div > div > div.col-md-7 > div > div.product-control > div.buy-area.ng-star-inserted > div > button',
      text: ['Ikke på lager'],
    },
  },

});
