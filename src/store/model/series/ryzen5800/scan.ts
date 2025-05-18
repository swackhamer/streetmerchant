import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for scan ryzen5800 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5800', [
    {
      model: '5800x',
      url: 'https://www.scan.co.uk/products/amd-ryzen-7-5800x-am4-zen-3-8-core-16-thread-38ghz-47ghz-turbo-36mb-cache-pcie-40-105w-cpu',
    },
  ]),
];
