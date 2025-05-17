/**
 * Store configuration for wipoid
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Wipoid store
 */
export const Wipoid = createStandardStore({
  name: 'wipoid',
  country: 'ES',
  currency: '$',
  labels: {
    inStock: {
      container: '#add_to_cart',
      text: ['COMPRAR'],
    },
    maxPrice: {
      container: '#our_price_display',
      euroFormat: true,
    },
    outOfStock: {
      container: '.buttons_bottom_block no-print',
      text: ['Avísame cuando esté disponible!'],
    },
  },

});
