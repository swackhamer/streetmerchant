/**
 * Store configuration for cyberport
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Cyberport store
 */
export const Cyberport = createEuropeanStore({
  name: 'cyberport',
  country: 'DE',
  currency: '€',
  labels: {
    inStock: {
      container: '.tooltipAvailabilityParent',
      text: ['sofort verfügbar'],
    },
    maxPrice: {
      container: '#productDetailOverview .price',
      euroFormat: true,
    },
    outOfStock: {
      container: '.tooltipAvailabilityParent',
      text: ['noch nicht verfügbar'],
    },
  },

});
