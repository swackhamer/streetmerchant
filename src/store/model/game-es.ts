/**
 * Store configuration for game-es
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * GameEs store
 */
export const GameEs = createEuropeanStore({
  name: 'game-es',
  country: 'ES',
  currency: '€',
  labels: {
    inStock: {
      container:
        '#body > div.main.container > div > div > section.right-side.product-quick-actions > div > h4 > span',
      text: ['Comprar'],
    },
    maxPrice: {
      container:
        '#body > div.main.container > div > div > section.right-side.product-quick-actions > div > div',
      euroFormat: true,
    },
    outOfStock: {
      container:
        '#body > div.main.container > div > div > section.right-side.product-quick-actions > div > h4 > span',
      text: ['Agotado'],
    },
  },

});
