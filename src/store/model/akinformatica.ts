/**
 * Store configuration for akinformatica
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Akinformatica store
 */
export const Akinformatica = createEuropeanStore({
  name: 'akinformatica',
  country: 'IT',
  currency: '€',
  labels: {
    inStock: [
      {
        container: '#dispOnLine .available',
        text: ['Disponibile Online'],
      },
      {
        container: '#addCartLinkButton',
        text: ['Aggiungi al carrello'],
      },
    ],
    maxPrice: {
      container: '#PrezzoListinoIvatoLabel',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: '#dispOnLine .available .disabled',
        text: ['Disponibile Online'],
      },
      {
        container: '#preOrderPanel > label',
        text: ['PRE-ORDINI APERTI'],
      },
    ],
  },
  successStatusCodes: [[0, 399]]
});
