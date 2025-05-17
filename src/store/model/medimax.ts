/**
 * Store configuration for medimax
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Medimax store
 */
export const Medimax = createEuropeanStore({
  name: 'medimax',
  country: 'DE',
  currency: '€',
  labels: {
    inStock: [
      {
        container: '.product-cart-add-to-cart-button',
        text: ['In den Warenkorb'],
      },
      {
        container: '.stock-message',
        text: ['Lieferung in'],
      },
    ],
    maxPrice: {
      container: '.priceOfProduct',
      euroFormat: true,
    },
    outOfStock: {
      container: '.content .large',
      text: ['Ihr MEDIMAX Team'],
    },
  },

});
