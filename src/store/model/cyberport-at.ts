/**
 * Store configuration for cyberport-at
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * CyberportAt store
 */
export const CyberportAt = createEuropeanStore({
  name: 'cyberport-at',
  country: 'AT',
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
