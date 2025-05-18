import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for caseking ryzen5800 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5800', [
    {
      model: '5800x',
      url: 'https://www.caseking.de/amd-ryzen-7-5800x-3-8-ghz-vermeer-am4-boxed-ohne-kuehler-hpam-203.html',
    },
  ]),
];
