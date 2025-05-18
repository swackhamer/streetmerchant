import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for rosman-melb ryzen5900 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5900', [
    {
      model: '5900x',
      url: 'https://rosmancomputers.com.au/amd-ryzen-9-5900x-12-core-24-threads-max-freq-4-8ghz-70mb-cache-socket-am4-105w-without-cooler-100-100000061wo/',
    },
  ]),
];
