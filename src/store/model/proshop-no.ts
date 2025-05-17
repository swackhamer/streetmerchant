/**
 * Store configuration for proshop-no
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * ProshopNo store
 */
export const ProshopNo = createStandardStore({
  name: 'proshop-no',
  country: 'NO',
  currency: 'kr.',
  labels: {
    inStock: {
      container:
        '#siteContainer > div.site-container-fullwidth > div > div.row.site-content-table > div.col-sm-9.pull-right > div > div > div > div:nth-child(2) > div.col-xs-12.col-sm-7 > div.row.site-row-margin-top-small > div.col-md-5 > form > button',
      text: ['Kjøp'],
    },
    outOfStock: {
      container: '.site-stock',
      text: ['Bestilt'],
    },
  },

});
