import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for scan ryzen5900 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5900', [
    {
      model: '5900x',
      url: 'https://www.scan.co.uk/products/amd-ryzen-9-5900x-am4-zen-3-12-core-24-thread-37ghz-48ghz-turbo-70mb-cache-pcie-40-105w-cpu',
    },
  ]),
];
