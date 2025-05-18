import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for computeruniverse 3060ti series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3060ti', [
    {
      model: 'dual',
      url: 'https://www.computeruniverse.net/de/asus-geforce-rtx3060-ti-dual-8-gb',
    },
    {
      model: 'strix oc',
      url: 'https://www.computeruniverse.net/de/asus-rog-strix-geforce-rtx3060-ti-gaming-oc-8-gb-oc',
    },
    {
      model: 'tuf oc',
      url: 'https://www.computeruniverse.net/de/asus-tuf-geforce-rtx3060-ti-gaming-oc-tuf-o8g-gaming-8-gb',
    },
    {
      model: 'dual oc',
      url: 'https://www.computeruniverse.net/de/asus-geforce-rtx3060-ti-dual-oc-o8g-dual-o8g-8-gb',
    },
  ]),

  // Palit Cards
  ...createBrandSeriesLinks('palit', '3060ti', [
    {
      model: 'dual',
      url: 'https://www.computeruniverse.net/de/palit-geforce-rtx3060-ti-dual-8-gb',
    },
    {
      model: 'dual oc',
      url: 'https://www.computeruniverse.net/de/palit-geforce-rtx-3060-ti-dual-oc-8-gb-oc',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3060ti', [
    {
      model: 'ichill x3',
      url: 'https://www.computeruniverse.net/de/inno3d-geforce-rtx-3060-ti-ichill-x3-8-gb-oc',
    },
    {
      model: 'twin x2 oc',
      url: 'https://www.computeruniverse.net/de/inno3d-geforce-rtx-3060-ti-twin-x2-oc-8-gb-oc',
    },
    {
      model: 'twin x2',
      url: 'https://www.computeruniverse.net/de/inno3d-geforce-rtx-3060-ti-twin-x2-8-gb',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3060ti', [
    {
      model: 'ventus 2x oc',
      url: 'https://www.computeruniverse.net/de/msi-geforce-rtx3060-ti-ventus-2x-oc-8-gb-oc',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.computeruniverse.net/de/msi-geforce-rtx3060-ti-gaming-x-trio-8-gb-oc',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.computeruniverse.net/de/msi-geforce-rtx3060-ti-ventus-3x-oc-8-gb-oc',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3060ti', [
    {
      model: 'gaming oc',
      url: 'https://www.computeruniverse.net/de/gigabyte-geforce-rtx-3060-ti-gaming-oc-8-gb-oc',
    },
    {
      model: 'eagle oc',
      url: 'https://www.computeruniverse.net/de/gigabyte-geforce-rtx3060-ti-eagle-oc-8-gb-oc',
    },
    {
      model: 'eagle',
      url: 'https://www.computeruniverse.net/de/gigabyte-geforce-rtx3060-ti-eagle-8-gb',
    },
    {
      model: 'gaming oc pro',
      url: 'https://www.computeruniverse.net/de/gigabyte-geforce-rtx3060-ti-gaming-oc-pro-8-gb-oc',
    },
    {
      model: 'aorus master',
      url: 'https://www.computeruniverse.net/de/gigabyte-aorus-geforce-rtx3060-ti-master-8-gb',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3060ti', [
    {
      model: 'xc gaming',
      url: 'https://www.computeruniverse.net/de/evga-geforce-rtx3060-ti-xc-gaming-8-gb',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.computeruniverse.net/de/evga-geforce-rtx3060-ti-ftw3-ultra-gaming-8-gb-oc',
    },
    {
      model: 'xc black',
      url: 'https://www.computeruniverse.net/de/evga-geforce-rtx3060-ti-xc-black-gaming-8-gb',
    },
    {
      model: 'ftw3',
      url: 'https://www.computeruniverse.net/de/evga-geforce-rtx3060-ti-ftw3-gaming-8-gb',
    },
    {
      model: 'ftw3 black',
      url: 'https://www.computeruniverse.net/de/evga-geforce-rtx3060-ti-ftw3-black-gaming-8-gb',
    },
  ]),

  // Gainward Cards
  ...createBrandSeriesLinks('gainward', '3060ti', [
    {
      model: 'phoenix',
      url: 'https://www.computeruniverse.net/de/gainward-geforce-rtx3060-ti-phoenix-8-gb',
    },
    {
      model: 'ghost oc',
      url: 'https://www.computeruniverse.net/de/gainward-geforce-rtx-3060-ti-ghost-oc-8-gb-oc',
    },
    {
      model: 'phantom gs',
      url: 'https://www.computeruniverse.net/de/gainward-geforce-rtx3060-ti-phoenix-gs-8-gb-oc',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3060ti', [
    {
      model: 'twin edge oc',
      url: 'https://www.computeruniverse.net/de/zotac-gaming-geforce-rtx-3060-ti-twin-edge-oc-8-gb-oc',
    },
    {
      model: 'twin edge',
      url: 'https://www.computeruniverse.net/de/zotac-gaming-geforce-rtx3060-ti-twin-edge-8-gb',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3060ti', [
    {
      model: 'uprising',
      url: 'https://www.computeruniverse.net/de/pny-geforce-rtx3060-ti-uprising-x8g-8-gb',
    },
    {
      model: 'xlr8 gaming',
      url: 'https://www.computeruniverse.net/de/pny-geforce-rtx3060-ti-xlr8-gaming-8-gb',
    },
  ]),
];
