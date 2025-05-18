import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for mediamarkt 3080 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'strix',
      url: 'https://www.mediamarkt.de/de/product/-2681869.html',
    },
    {
      model: 'strix oc',
      url: 'https://www.mediamarkt.de/de/product/-2681871.html',
    },
    {
      model: 'tuf',
      url: 'https://www.mediamarkt.de/de/product/-2681859.html',
    },
    {
      model: 'tuf oc',
      url: 'https://www.mediamarkt.de/de/product/-2681861.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'eagle oc',
      url: 'https://www.mediamarkt.de/de/product/-2683942.html',
    },
    {
      model: 'gaming oc',
      url: 'https://www.mediamarkt.de/de/product/-2683937.html',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3080', [
    {
      model: 'ichill x3',
      url: 'https://www.mediamarkt.de/de/product/-2684241.html',
    },
    {
      model: 'ichill x4',
      url: 'https://www.mediamarkt.de/de/product/-2684238.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'gaming x trio',
      url: 'https://www.mediamarkt.de/de/product/-2683227.html',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.mediamarkt.de/de/product/-2683229.html',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3080', [
    {
      model: 'trinity',
      url: 'https://www.mediamarkt.de/de/product/-2683243.html',
    },
  ]),
];
