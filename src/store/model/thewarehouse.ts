/**
 * Store configuration for thewarehouse
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Thewarehouse store
 */
export const Thewarehouse = createStandardStore({
  name: 'thewarehouse',
  country: 'NZ',
  currency: '$',
  labels: {
    outOfStock: {
      container:
        '#maincontent > div.container.product-detail.product-wrapper.pb-xl.pb-lg-xxxl > div > div:nth-child(2) > div.col-12.col-md-6.col-lg-5 > div > div.product-buying-box > div.cart-and-ipay.mt-md > div > div > button:disabled',
      text: ['Add to Cart'],
    },
  },

});
