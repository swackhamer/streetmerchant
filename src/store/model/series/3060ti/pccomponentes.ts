import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for pccomponentes 3060ti series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', '3060ti', [
    {
      model: 'ventus 2x oc',
      url: 'https://www.pccomponentes.com/msi-rtx-3060-ti-ventus-2x-oc-8gb-gddr6',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.pccomponentes.com/msi-geforce-rtx-3060-ti-gaming-x-8gb-gddr6',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.pccomponentes.com/msi-rtx-3060-ti-gaming-x-trio-8gb-gddr6',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3060ti', [
    {
      model: 'eagle oc',
      url: 'https://www.pccomponentes.com/gigabyte-geforce-rtx-3060-ti-eagle-oc-8gb-gddr6',
    },
    {
      model: 'gaming oc pro',
      url: 'https://www.pccomponentes.com/gigabyte-geforce-rtx-3060-ti-gaming-oc-pro-8gb-gddr6',
    },
    {
      model: 'aorus master',
      url: 'https://www.pccomponentes.com/gigabyte-aorus-geforce-rtx-3060-ti-master-8gb-gddr6',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3060ti', [
    {
      model: 'ftw3 ultra',
      url: 'https://www.pccomponentes.com/evga-geforce-rtx-3060-ti-ftw3-ultra-8gb-gddr6',
    },
    {
      model: 'xc gaming',
      url: 'https://www.pccomponentes.com/evga-geforce-rtx-3060-ti-xc-8gb-gddr6',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3060ti', [
    {
      model: 'dual oc',
      url: 'https://www.pccomponentes.com/asus-geforce-rtx-3060ti-dual-o8g-8gb-gddr6',
    },
    {
      model: 'strix oc',
      url: 'https://www.pccomponentes.com/asus-rog-strix-geforce-rtx-3060ti-o8g-gaming-8gb-gddr6',
    },
    {
      model: 'tuf oc',
      url: 'https://www.pccomponentes.com/asus-tuf-geforce-rtx-3060ti-o8g-gaming-8gb-gddr6',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3060ti', [
    {
      model: 'twin edge oc',
      url: 'https://www.pccomponentes.com/zotac-geforce-rtx-3060ti-d6-twin-edge-oc-8gb-gddr6',
    },
    {
      model: 'twin edge',
      url: 'https://www.pccomponentes.com/zotac-geforce-rtx-3060-ti-d6-twin-edge-8gb-gddr6',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3060ti', [
    {
      model: 'xlr8 revel',
      url: 'https://www.pccomponentes.com/pny-geforce-rtx-3060ti-xlr8-gaming-revel-epic-x-rgb-edition-8gb-gddr6',
    },
  ]),
];
