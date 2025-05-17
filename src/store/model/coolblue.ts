/**
 * Store configuration for coolblue
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Coolblue store
 */
export const Coolblue = createEuropeanStore({
  name: 'coolblue',
  country: 'NL',
  currency: '€',
  labels: {
    inStock: {
      container: '.product-order',
      text: ['bestel snel', 'morgen in huis'],
    },
    maxPrice: {
      container: '.js-order-block .sales-price__current',
      euroFormat: true,
    },
    outOfStock: {
      container: '.product-order',
      text: ['binnenkort leverbaar', 'tijdelijk uitverkocht'],
    },
  },

});
