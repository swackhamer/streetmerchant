import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for siabyte 3080ti series
 */
export const links: Link[] = [
  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080ti', [
    {
      model: 'ftw3 ultra',
      url: 'https://siabyte.com/tarjetas-graficas/981-evga-geforce-rtx-3080-ti-ftw3-ultra-12gb-gddr6x.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080ti', [
    {
      model: 'suprim x',
      url: 'https://siabyte.com/rtx-3080/979-msi-geforce-rtx-3080-ti-suprim-x-12gb-gddr6x.html',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3080ti', [
    {
      model: 'amp holo',
      url: 'https://siabyte.com/tarjetas-graficas/980-zotac-gaming-geforce-rtx-3080-ti-amp-holo-12gb-gddr6x.html',
    },
  ]),
];
