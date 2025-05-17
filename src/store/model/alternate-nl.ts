/**
 * Store configuration for alternate-nl
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * AlternateNl store
 */
export const AlternateNl = createEuropeanStore({
  name: 'alternate-nl',
  country: 'NL',
  currency: '€',
  labels: {
    inStock: {
      container: '.stockStatus',
      text: ['Direct leverbaar'],
    },
    maxPrice: {
      container: 'div.price > span',
      euroFormat: true,
    },
    outOfStock: {
      container: '.stockStatus',
      text: ['Levertermijn onbekend', 'pre-order'],
    },
  },

});
