import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for computeralliance ryzen5950 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5950', [
    {
      model: '5950x',
      url: 'https://www.computeralliance.com.au/amd-am4-ryzen-9-5950x-16-core-4.9ghz-cpu-no-heatsink-100-100000059wof',
    },
  ]),
];
