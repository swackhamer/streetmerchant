/**
 * Store configuration for bpmpower
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Bpmpower store
 */
export const Bpmpower = createEuropeanStore({
  name: 'bpmpower',
  country: 'IT',
  currency: '€',
  labels: {
    inStock: {
      container: '.dispoSiProd >span',
      text: ['Disponibile'],
    },
    maxPrice: {
      container: 'p.prezzoScheda:nth-child(1)',
      euroFormat: true,
    },
    outOfStock: {
      container: '.dispoSiProd >span',
      text: ['Esaurito'],
    },
  },

});
