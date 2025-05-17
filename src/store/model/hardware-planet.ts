/**
 * Store configuration for hardware-planet
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * HardwarePlanet store
 */
export const HardwarePlanet = createEuropeanStore({
  name: 'hardware-planet',
  country: 'IT',
  currency: '€',
  labels: {
    inStock: {
      container: '.add >button.add-to-cart',
      text: ['Aggiungi al carrello'],
    },
    maxPrice: {
      container: '..current-price > span',
      euroFormat: true,
    },
    outOfStock: {
      container: '#product-availability',
      text: ['Non disponibile'],
    },
  },
  backoffStatusCodes: [404, 429, 503],

});
