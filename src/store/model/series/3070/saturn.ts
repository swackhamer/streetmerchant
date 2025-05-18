import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for saturn 3070 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3070', [
    {
      model: 'strix oc',
      url: 'https://www.saturn.de/de/product/-2691244.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3070', [
    {
      model: 'gaming oc',
      url: 'https://www.saturn.de/de/product/-2691439.html',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3070', [
    {
      model: 'ichill x3',
      url: 'https://www.saturn.de/de/product/-2695942.html',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3070', [
    {
      model: 'twin edge',
      url: 'https://www.saturn.de/de/product/-2691365.html',
    },
  ]),
];
