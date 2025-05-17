/**
 * Store configuration for novoatalho
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Novoatalho store
 */
export const Novoatalho = createEuropeanStore({
  name: 'novoatalho',
  country: 'PT',
  currency: '€',
  labels: {
    inStock: {
      container:
        'div.line > div.pull-left > div.stockpadding > span.stock > b > a',
      text: ['DISPONÍVEL', 'POUCAS UNIDADES'],
    },
    outOfStock: {
      container:
        'div.line > div.pull-left > div.stockpadding > span.stock > b > a',
      text: ['INDISPONÍVEL'],
    },
    maxPrice: {
      container:
        'div.line > div.pull-right > div.text-right > span.product-price',
      euroFormat: true,
    },
  },

});
