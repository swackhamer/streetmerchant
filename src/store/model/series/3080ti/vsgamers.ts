import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for vsgamers 3080ti series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080ti', [
    {
      model: 'strix',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-asus-rog-strix-rtx-3080-ti-oc-12gb',
    },
    {
      model: 'tuf oc',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-asus-tuf-gaming-geforce-rtxr-3080-ti-oc-12gb-gddr6x',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080ti', [
    {
      model: 'gaming x trio',
      url: 'https://www.vsgamers.es/product/geforce-rtxr-3080-ti-gaming-x-trio-12gb',
    },
    {
      model: 'suprim x',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-geforce-rtxr-3080-ti-suprim-x-12g',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3080ti', [
    {
      model: 'trinity oc',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-zotac-geforce-rtx-3080ti-trinity-oc-12gb-gddr6x',
    },
    {
      model: 'trinity',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-zotac-geforce-rtx-3080ti-trinity-12gb-gddr6x',
    },
    {
      model: 'amp holo',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-zotac-geforce-rtx-3080-ti-amp-holo-12gb-gddr6x',
    },
  ]),
];
