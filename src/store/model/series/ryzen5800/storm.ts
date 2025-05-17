import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for storm ryzen5800 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5800', [
    {
      model: '5800x',
      url: 'https://www.stormcomputers.com.au/product/amd-ryzen-7-5800x-zen-3-cpu-8c-16t-tdp-105w-boost-up-to-4-7ghz-base-3-8ghz-total-cache-36mb-no-cooler/',
    },
  ]),

];
