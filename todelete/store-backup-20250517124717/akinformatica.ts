import {Store} from './store';
import {Browser} from 'puppeteer';
import {getSeriesLinks} from './series-links';

/**
 * Store implementation for Akinformatica
 * Using series-based organization for product links
 */
export const Akinformatica: Store = {
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
  links: [], // Start with an empty links array that will be populated dynamically
  name: 'akinformatica',
  country: 'IT',
  successStatusCodes: [[0, 399], 404],
  
  /**
   * Setup action to dynamically load links from series subdirectories
   */
  setupAction: async (browser: Browser) => {
    // Load links for all active series
    Akinformatica.links = await getSeriesLinks('akinformatica');
  }
};
