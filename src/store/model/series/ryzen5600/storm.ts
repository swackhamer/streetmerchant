import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for storm ryzen5600 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5600', [
    {
      model: '5600x',
      url: 'https://www.stormcomputers.com.au/product/amd-ryzen-5-5600x-zen-3-cpu-6c-12t-tdp-65w-boost-up-to-4-6ghz-base-3-7ghz-total-cache-35mb-wraith-stealth-cooler/',
    },
  ]),
];
