/**
 * Store configuration for arlt
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Arlt store
 */
export const Arlt = createEuropeanStore({
  name: 'arlt',
  country: 'DE',
  currency: '€',
  labels: {
    inStock: {
      container: '.articleDesc .shippingtext',
      text: ['auf Lager', 'Lieferzeit 2-3 Werktage', 'Ware im Zulauf'],
    },
    maxPrice: {
      container: '.articleprice .price',
      euroFormat: true,
    },
    outOfStock: {
      container: '.articleDesc .shippingtext',
      text: ['Neuer Artikel in Kürze verfügbar', 'Liefertermin unbekannt'],
    },
  },

});
