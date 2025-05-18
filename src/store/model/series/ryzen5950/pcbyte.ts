import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for pcbyte ryzen5950 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5950', [
    {
      model: '5950x',
      url: 'https://www.pcbyte.com.au/store/product/amd-ryzen-9-5950x-16-core-32-threads-3-4-4-9ghz-am4-cpu-processor-100-100000059wof-61095?search=5950x',
    },
  ]),
];
