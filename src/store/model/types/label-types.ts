/**
 * Label-related type definitions
 */
import {Element, Pricing} from './basic-types';

/**
 * Query structure for labels
 */
export type LabelQuery = Element[] | Element | string[];

/**
 * Labels configuration for identifying product status
 */
export type Labels = {
  bannedSeller?: LabelQuery;
  captcha?: LabelQuery;
  captchaHandler?: CaptchaHandlerElements;
  container?: string;
  inStock?: LabelQuery;
  outOfStock?: LabelQuery;
  maxPrice?: Pricing;
};

/**
 * Captcha handler element selectors
 */
export type CaptchaHandlerElements = {
  challenge: string;
  input: string;
  submit: string;
  captureType?: string;
};

/**
 * Captcha deterrent configuration
 */
export type CaptchaDeterrent = {
  hardLinks?: string[];
  searchUrl?: string;
  searchTerms?: string[];
};