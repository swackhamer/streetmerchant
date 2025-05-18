import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for caseking ryzen5600 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5600', [
    {
      model: '5600x',
      url: 'https://www.caseking.de/amd-ryzen-5-5600x-3-7-ghz-vermeer-am4-mit-amd-wraith-stealth-kuehler-hpam-202.html',
    },
  ]),
];
