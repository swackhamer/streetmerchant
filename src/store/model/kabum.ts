/**
 * Store configuration for kabum
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Kabum store
 */
export const Kabum = createStandardStore({
  name: 'kabum',
  country: 'BR',
  currency: 'R$',
  labels: {
    inStock: {
      container: '.botao-comprar',
      text: ['comprar'],
    },
    outOfStock: {
      container: '.bot_comprar',
      text: ['indisponível'],
    },
  },

});
