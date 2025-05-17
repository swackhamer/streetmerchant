/**
 * Store configuration for harveynorman-ie
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * HarveynormanIe store
 */
export const HarveynormanIe = createEuropeanStore({
  name: 'harveynorman-ie',
  country: 'IE',
  currency: '€',
  labels: {
    inStock: {
      container: 'input.btn-action',
      text: ['add to cart'],
    },
    maxPrice: {
      container: '.price',
      euroFormat: false,
    },
    outOfStock: {
      container: '.product-highlight-text',
      text: ['SOLD OUT! WATCH THIS SPACE FOR MORE INFORMATION'],
    },
  },

});
