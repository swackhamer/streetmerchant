import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for msy ryzen5800 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5800', [
    {
      model: '5800x',
      url: 'https://www.msy.com.au/amd-ryzen-7-5800x-100-100000063wof-up-to-47ghz-base-clock-38ghzam48-cores16-threads32mb105w-unlocked-boxed-cpu-without-cpu-cooler',
    },
  ]),
];
