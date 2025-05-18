import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for scan ryzen9950x3d series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen9950x3d', [
    {
      model: '9950x3d',
      url: 'https://www.scan.co.uk/products/amd-ryzen-9-9950x3d-am5-zen-5-16-core-32-threads-43ghz-57ghz-turbo-144mb-cache-pcie-50-170w-cpu',
    },
  ]),
];
