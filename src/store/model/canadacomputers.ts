/**
 * Store configuration for canadacomputers
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Canadacomputers store
 */
export const Canadacomputers = createStandardStore({
  name: 'canadacomputers',
  country: 'CA',
  currency: '$',
  labels: {
    inStock: {
      container: 'div[class="pi-prod-availability"]',
      text: ['Online In Stock'],
    },
    maxPrice: {
      container: '.h2-big > strong:nth-child(1)',
      euroFormat: false,
    },
  },

});
