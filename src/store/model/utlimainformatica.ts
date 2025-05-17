/**
 * Store configuration for utlimainformatica
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Utlimainformatica store
 */
export const Utlimainformatica = createEuropeanStore({
  name: 'utlimainformatica',
  country: 'ES',
  currency: '€',
  labels: {
    inStock: {
      container:
        '#add-to-cart-or-refresh > div.product_header_container.pt-3 > div.product-prices > div:nth-child(2) > div > div.p-add-to-cart > div.product-add-to-cart > div > div.col.col-12.col-sm-auto.addMobileFixed > div > button',
      text: ['Añadir al carrito'],
    },
    maxPrice: {
      container:
        '#add-to-cart-or-refresh > div.product_header_container.pt-3 > div.product-prices > div:nth-child(2) > div > span',
      euroFormat: true,
    },
    outOfStock: {
      container:
        '#add-to-cart-or-refresh > div.product_header_container.pt-3 > div.product-prices > div:nth-child(2) > div > div.p-add-to-cart > div.product-add-to-cart > div > div.col.col-12.col-sm-auto.addMobileFixed > div > button',
      text: ['Avísame cuando esté disponible de nuevo'],
    },
  },

});
