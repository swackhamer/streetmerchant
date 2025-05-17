/**
 * Store configuration for argos-ie
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * ArgosIe store
 */
export const ArgosIe = createEuropeanStore({
  name: 'argos-ie',
  country: 'IE',
  currency: '€',
  labels: {
    inStock: {
      container: '.btnbuyreserve',
      text: ['buy or reserve'],
    },
    maxPrice: {
      container: '.price',
    },
    outOfStock: {
      container: '#subCopy',
      text: ["We're working hard to get more stock."],
    },
  },

});
