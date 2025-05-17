/**
 * Store configuration for dustinhome-no
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * DustinhomeNo store
 */
export const DustinhomeNo = createStandardStore({
  name: 'dustinhome-no',
  country: 'NO',
  currency: 'kr.',
  labels: {
    inStock: {
      container:
        'div.c-product-main-info > div.c-product-buy-wrapper > div.u-pt-16.u-relative.d-flex > div > span',
      text: ['Kan sendes omgående'],
    },
    outOfStock: {
      container:
        'div.c-product-main-info > div.c-product-buy-wrapper > div.u-pt-16.u-relative.d-flex > div > span',
      text: [
        'Vi venter produktet til lager, men har foreløpig ingen bekreftet leveringsdato. Vi sender produktet så snart det er på lager.',
      ],
    },
  },

});
