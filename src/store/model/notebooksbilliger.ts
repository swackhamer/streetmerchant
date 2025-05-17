/**
 * Store configuration for notebooksbilliger
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Notebooksbilliger store
 */
export const Notebooksbilliger = createEuropeanStore({
  name: 'notebooksbilliger',
  country: 'DE',
  currency: '€',
  labels: {
    inStock: {
      container: '.warehouse',
      text: [
        'sofort ab lager',
        'verfügbarkeit: ca. 2-4 werktage',
        'verfügbarkeit: ca. 5-10 werktage',
      ],
    },
    maxPrice: {
      container:
        'form[name="cart_quantity"]  span[class*="product-price__regular"]',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: '.warehouse',
        text: ['liefertermin noch unbestimmt'],
      },
      {
        container: '.soldOut',
        text: ['dieses produkt ist leider ausverkauft.'],
      },
      {
        container: '.just_inStore',
        text: [
          'dieses Produkt kann nur in unseren unten genannten Stores gekauft werden.',
        ],
      },
      {
        container: '#product_error_text',
        text: ['leider ist dieser artikel nicht mehr verfügbar.'],
      },
    ],
  },

});
