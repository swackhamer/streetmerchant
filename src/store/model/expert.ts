/**
 * Store configuration for expert
 * Refactored to use factory approach and series-based organization
 */
import {createEuropeanStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Expert store
 */
export const Expert = createEuropeanStore({
  name: 'expert',
  country: 'DE',
  currency: '€',
  labels: {
    inStock: [
      {
        container: 'span.widget-ArticleStatus-buttonText',
        text: ['In den Warenkorb'],
      },
    ],
    maxPrice: {
      container: '.widget-Container-subContent .widget-ArticlePrice-price',
      euroFormat: false,
    },
    outOfStock: [
      {
        container:
          'span[style="font-size: 14pt;"] > span[style="color: #ff5e19;"]',
        text: ['Das von Ihnen ausgewählte Produkt ist ausverkauft'],
      },
      {
        container: 'span.widget-ArticleStatus-statusPointText',
        text: ['Artikel ist derzeit nicht verfügbar'],
      },
    ],
  },
  backoffStatusCodes: [403, 429, 503],

});
