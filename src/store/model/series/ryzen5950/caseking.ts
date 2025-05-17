import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for caseking ryzen5950 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5950', [
    {
      model: '5950x',
      url: 'https://www.caseking.de/amd-ryzen-9-5950x-3-4-ghz-vermeer-am4-boxed-ohne-kuehler-hpam-205.html',
    },
  ]),

];
