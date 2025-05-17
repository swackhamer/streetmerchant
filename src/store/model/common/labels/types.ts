/**
 * Label types and interfaces
 */
import {Labels, LabelQuery} from '../../store';

/**
 * Options for creating label sets
 */
export interface LabelSetOptions {
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
}

/**
 * Creates a complete label set using provided options
 */
export function createLabelSet(options: LabelSetOptions): Labels {
  return options as Labels;
}