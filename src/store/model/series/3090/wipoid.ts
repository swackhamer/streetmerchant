import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for wipoid 3090 series
 */
export const links: Link[] = [
  // Evga Cards
  ...createBrandSeriesLinks('evga', '3090', [
    {
      model: 'ftw3 ultra',
      url: 'https://www.wipoid.com/evga-geforce-rtx-3090-ftw3-ultra-gaming-24gb-gddr6x.html',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.wipoid.com/evga-geforce-rtx-3090-xc3-ultra-gaming-24gb-gddr6x.html',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'ekwb',
      url: 'https://www.wipoid.com/asus-ekwb-geforce-rtx-3090-24gb-gddr6x.html',
    },
    {
      model: 'strix white',
      url: 'https://www.wipoid.com/asus-rog-strix-geforce-rtx-3090-oc-edition-white-24gb-gddr6x.html',
    },
    {
      model: 'tuf oc',
      url: 'https://www.wipoid.com/asus-tuf-gaming-geforce-rtx-3090-oc-edition-24gb-gddr6x.html',
    },
    {
      model: 'strix oc',
      url: 'https://www.wipoid.com/asus-rog-strix-geforce-rtx-3090-oc-edition-24gb-gddr6x.html',
    },
    {
      model: 'strix',
      url: 'https://www.wipoid.com/asus-rog-strix-geforce-rtx-3090-24gb-gddr6x.html',
    },
    {
      model: 'tuf',
      url: 'https://www.wipoid.com/asus-tuf-gaming-geforce-rtx-3090-24gb-gddr6x.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3090', [
    {
      model: 'gaming oc',
      url: 'https://www.wipoid.com/gigabyte-geforce-rtx-3090-oc-24gb-gddr6x.html',
    },
    {
      model: 'eagle oc',
      url: 'https://www.wipoid.com/gigabyte-geforce-rtx-3090-eagle-oc-24gb-gddr6x.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3090', [
    {
      model: 'gaming x trio',
      url: 'https://www.wipoid.com/msi-geforce-rtx-3090-gaming-x-trio-24gb-gddr6x.html',
    },
    {
      model: 'ventus 3x',
      url: 'https://www.wipoid.com/msi-geforce-rtx-3090-ventus-3x-24gb-gddr6x.html',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3090', [
    {
      model: 'trinity',
      url: 'https://www.wipoid.com/zotac-gaming-geforce-rtx-3090-trinity-24gb-gddr6x.html',
    },
  ]),
];
