import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for alternate-fr 3060 series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3060', [
    {
      model: 'aorus elite',
      url: 'https://www.alternate.fr/html/product/1757856',
    },
    {
      model: 'gaming oc',
      url: 'https://www.alternate.fr/html/product/1723538',
    },
    {
      model: 'vision oc',
      url: 'https://www.alternate.fr/html/product/1763772',
    },
    {
      model: 'vision oc',
      url: 'https://www.alternate.fr/html/product/1726410',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3060', [
    {
      model: 'amp white',
      url: 'https://www.alternate.fr/html/product/1715300',
    },
  ]),
];
