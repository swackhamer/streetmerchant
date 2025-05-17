/**
 * Store configuration for netonnet-no
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * NetonnetNo store
 */
export const NetonnetNo = createStandardStore({
  name: 'netonnet-no',
  country: 'NO',
  currency: 'kr.',
  labels: {
    inStock: {
      container: '[id^="BuyButton_ProductPageStandard_"]',
      text: ['Legg i handlevogn'],
    },
    maxPrice: {
      container: '.price-big',
    },
    outOfStock: {
      container: '[id^="BuyButton_ProductPageStandard_"]',
      text: ['Overvåk produktet'],
    },
  },

});
