import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for computeruniverse 3080 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'strix',
      url: 'https://www.computeruniverse.net/de/asus-rog-strix-geforce-rtx3080-gaming-10-gb-enthusiast-grafikkarte',
    },
    {
      model: 'strix oc',
      url: 'https://www.computeruniverse.net/de/asus-rog-strix-geforce-rtx3080-gaming-oc-10-gb-oc-enthusiast-grafikkarte',
    },
    {
      model: 'tuf',
      url: 'https://www.computeruniverse.net/de/asus-tuf-geforce-rtx3080-gaming-tuf-rtx3080-10g-gaming-10-gb-enthusiast-grafikkarte',
    },
    {
      model: 'tuf oc',
      url: 'https://www.computeruniverse.net/de/asus-tuf-geforce-rtx3080-gaming-oc-tuf-rtx3080-o10g-gaming-10-gb-oc-enthusiast-grafikkarte',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080', [
    {
      model: 'ftw3',
      url: 'https://www.computeruniverse.net/de/evga-geforce-rtx3080-ftw3-10-gb-high-end-grafikkarte',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.computeruniverse.net/de/evga-geforce-rtx3080-ultra-ftw3-10-gb-oc-enthusiast-grafikkarte',
    },
    {
      model: 'xc3',
      url: 'https://www.computeruniverse.net/de/evga-geforce-rtx3080-xc3-10-gb-enthusiast-grafikkarte',
    },
    {
      model: 'xc3 black',
      url: 'https://www.computeruniverse.net/de/evga-geforce-rtx3080-xc3-black-10-gb-enthusiast-grafikkarte',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.computeruniverse.net/de/evga-geforce-rtx3080-xc3-ultra-10-gb-enthusiast-grafikkarte',
    },
  ]),

  // Gainward Cards
  ...createBrandSeriesLinks('gainward', '3080', [
    {
      model: 'phoenix',
      url: 'https://www.computeruniverse.net/de/gainward-geforce-rtx3080-phoenix-10-gb-enthusiast-grafikkarte',
    },
    {
      model: 'phoenix gs',
      url: 'https://www.computeruniverse.net/de/gainward-geforce-rtx3080-phoenix-gs-10-gb-enthusiast-grafikkarte',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'aorus master',
      url: 'https://www.computeruniverse.net/de/gigabyte-aorus-geforce-rtx3080-master-10-gb-oc-enthusiast-grafikkarte',
    },
    {
      model: 'eagle oc',
      url: 'https://www.computeruniverse.net/de/gigabyte-geforce-rtx3080-eagle-oc-10-gb-oc-enthusiast-grafikkarte',
    },
    {
      model: 'gaming oc',
      url: 'https://www.computeruniverse.net/de/gigabyte-geforce-rtx3080-gaming-oc-10-gb-enthusiast-grafikkarte',
    },
    {
      model: 'vision oc',
      url: 'https://www.computeruniverse.net/de/gigabyte-geforce-rtx3080-vision-oc-10-gb-oc-enthusiast-grafikkarte',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3080', [
    {
      model: 'ichill x3',
      url: 'https://www.computeruniverse.net/de/inno3d-geforce-rtx3080-ichill-x3-10-gb-enthusiast-grafikkarte',
    },
    {
      model: 'ichill x4',
      url: 'https://www.computeruniverse.net/de/inno3d-geforce-rtx3080-ichill-x4-10-gb-enthusiast-grafikkarte',
    },
    {
      model: 'twin x2 oc',
      url: 'https://www.computeruniverse.net/de/inno3d-geforce-rtx3080-twin-x2-oc-10-gb-enthusiast-grafikkarte',
    },
  ]),

  // Kfa2 Cards
  ...createBrandSeriesLinks('kfa2', '3080', [
    {
      model: 'sg oc',
      url: 'https://www.computeruniverse.net/de/kfa-geforce-rtx3080-sg-oc-10-gb-oc-enthusiast-grafikkarte',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'gaming x trio',
      url: 'https://www.computeruniverse.net/de/msi-geforce-rtx3080-gaming-x-trio-10-gb-enthusiast-grafikkarte',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.computeruniverse.net/de/msi-geforce-rtx3080-ventus-3x-oc-10-gb-enthusiast-grafikkarte',
    },
  ]),

  // Palit Cards
  ...createBrandSeriesLinks('palit', '3080', [
    {
      model: 'gaming pro',
      url: 'https://www.computeruniverse.net/de/palit-geforce-rtx3080-gamingpro-10-gb-enthusiast-grafikkarte',
    },
    {
      model: 'gaming pro oc',
      url: 'https://www.computeruniverse.net/de/palit-geforce-rtx3080-gamingpro-oc-10-gb-oc-enthusiast-grafikkarte',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3080', [
    {
      model: 'xlr8 revel',
      url: 'https://www.computeruniverse.net/de/pny-geforce-rtx-3080-xlr8-gaming-epic-x-rgb-p-10-gb-enthusiast-grafikkarte',
    },
    {
      model: 'xlr8 revel',
      url: 'https://www.computeruniverse.net/de/pny-geforce-rtx3080-xlr8-gaming-epic-x-rgb-m-10-gb-enthusiast-grafikkarte',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3080', [
    {
      model: 'amp holo',
      url: 'https://www.computeruniverse.net/de/zotac-geforce-rtx3080-amp-holo-10-gb-enthusiast-grafikkarte',
    },
    {
      model: 'amp extreme holo',
      url: 'https://www.computeruniverse.net/de/zotac-geforce-rtx3080-amp-extreme-holo-10-gb-enthusiast-grafikkarte',
    },
    {
      model: 'trinity',
      url: 'https://www.computeruniverse.net/de/zotac-gaming-geforce-rtx3080-trinity-10-gb-enthusiast-grafikkarte',
    },
    {
      model: 'trinity oc',
      url: 'https://www.computeruniverse.net/de/zotac-gaming-geforce-rtx3080-trinity-oc-10-gb-enthusiast-grafikkarte',
    },
  ]),

];
