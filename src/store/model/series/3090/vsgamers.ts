import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for vsgamers 3090 series
 */
export const links: Link[] = [
  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3090', [
    {
      model: 'trinity',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-zotac-geforce-rtx-3090-trinity-24-gb-gddr6x',
    },
    {
      model: 'trinity oc',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-zotac--geforce-rtxr-3090-trinity-oc-24-gb-gddr6x',
    },
    {
      model: 'amp holo',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-zotac--geforce-rtx-3090-amp-core-holo-24gb-gddr6x',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'tuf',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-asus-tuf-gaming-geforce-rtx-3090-24g-24-gb-gddr6x',
    },
    {
      model: 'tuf oc',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-asus-tuf-gaming-geforce-rtx-3090-oc-24g-24-gb-gddr6x',
    },
    {
      model: 'strix',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-asus-rog-strix-geforce-rtx-3090-gaming-24g-24-gb-gddr6x',
    },
    {
      model: 'strix oc',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-asus-rog-strix--geforce-rtxr-3090-gaming-oc-24gb-gddr6x',
    },
    {
      model: 'strix white',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-asus-rog-strix-geforce-rtx-3090-24-gb-gddr6x-blanca',
    },
    {
      model: 'turbo',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-asus-turbo-geforce-rtx-3090-24-gb-gddr6x',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3090', [
    {
      model: 'ventus 3x oc',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-msi-geforce-rtx-3090-ventus-3x-24g-oc-24-gb-gddr6x',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-msi-geforce-rtx-3090-gaming-x-trio-24g-24-gb-gddr6x',
    },
    {
      model: 'suprim x',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-msi-geforce-rtx-3090-suprim-x-24g-gddr6x',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3090', [
    {
      model: 'eagle oc',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-gigabyte-geforce-rtx-3090-eagle-oc-24g-24-gb-gddr6x',
    },
    {
      model: 'gaming oc',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-gigabyte-geforce-rtx-3090-gaming-oc-24g-24-gb-gddr6x',
    },
  ]),
];
