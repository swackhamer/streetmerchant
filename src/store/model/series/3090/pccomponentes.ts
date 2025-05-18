import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for pccomponentes 3090 series
 */
export const links: Link[] = [
  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3090', [
    {
      model: 'trinity',
      url: 'https://www.pccomponentes.com/zotac-gaming-geforce-rtx-3090-trinity-24gb-gddr6x',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3090', [
    {
      model: 'gaming oc',
      url: 'https://www.pccomponentes.com/gigabyte-geforce-rtx-3090-gaming-oc-24g-24gb-gddr6x',
    },
    {
      model: 'turbo',
      url: 'https://www.pccomponentes.com/gigabyte-geforce-rtx-3090-turbo-24gb-gddr6x',
    },
    {
      model: 'aorus xtreme',
      url: 'https://www.pccomponentes.com/gigabyte-aorus-geforce-rtx-3090-xtreme-24gb-gddrx6',
    },
    {
      model: 'aorus master',
      url: 'https://www.pccomponentes.com/gigabyte-aorus-geforce-rtx-3090-master-24gb-gddr6x',
    },
    {
      model: 'aorus xtreme waterforce wb',
      url: 'https://www.pccomponentes.com/gigabyte-aorus-geforce-rtx-3090-xtreme-waterforce-wb-24gb-gddr6x',
    },
    {
      model: 'eagle oc',
      url: 'https://www.pccomponentes.com/gigabyte-geforce-rtx-3090-eagle-oc-24g-24gb-gddr6x',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3090', [
    {
      model: 'xc3 ultra',
      url: 'https://www.pccomponentes.com/evga-geforce-rtx-3090-xc3-ultra-gaming-24gb-gddr6x',
    },
    {
      model: 'ftw3 ultra hybrid',
      url: 'https://www.pccomponentes.com/evga-geforce-rtx-3090-ftw3-ultra-hybrid-gaming-24gb-gddr6x',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.pccomponentes.com/evga-geforce-rtx-3090-ftw3-ultra-gaming-24gb-gddr6x',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'tuf oc',
      url: 'https://www.pccomponentes.com/asus-tuf-geforce-rtx-3090-gaming-oc-24gb-gddr6x',
    },
    {
      model: 'strix oc',
      url: 'https://www.pccomponentes.com/asus-rog-strix-geforce-rtx-3090-gaming-oc-24gb-gddr6x',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3090', [
    {
      model: 'gaming x trio',
      url: 'https://www.pccomponentes.com/msi-geforce-rtx-3090-gaming-x-trio-24gb-gddr6x',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.pccomponentes.com/msi-geforce-rtx-3090-ventus-3x-oc-24gb-gddr6x',
    },
  ]),
];
