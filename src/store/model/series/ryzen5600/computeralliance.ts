import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for computeralliance ryzen5600 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5600', [
    {
      model: '5600x',
      url: 'https://www.computeralliance.com.au/amd-am4-ryzen-5-5600x-6-core-4.6ghz-cpu-100-100000065box',
    },
  ]),
];
