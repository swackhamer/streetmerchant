import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for vsgamers 3070 series
 */
export const links: Link[] = [
  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3070', [
    {
      model: 'twin edge',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-zotac-gaming-geforce-rtx-3070-twin-edge-oc-8-gb-gddr6',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3070', [
    {
      model: 'tuf',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-asus-tuf-gaming-geforce-rtx-3070-oc-8gb-gddr6',
    },
    {
      model: 'dual',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-asus-dual-geforce-rtx-3070-gaming-8g-8-gb-gddr6',
    },
    {
      model: 'dual oc',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-asus-dual-geforce-rtx-3070-gaming-oc-8g-8-gb-gddr6',
    },
    {
      model: 'strix oc',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-asus-rog-strix-geforce-rtx-3070-gaming-oc-8g-8-gb-gddr6x',
    },
    {
      model: 'strix',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-asus-rog-strix-geforce-rtx-3070-gaming-8g-8-gb-gddr6x',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3070', [
    {
      model: 'gaming oc',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-gigabyte-geforce-rtx-3070-gaming-oc-8-gb-gddr6',
    },
    {
      model: 'gaming oc',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-gigabyte-geforce-rtx-3070-gaming-oc-8-gb-gddr6',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3070', [
    {
      model: 'gaming x trio',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-msi-geforce-rtxr-3070-gaming-x-trio',
    },
    {
      model: 'ventus 2x oc',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-msi-geforce-rtxr-3070-ventus-2x-oc-8gb-gddr6',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-msi-geforce-rtxr-3070-ventus-3x-oc-8gb-gddr6',
    },
  ]),
];
