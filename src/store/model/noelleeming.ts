/**
 * Store configuration for noelleeming
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Noelleeming store
 */
export const Noelleeming = createStandardStore({
  name: 'noelleeming',
  country: 'NZ',
  currency: '$',
  labels: {
    inStock: [
      {
        container:
          '#bd > div.product__hero > div > div.columns.product__info.medium-6.small-12 > div.product__price-cart.mbs.row > div:nth-child(3) > div > div.product__cta-buttons.columns.small-12 > form > button > strong',
        text: ['Buy Now'],
      },
    ],
  },

});
