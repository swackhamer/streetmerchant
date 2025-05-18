import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for storm ryzen5900 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5900', [
    {
      model: '5900x',
      url: 'https://www.stormcomputers.com.au/product/amd-ryzen-9-5900x-zen-3-cpu-12c-24t-tdp-105w-boost-up-to-4-8ghz-base-3-7ghz-total-cache-70mb-no-cooler/',
    },
  ]),
];
