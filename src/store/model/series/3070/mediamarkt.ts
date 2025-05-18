import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for mediamarkt 3070 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3070', [
    {
      model: 'strix',
      url: 'https://www.mediamarkt.de/de/product/-2691243.html',
    },
    {
      model: 'strix oc',
      url: 'https://www.mediamarkt.de/de/product/-2691244.html',
    },
    {
      model: 'dual',
      url: 'https://www.mediamarkt.de/de/product/-2691245.html',
    },
    {
      model: 'dual oc',
      url: 'https://www.mediamarkt.de/de/product/-2691246.html',
    },
    {
      model: 'tuf oc',
      url: 'https://www.mediamarkt.de/de/product/-2691247.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3070', [
    {
      model: 'gaming oc',
      url: 'https://www.mediamarkt.de/de/product/-2691439.html',
    },
    {
      model: 'eagle oc',
      url: 'https://www.mediamarkt.de/de/product/-2691444.html',
    },
    {
      model: 'aorus master',
      url: 'https://www.mediamarkt.de/de/product/-2696163.html',
    },
    {
      model: 'vision oc',
      url: 'https://www.mediamarkt.de/de/product/-2696164.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3070', [
    {
      model: 'gaming x trio',
      url: 'https://www.mediamarkt.de/de/product/-2694894.html',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.mediamarkt.de/de/product/-2694896.html',
    },
    {
      model: 'ventus 2x oc',
      url: 'https://www.mediamarkt.de/de/product/-2694898.html',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3070', [
    {
      model: 'ichill x3',
      url: 'https://www.mediamarkt.de/de/product/-2695942.html',
    },
    {
      model: 'ichill x4',
      url: 'https://www.mediamarkt.de/de/product/-2695941.html',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3070', [
    {
      model: 'twin edge',
      url: 'https://www.mediamarkt.de/de/product/-2691365.html',
    },
    {
      model: 'twin edge oc',
      url: 'https://www.mediamarkt.de/de/product/-2695671.html',
    },
  ]),
];
