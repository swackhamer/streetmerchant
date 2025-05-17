/**
 * Link type definitions for store models
 */
import {Browser, PuppeteerLifeCycleEvent} from 'puppeteer';
import {LinksBuilderBuilder} from '../helpers/card';
import {Brand, Series} from './product-types';
import {Model} from './model-types';
import {Labels} from './label-types';

/**
 * Link structure for product URLs
 */
export type Link = {
  brand: Brand;
  cartUrl?: string;
  itemNumber?: string;
  labels?: Labels;
  model: Model | string; // Allow string for backward compatibility
  openCartAction?: (browser: Browser) => Promise<string>;
  price?: number | null;
  series: Series;
  screenshot?: string;
  url: string;
};

/**
 * Definition for link templates to generate dynamic links
 */
export type LinkTemplate = {
  url: string;
  placeholders?: {
    brand?: boolean;
    model?: boolean;
    series?: boolean;
    itemId?: boolean;
  };
  itemIds?: Record<string, string>;
};

/**
 * Links builder configuration
 */
export type LinksBuilder = {
  builder: LinksBuilderBuilder;
  ttl?: number;
  waitUntil?: PuppeteerLifeCycleEvent;
  waitForSelector?: string;
  urls: Array<{series: Series; url: string | string[]}>;
};