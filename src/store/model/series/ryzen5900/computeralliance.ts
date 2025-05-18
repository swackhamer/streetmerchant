import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for computeralliance ryzen5900 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5900', [
    {
      model: '5900x',
      url: 'https://www.computeralliance.com.au/amd-am4-ryzen-9-5900x-12-core-4.8ghz-cpu-no-heatsink-100-100000061wof',
    },
  ]),
];
