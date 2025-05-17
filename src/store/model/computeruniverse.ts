/**
 * Store configuration for computeruniverse
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Computeruniverse store
 */
export const Computeruniverse = createEuropeanStore({
  name: 'computeruniverse',
  country: 'DE',
  currency: '€',
  labels: {
    inStock: {
      container: '.availability',
      text: [
        'bestellartikel',
        'auf lager und sofort lieferbar',
        'kurzfristig verfügbar',
      ],
    },
    maxPrice: {
      container: '.product-price',
      euroFormat: true,
    },
    outOfStock: {
      container: '.availability',
      text: ['nicht verfügbar', 'liefertermin hat erhebliche schwankungen'],
    },
  },
  backoffStatusCodes: [503],

});
