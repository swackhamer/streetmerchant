/**
 * Store configuration for proshop-de
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * ProshopDe store
 */
export const ProshopDe = createEuropeanStore({
  name: 'proshop-de',
  country: 'DE',
  currency: '€',
  labels: {
    inStock: {
      container: 'button[data-form-action="addToBasket"]',
      text: ['bestellen'],
    },
    maxPrice: {
      container:
        '.site-currency-wrapper > span[class="site-currency-attention"]',
      euroFormat: true,
    },
    outOfStock: {
      container: '.site-currency-attention',
      text: ['Die Ware ist leider nicht mehr verfügbar.'],
    },
  },

});
