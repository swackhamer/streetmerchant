import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for alternate-fr 3080ti series
 */
export const links: Link[] = [
  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3080ti', [
    {
      model: 'trinity',
      url: 'https://www.alternate.fr/html/product/1752971',
    },
    {
      model: 'amp holo',
      url: 'https://www.alternate.fr/html/product/1752975',
    },
  ]),

];
