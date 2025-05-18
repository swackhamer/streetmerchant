import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for msy ryzen5950 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5950', [
    {
      model: '5950x',
      url: 'https://www.msy.com.au/amd-ryzen-9-5950x-100-100000059wof-up-to-49ghz-base-clock-34ghzam416-cores32-threads8mb105w-unlocked-boxed-cpu-without-cpu-cooler',
    },
  ]),
];
