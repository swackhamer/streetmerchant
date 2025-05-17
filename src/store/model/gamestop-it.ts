/**
 * Store configuration for gamestop-it
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * GamestopIt store
 */
export const GamestopIt = createEuropeanStore({
  name: 'gamestop-it',
  country: 'IT',
  currency: '€',
  labels: {
    inStock: {
      container: '#btnAddToCart',
      text: ['Aggiungi al Carrello'],
    },
    maxPrice: {
      container: '.buySection .prodPriceCont',
      euroFormat: true,
    },
    outOfStock: {
      container: '.megaButton .buyDisabled',
      text: ['Esaurito'],
    },
  },

});
