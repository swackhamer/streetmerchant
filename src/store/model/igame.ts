/**
 * Store configuration for igame
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Igame store
 */
export const Igame = createStandardStore({
  name: 'igame',
  country: 'AU',
  currency: '$',
  labels: {
    inStock: {
      container:
        'div.product-form__controls-group.product-form__controls-group--submit > div > button',
      text: ['ADD TO CART'],
    },
    maxPrice: {
      container: 'div.price__pricing-group > div.price__regular > dd > span',
      euroFormat: false,
    },
    outOfStock: {
      container:
        '#product_form_6084255350971 > div.product-form__controls-group.product-form__controls-group--submit > div > button',
      text: ['SOLD OUT'],
    },
  },
  backoffStatusCodes: [403, 429],

});
