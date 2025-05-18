import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for msy ryzen5600 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5600', [
    {
      model: '5600x',
      url: 'https://www.msy.com.au/amd-ryzen-5-5600x-100-100000065box-up-to-46ghz-base-clock-37ghzam46-cores12-threads32mb65w-unlocked-boxed-cpu-without-cpu-cooler',
    },
  ]),
];
