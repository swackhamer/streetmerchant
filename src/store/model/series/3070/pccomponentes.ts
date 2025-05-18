import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for pccomponentes 3070 series
 */
export const links: Link[] = [
  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3070', [
    {
      model: 'twin edge',
      url: 'https://www.pccomponentes.com/zotac-gaming-geforce-rtx-3070-twin-edge-oc-8gb-gddr6',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3070', [
    {
      model: 'gaming x trio',
      url: 'https://www.pccomponentes.com/msi-geforce-rtx-3070-gaming-x-trio-8gb-gddr6',
    },
    {
      model: 'ventus 2x',
      url: 'https://www.pccomponentes.com/msi-geforce-rtx-3070-ventus-2x-oc-8gb-gddr6',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.pccomponentes.com/msi-geforce-rtx-3070-ventus-3x-oc-8gb-gddr6',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3070', [
    {
      model: 'gaming oc',
      url: 'https://www.pccomponentes.com/gigabyte-geforce-rtx-3070-gaming-oc-8gb-gddr6',
    },
    {
      model: 'eagle oc',
      url: 'https://www.pccomponentes.com/gigabyte-geforce-rtx-3070-eagle-oc-8gb-gddr6',
    },
    {
      model: 'vision oc',
      url: 'https://www.pccomponentes.com/gigabyte-geforce-rtx-3070-vision-oc-8gb-gddr6',
    },
    {
      model: 'aorus master',
      url: 'https://www.pccomponentes.com/gigabyte-aorus-geforce-rtx-3070-master-8gb-gddr6',
    },
    {
      model: 'eagle',
      url: 'https://www.pccomponentes.com/gigabyte-geforce-rtx-3070-eagle-8gb-gddr6',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3070', [
    {
      model: 'gaming oc',
      url: 'https://www.pccomponentes.com/asus-tuf-gaming-geforce-rtx-3070-oc-8gb-gddr6',
    },
    {
      model: 'dual oc',
      url: 'https://www.pccomponentes.com/asus-geforce-rtx-3070-dual-oc-edition-8gb-gddr6',
    },
    {
      model: 'dual',
      url: 'https://www.pccomponentes.com/asus-geforce-rtx-3070-dual-8gb-gddr6',
    },
    {
      model: 'strix oc',
      url: 'https://www.pccomponentes.com/asus-rog-strix-gaming-geforce-rtx-3070-oc-8gb-gddr6',
    },
    {
      model: 'strix',
      url: 'https://www.pccomponentes.com/asus-rog-strix-gaming-geforce-rtx-3070-8gb-gddr6',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3070', [
    {
      model: 'xc3',
      url: 'https://www.pccomponentes.com/evga-geforce-rtx-3070-xc3-black-gaming-8gb-gddr6',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.pccomponentes.com/evga-geforce-rtx-3070-ftw3-ultra-gaming-8gb-gddr6',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3070', [
    {
      model: 'dual fan',
      url: 'https://www.pccomponentes.com/pny-geforce-rtx-3070-dual-fan-8gb-gddr6',
    },
    {
      model: 'xlr8 revel',
      url: 'https://www.pccomponentes.com/pny-geforce-rtx-3070-xlr8-gaming-epic-x-rgb-8gb',
    },
  ]),
];
