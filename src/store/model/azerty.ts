/**
 * Store configuration for azerty
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Azerty store
 */
export const Azerty = createEuropeanStore({
  name: 'azerty',
  country: 'NL',
  currency: '€',
  labels: {
    inStock: {
      container: '.orderdelay',
      text: ['Volgende werkdag in huis', '1 werkdag', '2-3 werkdagen'],
    },
    maxPrice: {
      container: '.mod_article .price',
      euroFormat: true,
    },
    outOfStock: {
      container: '.orderdelay',
      text: ['Onbekend', 'meer dan 10 werkdagen', 'Pre-order'],
    },
  },

});
