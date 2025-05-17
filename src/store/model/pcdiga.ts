/**
 * Store configuration for pcdiga
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Pcdiga store
 */
export const Pcdiga = createEuropeanStore({
  name: 'pcdiga',
  country: 'PT',
  currency: '€',
  labels: {
    inStock: {
      container: '#product-addtocart-button > span',
      text: ['Adicionar ao carrinho'],
    },
    outOfStock: {
      container: 'div[id="skrey_estimate_date_product_page_wrapper"]',
      text: ['Sem stock'],
    },
    maxPrice: {
      container: '.price-container.price-final_price > .price-wrapper > span',
      euroFormat: true,
    },
  },

});
