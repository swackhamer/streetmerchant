/**
 * Store configuration for elcorteingles
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Elcorteingles store
 */
export const Elcorteingles = createEuropeanStore({
  name: 'elcorteingles',
  country: 'ES',
  currency: '€',
  labels: {
    // Captcha: {
    // 	container: 'body',
    // 	text: [
    // 		'geben sie die unten angezeigten zeichen ein',
    // 		'geben sie die zeichen unten ein'
    // 	]
    // },
    inStock: [
      {
        container: '.product_detail-purchase.mb-2.c12 .js-add-cart-text',
        text: ['a la cesta'],
      },
    ],
    maxPrice: {
      container: '.product_detail-buy-price-container .price._big',
      euroFormat: true,
    },
    outOfStock: [
      {
        container:
          '.c12.mt-2.product_detail-add_to_cart.one_click_enabled .c12.button._normal.js-buy-button._sold_out.view-page._disabled',
        text: ['Agotado'],
      },
      {
        container:
          '.product_detail-purchase.mb-2.c12 .c12.button._normal.js-buy-button._sold_out.view-page._disabled',
        text: ['No disponible'],
      },
    ],
  },
  backoffStatusCodes: [403, 429, 503],

});
