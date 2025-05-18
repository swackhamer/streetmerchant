import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for alternate-fr 3070ti series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3070ti', [
    {
      model: 'gaming oc',
      url: 'https://www.alternate.fr/html/product/1756202',
    },
    {
      model: 'eagle oc',
      url: 'https://www.alternate.fr/html/product/1762622',
    },
    {
      model: 'aorus master',
      url: 'https://www.alternate.fr/html/product/1759465',
    },
    {
      model: 'vision oc',
      url: 'https://www.alternate.fr/html/product/1761662',
    },
  ]),
];
