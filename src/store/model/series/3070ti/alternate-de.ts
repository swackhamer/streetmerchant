import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for alternate-de 3070ti series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3070ti', [
    {
      model: 'tuf oc',
      url: 'https://www.alternate.de/html/product/1756986',
    },
    {
      model: 'tuf',
      url: 'https://www.alternate.de/html/product/1756984',
    },
  ]),

  // Gainward Cards
  ...createBrandSeriesLinks('gainward', '3070ti', [
    {
      model: 'phoenix',
      url: 'https://www.alternate.de/html/product/1755059',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3070ti', [
    {
      model: 'trinity oc',
      url: 'https://www.alternate.de/html/product/1770275',
    },
  ]),

  // Palit Cards
  ...createBrandSeriesLinks('palit', '3070ti', [
    {
      model: 'gaming pro',
      url: 'https://www.alternate.de/html/product/1755057',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3070ti', [
    {
      model: 'ventus 3x oc',
      url: 'https://www.alternate.de/html/product/1753410',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3070ti', [
    {
      model: 'gaming oc',
      url: 'https://www.alternate.de/html/product/1756202',
    },
    {
      model: 'aorus master',
      url: 'https://www.alternate.de/html/product/1759465',
    },
  ]),
];
