import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for computeruniverse 3070 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3070', [
    {
      model: 'dual',
      url: 'https://www.computeruniverse.net/de/asus-geforce-rtx3070-dual-rtx3070-8g-8-gb-enthusiast-grafikkarte',
    },
    {
      model: 'dual oc',
      url: 'https://www.computeruniverse.net/de/asus-geforce-rtx3070-dual-oc-dual-rtx3070-o8g-8-gb-oc-enthusiast-grafikkarte',
    },
    {
      model: 'strix',
      url: 'https://www.computeruniverse.net/de/asus-rog-strix-geforce-rtx3070-gaming-8-gb-enthusiast-grafikkarte',
    },
    {
      model: 'strix oc',
      url: 'https://www.computeruniverse.net/de/asus-rog-strix-geforce-rtx3070-gaming-oc-8-gb-oc-enthusiast-grafikkarte',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3070', [
    {
      model: 'xc3 black',
      url: 'https://www.computeruniverse.net/de/evga-geforce-rtx3070-xc3-black',
    },
  ]),

  // Gainward Cards
  ...createBrandSeriesLinks('gainward', '3070', [
    {
      model: 'phoenix',
      url: 'https://www.computeruniverse.net/de/gainward-geforce-rtx3070-phoenix-8-gb-enthusiast-grafikkarte',
    },
    {
      model: 'phoenix gs',
      url: 'https://www.computeruniverse.net/de/gainward-geforce-rtx3070-phoenix-gs-8-gb-enthusiast-grafikkarte',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3070', [
    {
      model: 'eagle',
      url: 'https://www.computeruniverse.net/de/gigabyte-geforce-rtx3070-eagle-8-gb-enthusiast-grafikkarte',
    },
    {
      model: 'eagle oc',
      url: 'https://www.computeruniverse.net/de/gigabyte-geforce-rtx3070-eagle-oc-8-gb-enthusiast-grafikkarte',
    },
    {
      model: 'gaming oc',
      url: 'https://www.computeruniverse.net/de/gigabyte-geforce-rtx3070-gaming-oc-8-gb-oc-enthusiast-grafikkarte',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3070', [
    {
      model: 'ichill x3',
      url: 'https://www.computeruniverse.net/de/inno3d-geforce-rtx3070-ichill-x3',
    },
    {
      model: 'ichill x4',
      url: 'https://www.computeruniverse.net/de/inno3d-geforce-rtx3070-ichill-x4',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3070', [
    {
      model: 'gaming x trio',
      url: 'https://www.computeruniverse.net/de/msi-geforce-rtx3070-gaming-x-trio-8-gb-enthusiast-grafikkarte',
    },
    {
      model: 'ventus 2x oc',
      url: 'https://www.computeruniverse.net/de/msi-geforce-rtx3070-ventus-2x-oc-8-gb-oc-enthusiast-grafikkarte',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.computeruniverse.net/de/msi-geforce-rtx3070-ventus-3x-oc-8-gb-oc-enthusiast-grafikkarte',
    },
  ]),

  // Palit Cards
  ...createBrandSeriesLinks('palit', '3070', [
    {
      model: 'gaming pro',
      url: 'https://www.computeruniverse.net/de/palit-geforce-rtx3070-gaming-pro-8-gb',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3070', [
    {
      model: 'dual fan',
      url: 'https://www.computeruniverse.net/de/pny-geforce-rtx3070-m-dual-8-gb',
    },
    {
      model: 'xlr8 revel',
      url: 'https://www.computeruniverse.net/de/pny-geforce-rtx3070-xlr8-gaming-epic-x-rgb-p-8-gb-enthusiast-grafikkarte',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3070', [
    {
      model: 'twin edge oc',
      url: 'https://www.computeruniverse.net/de/zotac-gaming-geforce-rtx3070-twin-edge-oc-8-gb-oc',
    },
  ]),

];
