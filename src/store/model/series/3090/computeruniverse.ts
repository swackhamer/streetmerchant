import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for computeruniverse 3090 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'strix',
      url: 'https://www.computeruniverse.net/de/asus-rog-strix-geforce-rtx3090-gaming-24-gb-enthusiast-grafikkarte',
    },
    {
      model: 'strix oc',
      url: 'https://www.computeruniverse.net/de/asus-rog-strix-geforce-rtx3090-gaming-oc-24-gb-oc-enthusiast-grafikkarte',
    },
    {
      model: 'tuf',
      url: 'https://www.computeruniverse.net/de/asus-tuf-geforce-rtx3090-gaming-tuf-rtx3090-24g-gaming-24-gb-enthusiast-grafikkarte',
    },
    {
      model: 'tuf oc',
      url: 'https://www.computeruniverse.net/de/asus-tuf-geforce-rtx3090-gaming-oc-tuf-rtx3090-o24g-gaming-24-gb-oc-enthusiast-grafikkarte',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3090', [
    {
      model: 'ftw3',
      url: 'https://www.computeruniverse.net/de/evga-geforce-rtx3090-ftw3-gaming-24-gb-enthusiast-grafikkarte',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.computeruniverse.net/de/evga-geforce-rtx3090-ftw3-ultra-gaming-24-gb-enthusiast-grafikkarte',
    },
    {
      model: 'xc3',
      url: 'https://www.computeruniverse.net/de/evga-geforce-rtx3090-xc3-gaming-24-gb-enthusiast-grafikkarte',
    },
    {
      model: 'xc3 black',
      url: 'https://www.computeruniverse.net/de/evga-geforce-rtx3090-xc3-black-gaming-24-gb-enthusiast-grafikkarte',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.computeruniverse.net/de/evga-geforce-rtx3090-xc3-ultra-gaming-24-gb-enthusiast-grafikkarte',
    },
  ]),

  // Gainward Cards
  ...createBrandSeriesLinks('gainward', '3090', [
    {
      model: 'phoenix',
      url: 'https://www.computeruniverse.net/de/gainward-geforce-rtx3090-phoenix-24-gb-enthusiast-grafikkarte',
    },
    {
      model: 'phoenix gs oc',
      url: 'https://www.computeruniverse.net/de/gainward-geforce-rtx3090-phoenix-gs-24-gb-oc-enthusiast-grafikkarte',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3090', [
    {
      model: 'aorus master',
      url: 'https://www.computeruniverse.net/de/gigabyte-aorus-geforce-rtx3090-master-24gb',
    },
    {
      model: 'eagle oc',
      url: 'https://www.computeruniverse.net/de/gigabyte-geforce-rtx3090-eagle-oc-24-gb-oc-enthusiast-grafikkarte',
    },
    {
      model: 'gaming oc',
      url: 'https://www.computeruniverse.net/de/gigabyte-geforce-rtx3090-gaming-oc-24-gb-oc',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3090', [
    {
      model: 'ichill x3',
      url: 'https://www.computeruniverse.net/de/inno3d-geforce-rtx3090-ichill-x3-24-gb-enthusiast-grafikkarte',
    },
    {
      model: 'ichill x4',
      url: 'https://www.computeruniverse.net/de/inno3d-geforce-rtx3090-ichill-x4-24-gb-enthusiast-grafikkarte',
    },
  ]),

  // Kfa2 Cards
  ...createBrandSeriesLinks('kfa2', '3090', [
    {
      model: 'sg oc',
      url: 'https://www.computeruniverse.net/de/kfa-geforce-rtx3090-sg-oc-24-gb-oc-enthusiast-grafikkarte',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3090', [
    {
      model: 'gaming x trio',
      url: 'https://www.computeruniverse.net/de/msi-geforce-rtx3090-gaming-x-trio-24-gb-enthusiast-grafikkarte',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.computeruniverse.net/de/msi-geforce-rtx3090-ventus-3x-oc-24-gb-oc-enthusiast-grafikkarte',
    },
  ]),

  // Palit Cards
  ...createBrandSeriesLinks('palit', '3090', [
    {
      model: 'gaming pro',
      url: 'https://www.computeruniverse.net/de/palit-geforce-rtx3090-gamingpro-24-gb-enthusiast-grafikkarte',
    },
    {
      model: 'gaming pro oc',
      url: 'https://www.computeruniverse.net/de/palit-geforce-rtx3090-gamingpro-oc-24-gb-oc-enthusiast-grafikkarte',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3090', [
    {
      model: 'xlr8 revel',
      url: 'https://www.computeruniverse.net/de/pny-geforce-rtx3090-xlr8-gaming-epic-x-rgb-m-24-gb-enthusiast-grafikkarte',
    },
    {
      model: 'xlr8 revel',
      url: 'https://www.computeruniverse.net/de/pny-geforce-rtx3090-xlr8-gaming-epic-x-rgb-p-24-gb-enthusiast-grafikkarte',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3090', [
    {
      model: 'trinity',
      url: 'https://www.computeruniverse.net/de/zotac-gaming-geforce-rtx-3090-trinity-24-gb-enthusiast-grafikkarte',
    },
  ]),
];
