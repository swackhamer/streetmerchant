import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for pccomponentes 3080ti series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080ti', [
    {
      model: 'tuf oc',
      url: 'https://www.pccomponentes.com/asus-tuf-gaming-geforce-rtx-3080-ti-oc-edition-12gb-gddr6x',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080ti', [
    {
      model: 'ftw3 ultra',
      url: 'https://www.pccomponentes.com/evga-geforce-rtx-3080-ti-ftw3-ultra-12gb-gddr6x',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.pccomponentes.com/evga-geforce-rtx-3080-ti-xc3-ultra-12gb-gddr6x',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080ti', [
    {
      model: 'gaming oc',
      url: 'https://www.pccomponentes.com/gigabyte-geforce-rtx-3080-ti-gaming-oc-12gb-gddr6x',
    },
    {
      model: 'aorus master',
      url: 'https://www.pccomponentes.com/gigabyte-aorus-geforce-rtx-3080-ti-master-12gb-gddr6x',
    },
    {
      model: 'eagle oc',
      url: 'https://www.pccomponentes.com/gigabyte-geforce-rtx-3080-ti-eagle-oc-12gb-gddr6x',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080ti', [
    {
      model: 'ventus 3x oc',
      url: 'https://www.pccomponentes.com/msi-geforce-rtx-3080-ti-ventus-3x-12gb-gddr6x',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.pccomponentes.com/msi-rtx-3080-ti-gaming-x-trio-12gb-gddr6x',
    },
    {
      model: 'suprim x',
      url: 'https://www.pccomponentes.com/msi-geforce-rtx-3080-ti-suprim-x-12gb-gddr6x',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3080ti', [
    {
      model: 'amp holo',
      url: 'https://www.pccomponentes.com/zotac-gaming-geforce-rtx-3080-ti-amp-holo-12gb-gddr6x',
    },
    {
      model: 'trinity oc',
      url: 'https://www.pccomponentes.com/zotac-gaming-geforce-rtx-3080-ti-trinity-oc-12gb-gddr6x',
    },
  ]),

];
