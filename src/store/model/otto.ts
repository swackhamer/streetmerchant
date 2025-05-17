/**
 * Store configuration for otto
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Otto store
 */
export const Otto = createEuropeanStore({
  name: 'otto',
  country: 'DE',
  currency: '€',
  labels: {
    inStock: [
      {
        container:
          'button.prd_ordering__button.p_btn150--1st.js_product_addToBasket',
        text: ['In den Warenkorb'],
      },
    ],
    maxPrice: {
      container: '#normalPriceAmount',
      euroFormat: true,
    },
    outOfStock: {
      container: 'div.p_message.p_message--hint > strong',
      text: ['Deinen gewünschten Artikel können wir leider nicht mehr liefern'],
    },
  },

});
