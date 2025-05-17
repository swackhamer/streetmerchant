/**
 * Common label sets for store configurations
 * This file contains reusable label configurations to reduce duplication across store files
 */
import {Labels, LabelQuery} from '../../store';

/**
 * Standard in-stock label patterns by category
 */
export const inStockLabels = {
  // Common patterns for add to cart buttons
  addToCart: {
    container: '.add-to-cart',
    text: ['add to cart', 'add to bag', 'buy now'],
  },
  // Patterns for availability messages
  available: {
    container: '.availability',
    text: ['in stock', 'available', 'in store'],
  },
  // Patterns for button states
  buttonEnabled: {
    container: 'button:not([disabled])',
    text: ['add to cart', 'buy now'],
  },
};

/**
 * Standard out-of-stock label patterns by category
 */
export const outOfStockLabels = {
  // Common out of stock messages
  standard: {
    container: '.availability',
    text: ['out of stock', 'sold out', 'unavailable'],
  },
  // Pre-order patterns
  preOrder: {
    container: '.availability',
    text: ['pre-order', 'coming soon', 'notify me'],
  },
  // Button states indicating out of stock
  buttonDisabled: {
    container: 'button[disabled]',
    text: ['add to cart', 'buy now'],
  },
};

/**
 * Common price selector patterns
 */
export const pricingLabels = {
  // Standard price containers
  standard: {
    container: '.price',
    euroFormat: false,
  },
  // Euro-formatted prices
  euro: {
    container: '.price',
    euroFormat: true,
  },
  // Sale prices
  sale: {
    container: '.sale-price',
    euroFormat: false,
  },
};

/**
 * Common banned seller patterns
 */
export const bannedSellerLabels = {
  // Third-party sellers
  thirdParty: {
    container: '.seller-info',
    text: ['third party', 'marketplace', 'sold by'],
  },
};

/**
 * Creates a complete label set using common configurations
 */
export function createLabelSet(options: {
  inStock?: LabelQuery | LabelQuery[];
  outOfStock?: LabelQuery | LabelQuery[];
  maxPrice?: {
    container: string;
    euroFormat?: boolean;
  };
  bannedSeller?: LabelQuery | LabelQuery[];
  captcha?: LabelQuery | LabelQuery[];
}): Labels {
  return options;
}

/**
 * Common label configurations for different store types
 */
export const commonLabels = {
  // Standard e-commerce labels
  standard: createLabelSet({
    inStock: inStockLabels.addToCart,
    outOfStock: outOfStockLabels.standard,
    maxPrice: pricingLabels.standard,
  }),
  
  // European store labels
  european: createLabelSet({
    inStock: inStockLabels.addToCart,
    outOfStock: outOfStockLabels.standard,
    maxPrice: pricingLabels.euro,
  }),
  
  // Marketplace with third-party sellers
  marketplace: createLabelSet({
    inStock: inStockLabels.addToCart,
    outOfStock: outOfStockLabels.standard,
    maxPrice: pricingLabels.standard,
    bannedSeller: bannedSellerLabels.thirdParty,
  }),
};