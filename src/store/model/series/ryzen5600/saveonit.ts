import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for saveonit ryzen5600 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5600', [
    {
      model: '5600x',
      url: 'https://www.saveonit.com.au/product/amd-ryzen-5-5600x-6-core-3-7-ghz-cpu-100-100000065box',
    },
  ]),
];
