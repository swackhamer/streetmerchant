/**
 * Store configuration for microcenter
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Microcenter store
 */
export const Microcenter = createStandardStore({
  name: 'microcenter',
  country: 'US',
  currency: '$',
  labels: {
    inStock: {
      container: '#inventory-qty',
      text: ['IN STOCK']
    },
    outOfStock: {
      container: '#inventory-qty',
      text: ['SOLD OUT']
    }
  }
});
