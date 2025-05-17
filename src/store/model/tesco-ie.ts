/**
 * Store configuration for tesco-ie
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * TescoIe store
 */
export const TescoIe = createEuropeanStore({
  name: 'tesco-ie',
  country: 'IE',
  currency: '€',
  labels: {
    inStock: {
      container: 'input.submit:nth-child(5)',
      text: ['add'],
    },
    maxPrice: {
      container: '.linePriceAbbr',
    },
    outOfStock: {
      container: '.noStockTxtCentered > strong:nth-child(1)',
      text: ['Sorry, this product is currently not available'],
    },
  },

});
