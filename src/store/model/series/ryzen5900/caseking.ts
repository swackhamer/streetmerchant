import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for caseking ryzen5900 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5900', [
    {
      model: '5900x',
      url: 'https://www.caseking.de/amd-ryzen-9-5900x-3-7-ghz-vermeer-am4-boxed-ohne-kuehler-hpam-204.html',
    },
  ]),
];
