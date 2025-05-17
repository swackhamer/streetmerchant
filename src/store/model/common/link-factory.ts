/**
 * Link factory for creating standardized product links
 * This reduces duplication by providing factory methods for common products
 */
import {Link, Brand, Series, Model} from '../store';

/**
 * Options for creating a product link
 */
export interface LinkOptions {
  brand: Brand;
  model: Model | string;
  series: Series;
  url: string;
  cartUrl?: string;
  itemNumber?: string;
  price?: number;
}

/**
 * Creates a product link with the given options
 */
export function createLink(options: LinkOptions): Link {
  return {
    brand: options.brand,
    model: options.model,
    series: options.series,
    url: options.url,
    ...(options.cartUrl ? {cartUrl: options.cartUrl} : {}),
    ...(options.itemNumber ? {itemNumber: options.itemNumber} : {}),
    ...(options.price ? {price: options.price} : {}),
  };
}

/**
 * Creates a set of product links with the same brand and series
 */
export function createBrandSeriesLinks(
  brand: Brand,
  series: Series,
  configs: Array<{
    model: Model | string;
    url: string;
    cartUrl?: string;
    itemNumber?: string;
    price?: number;
  }>
): Link[] {
  return configs.map(config => createLink({
    brand,
    series,
    ...config,
  }));
}

/**
 * Utility for creating NVIDIA Founders Edition links
 */
export function createFoundersEditionLinks(
  series: Series,
  configs: Array<{
    url: string;
    cartUrl?: string;
    itemNumber?: string;
    price?: number;
  }>
): Link[] {
  return createBrandSeriesLinks('nvidia', series, configs.map(config => ({
    model: 'founders edition',
    ...config,
  })));
}

/**
 * Utility for creating AMD reference links
 */
export function createAmdReferenceLinks(
  series: Series,
  configs: Array<{
    url: string;
    cartUrl?: string;
    itemNumber?: string;
    price?: number;
  }>
): Link[] {
  return createBrandSeriesLinks('amd', series, configs.map(config => ({
    model: 'amd reference',
    ...config,
  })));
}

/**
 * Creates a test product link
 */
export function createTestLink(url: string): Link {
  return createLink({
    brand: 'test:brand',
    model: 'test:model',
    series: 'test:series',
    url,
  });
}