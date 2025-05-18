/**
 * Common label sets for store configurations
 *
 * This file is now a thin wrapper around the modular label system
 * for backward compatibility.
 */
import {Labels, LabelQuery} from '../store';

// Re-export all components from the modular implementation
export {
  inStockLabels,
  outOfStockLabels,
  pricingLabels,
  bannedSellerLabels,
  captchaLabels,
  createLabelSet,
  commonLabels,
} from './labels';
