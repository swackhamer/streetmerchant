import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for pcbyte ryzen5900 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5900', [
    {
      model: '5900x',
      url: 'https://www.pcbyte.com.au/store/product/amd-ryzen-9-5900x-12-core-24-threads-3-7-4-8ghz-am4-cpu-processor-100-100000061wof-61096?search=5900x',
    },
  ]),
];
