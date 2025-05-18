import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for saturn 3090 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'strix',
      url: 'https://www.saturn.de/de/product/-2681863.html',
    },
    {
      model: 'strix oc',
      url: 'https://www.saturn.de/de/product/-2681866.html',
    },
    {
      model: 'tuf',
      url: 'https://www.saturn.de/de/product/-2681855.html',
    },
    {
      model: 'tuf oc',
      url: 'https://www.saturn.de/de/product/-2681857.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3090', [
    {
      model: 'aorus master',
      url: 'https://www.saturn.de/de/product/-2691441.html',
    },
    {
      model: 'aorus xtreme',
      url: 'https://www.saturn.de/de/product/-2691440.html',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3090', [
    {
      model: 'ichill x4',
      url: 'https://www.saturn.de/de/product/-2684235.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3090', [
    {
      model: 'gaming x trio',
      url: 'https://www.saturn.de/de/product/-2683226.html',
    },
  ]),
];
