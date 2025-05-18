import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for alternate-fr 3070 series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3070', [
    {
      model: 'aorus master',
      url: 'https://www.alternate.fr/html/product/1688810',
    },
    {
      model: 'vision oc',
      url: 'https://www.alternate.fr/html/product/1688819',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3070', [
    {
      model: 'amp holo',
      url: 'https://www.alternate.fr/html/product/1702466',
    },
  ]),
];
