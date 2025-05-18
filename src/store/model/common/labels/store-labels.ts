/**
 * Common label configurations for specific stores
 */
import {createLabelSet} from './types';
import {inStockLabels, outOfStockLabels} from './stock-labels';
import {pricingLabels} from './price-labels';
import {bannedSellerLabels} from './seller-labels';
import {captchaLabels} from './captcha-labels';

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
    captcha: captchaLabels.amazon,
  }),

  // Amazon-specific labels (DE)
  amazonDE: createLabelSet({
    inStock: {
      container: '#add-to-cart-button',
      text: ['in den einkaufswagen'],
    },
    outOfStock: [
      {
        container: '#availability',
        text: ['Derzeit nicht verfügbar'],
      },
    ],
    maxPrice: pricingLabels.amazonEuroPrice,
    bannedSeller: bannedSellerLabels.amazonThirdParty,
    captcha: captchaLabels.amazonDE,
  }),

  // Amazon-specific labels (FR)
  amazonFR: createLabelSet({
    inStock: {
      container: '#add-to-cart-button',
      text: ['ajouter au panier'],
    },
    outOfStock: [
      {
        container: '#availability',
        text: ['Actuellement indisponible'],
      },
    ],
    maxPrice: pricingLabels.amazonEuroPrice,
    bannedSeller: bannedSellerLabels.amazonThirdParty,
    captcha: captchaLabels.amazonFR,
  }),

  // Best Buy specific labels
  bestbuy: createLabelSet({
    inStock: inStockLabels.bestbuyAddToCart,
    outOfStock: outOfStockLabels.bestbuyOutOfStock,
    maxPrice: pricingLabels.bestbuyPrice,
  }),

  // Newegg specific labels
  newegg: createLabelSet({
    inStock: inStockLabels.neweggAddToCart,
    outOfStock: outOfStockLabels.neweggOutOfStock,
    maxPrice: pricingLabels.neweggPrice,
  }),
};
