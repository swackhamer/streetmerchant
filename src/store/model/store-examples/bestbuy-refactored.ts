/**
 * Example of a refactored store using the factory approach
 * This example shows how to refactor the BestBuy store to reduce duplication
 */
import {createStandardStore} from '../common/store-factory';
import {inStockLabels, outOfStockLabels, pricingLabels} from '../common/label-sets';

/**
 * BestBuy store configuration using the store factory
 * This greatly reduces the amount of code compared to the original implementation
 */
export const BestBuy = createStandardStore({
  name: 'bestbuy',
  country: 'US',
  currency: '$',
  
  // Custom labels for BestBuy-specific selectors
  labels: {
    inStock: {
      container: '.fulfillment-add-to-cart-button',
      text: ['add to cart'],
    },
    outOfStock: {
      container: 'button.c-button.c-button-disabled[data-button-state="SOLD_OUT]',
      text: ['coming soon'],
    },
    maxPrice: pricingLabels.standard,
  },
  
  // BestBuy-specific link filtering (optional)
  seriesLinkOptions: {
    // Example: Only include certain brands for BestBuy
    brands: ['nvidia', 'evga', 'asus', 'msi'],
    
    // Example: Maximum price filtering
    maxPrice: {
      '3080': 999,
      '3090': 1799,
    },
  },
});