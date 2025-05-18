import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for opirata 3090 series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3090', [
    {
      model: 'aorus master',
      url: 'https://www.opirata.com/p/tarjeta-grafica-gigabyte-aorus-geforce-rtx-3090-master-24gb-gddr6x',
    },
    {
      model: 'eagle oc',
      url: 'https://www.opirata.com/p/tarjeta-grafica-gigabyte-geforce-rtx-3090-eagle-oc-24g-24gb-gddr6x',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3090', [
    {
      model: 'ftw3 ultra',
      url: 'https://www.opirata.com/p/tarjeta-grafica-evga-geforce-rtx-3090-ftw3-ultra-gaming-24gb-gddr6x',
    },
  ]),
];
