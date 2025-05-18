import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for rosman-melb ryzen5600 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5600', [
    {
      model: '5600x',
      url: 'https://rosmancomputers.com.au/amd-ryzen-5-5600x-6-core-12-threads-max-freq-4-6ghz-35mb-cache-socket-am4-105w-with-wraith-stealth-cooler/',
    },
  ]),
];
