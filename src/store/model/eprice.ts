/**
 * Store configuration for eprice
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Eprice store
 */
export const Eprice = createEuropeanStore({
  name: 'eprice',
  country: 'IT',
  currency: '€',
  labels: {
    inStock: {
      container: '.topSideDx',
      text: ['disponibile', 'pochi pezzi'],
    },
    maxPrice: {
      container: '#PrezzoClasic span[class*="big"]',
      euroFormat: true,
    },
    outOfStock: {
      container: '.dispo',
      text: ['ESAURITO O FUORI PROD.'],
    },
  },

});
