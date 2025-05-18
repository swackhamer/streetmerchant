import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for megekko 3080 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'tuf',
      url: 'https://www.megekko.nl/product/1118232/',
    },
    {
      model: 'strix',
      url: 'https://www.megekko.nl/product/1119242/',
    },
    {
      model: 'strix oc',
      url: 'https://www.megekko.nl/product/1119243/',
    },
    {
      model: 'tuf oc',
      url: 'https://www.megekko.nl/product/1118233/',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080', [
    {
      model: 'ftw3 ultra',
      url: 'https://www.megekko.nl/product/1118248/',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.megekko.nl/product/1118249/',
    },
    {
      model: 'xc3',
      url: 'https://www.megekko.nl/product/1118247/',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.megekko.nl/product/1118260/',
    },
    {
      model: 'xc3 black',
      url: 'https://www.megekko.nl/product/1118246/',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'gaming oc',
      url: 'https://www.megekko.nl/product/292736/',
    },
    {
      model: 'vision oc',
      url: 'https://www.megekko.nl/product/293966/',
    },
    {
      model: 'aorus master',
      url: 'https://www.megekko.nl/product/293965/',
    },
    {
      model: 'aorus xtreme',
      url: 'https://www.megekko.nl/product/293964/',
    },
    {
      model: 'aorus xtreme waterforce',
      url: 'https://www.megekko.nl/product/296925/',
    },
    {
      model: 'eagle',
      url: 'https://www.megekko.nl/product/1125074/',
    },
    {
      model: 'eagle oc',
      url: 'https://www.megekko.nl/product/292735/',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3080', [
    {
      model: 'ichill frostbite',
      url: 'https://www.megekko.nl/product/1125524/',
    },
    {
      model: 'ichill x3',
      url: 'https://www.megekko.nl/product/1118236/',
    },
    {
      model: 'ichill x4',
      url: 'https://www.megekko.nl/product/1118237/',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'gaming x trio',
      url: 'https://www.megekko.nl/product/292742/',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.megekko.nl/product/292740/',
    },
    {
      model: 'suprim x',
      url: 'https://www.megekko.nl/product/295473/',
    },
  ]),
];
