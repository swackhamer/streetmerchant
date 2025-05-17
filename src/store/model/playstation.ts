/**
 * Store configuration for playstation
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Playstation store
 */
export const Playstation = createStandardStore({
  name: 'playstation',
  country: 'US',
  currency: '$',
  labels: {
    inStock: [
      {
        container: '.productHero-desc .add-to-cart:not(.hide)',
        text: ['Add'],
      },
      {
        container: '.bulleted-info.queue',
        text: ['queue'],
      },
    ],
    outOfStock: {
      container: '.productHero-info .out-stock-wrpr:not(.hide)',
      text: ['Out of Stock'],
    },
  },

});
