/**
 * Common label sets for store configurations
 * This file contains reusable label configurations to reduce duplication across store files
 */
import {Labels, LabelQuery} from '../store';

/**
 * Standard in-stock label patterns by category
 */
export const inStockLabels = {
  // Common patterns for add to cart buttons
  addToCart: {
    container: '.add-to-cart',
    text: ['add to cart', 'add to bag', 'buy now'],
  },
  amazonAddToCart: {
    container: '#add-to-cart-button',
    text: ['add to cart'],
  },
  bestbuyAddToCart: {
    container: '.add-to-cart-button',
    text: ['add to cart']
  },
  neweggAddToCart: {
    container: '.product-buy',
    text: ['add to cart']
  },
  // European variations
  euroAddToCart: {
    container: '.add-to-cart',
    text: ['add to basket', 'add to cart', 'in den warenkorb', 'ajouter au panier', 'añadir a la cesta']
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
  amazonOutOfStock: [
    {
      container: '#availability',
      text: ['currently unavailable']
    },
    {
      container: '#outOfStock',
      text: ['unavailable']
    }
  ],
  bestbuyOutOfStock: {
    container: '.add-to-cart-button',
    text: ['sold out']
  },
  neweggOutOfStock: {
    container: '.product-inventory',
    text: ['out of stock']
  },
  // European variations
  euroOutOfStock: {
    container: '.availability',
    text: ['out of stock', 'sold out', 'ausverkauft', 'en rupture', 'agotado', 'non disponibile']
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
  amazonPrice: {
    container: '#priceblock_ourprice',
    euroFormat: false
  },
  bestbuyPrice: {
    container: '.priceView-customer-price span',
    euroFormat: false
  },
  neweggPrice: {
    container: '.price-current',
    euroFormat: false
  },
  // Euro-formatted prices
  euro: {
    container: '.price',
    euroFormat: true,
  },
  amazonEuroPrice: {
    container: '#priceblock_ourprice',
    euroFormat: true
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
  amazonThirdParty: {
    container: '#merchant-info',
    text: ['japan import', 'third party']
  },
};

/**
 * Common captcha detection patterns
 */
export const captchaLabels = {
  amazon: {
    container: 'body',
    text: ['enter the characters you see below']
  },
  amazonDE: {
    container: 'body',
    text: ['geben sie die zeichen']
  },
  amazonFR: {
    container: 'body',
    text: ['entrez les caractères']
  },
};

/**
 * Creates a complete label set using common configurations
 */
export function createLabelSet(options: {
  inStock?: LabelQuery;
  outOfStock?: LabelQuery;
  maxPrice?: {
    container: string;
    euroFormat?: boolean;
  };
  bannedSeller?: LabelQuery;
  captcha?: LabelQuery;
  container?: string;
  captchaHandler?: {
    challenge: string;
    input: string;
    submit: string;
    captureType?: string;
  };
}): Labels {
  return options as Labels;
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
    inStock: inStockLabels.euroAddToCart,
    outOfStock: outOfStockLabels.euroOutOfStock,
    maxPrice: pricingLabels.euro,
  }),
  
  // Marketplace with third-party sellers
  marketplace: createLabelSet({
    inStock: inStockLabels.addToCart,
    outOfStock: outOfStockLabels.standard,
    maxPrice: pricingLabels.standard,
    bannedSeller: bannedSellerLabels.thirdParty,
  }),

  // Amazon-specific labels (US)
  amazon: createLabelSet({
    inStock: inStockLabels.amazonAddToCart,
    outOfStock: outOfStockLabels.amazonOutOfStock,
    maxPrice: pricingLabels.amazonPrice,
    bannedSeller: bannedSellerLabels.amazonThirdParty,
    captcha: captchaLabels.amazon
  }),

  // Amazon-specific labels (DE)
  amazonDE: createLabelSet({
    inStock: {
      container: '#add-to-cart-button',
      text: ['in den einkaufswagen']
    },
    outOfStock: [{
      container: '#availability',
      text: ['Derzeit nicht verfügbar']
    }],
    maxPrice: pricingLabels.amazonEuroPrice,
    bannedSeller: bannedSellerLabels.amazonThirdParty,
    captcha: captchaLabels.amazonDE
  }),

  // Amazon-specific labels (FR)
  amazonFR: createLabelSet({
    inStock: {
      container: '#add-to-cart-button',
      text: ['ajouter au panier']
    },
    outOfStock: [{
      container: '#availability',
      text: ['Actuellement indisponible']
    }],
    maxPrice: pricingLabels.amazonEuroPrice,
    bannedSeller: bannedSellerLabels.amazonThirdParty,
    captcha: captchaLabels.amazonFR
  }),

  // Best Buy specific labels
  bestbuy: createLabelSet({
    inStock: inStockLabels.bestbuyAddToCart,
    outOfStock: outOfStockLabels.bestbuyOutOfStock,
    maxPrice: pricingLabels.bestbuyPrice
  }),

  // Newegg specific labels
  newegg: createLabelSet({
    inStock: inStockLabels.neweggAddToCart,
    outOfStock: outOfStockLabels.neweggOutOfStock,
    maxPrice: pricingLabels.neweggPrice
  })
};