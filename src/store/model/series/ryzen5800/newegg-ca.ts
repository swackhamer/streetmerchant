import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for newegg-ca ryzen5800 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5800', [
    {
      model: '5800x',
      url: 'https://www.newegg.ca/amd-ryzen-7-5800x/p/N82E16819113665',
      itemNumber: '19-113-665',
    },
  ]),

];
