/**
 * Store configuration for scan
 * Refactored to use factory approach and series-based organization
 */
import {createStandardStore} from './common/store-factory';
import {Labels} from './store';

/**
 * Scan store
 */
export const Scan = createStandardStore({
  name: 'scan',
  country: 'UK',
  currency: '£',
  labels: {
    captcha: [
      {
        container: '#challenge-form',
        text: ['hcaptcha_submit'],
      },
    ],
    inStock: {
      container: '.product-details .buyButton',
      text: ['add to basket', 'in stock'],
    },
    maxPrice: {
      container: '.product-details .price',
      euroFormat: false, // Note: Scan uses non-euroFromat as price seperator
    },
    outOfStock: {
      container:
        '.product-details .buyButton, .product-details .notification-panel',
      text: ['pre order'],
    },
  },
  disableAdBlocker: true,

});
