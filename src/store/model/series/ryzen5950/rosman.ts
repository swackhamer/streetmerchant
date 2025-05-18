import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for rosman ryzen5950 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5950', [
    {
      model: '5950x',
      url: 'https://rosmancomputers.com.au/amd-ryzen-9-5950x-16-core-32-threads-max-freq-4-9ghz-72mb-cache-socket-am4-105w-without-cooler/',
    },
  ]),
];
