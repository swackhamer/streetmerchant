import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for opirata 3080 series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'eagle oc',
      url: 'https://www.opirata.com/p/gigabyte-vga-nvidia-rtx-3080-eagle-oc-10g-ddr6x',
    },
    {
      model: 'gaming oc',
      url: 'https://www.opirata.com/p/gigabyte-vga-nvidia-rtx-3080-gaming-oc-10g-ddr6x',
    },
    {
      model: 'vision oc',
      url: 'https://www.opirata.com/p/tarjeta-grafica-gigabyte-geforce-rtx-3080-vision-oc-10gb-gddr6x',
    },
    {
      model: 'aorus master',
      url: 'https://www.opirata.com/p/tarjeta-grafica-gigabyte-geforce-rtx-3080-master-10gb-gddr6x',
    },
    {
      model: 'aorus xtreme',
      url: 'https://www.opirata.com/p/tarjeta-grafica-gigabyte-aorus-geforce-rtx-3080-xtreme-10gb-gddr6x',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080', [
    {
      model: 'xc3 black',
      url: 'https://www.opirata.com/p/tarjeta-grafica-evga-geforce-rtx-3080-xc3-black-gaming-10gb-gddr6x',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.opirata.com/p/tarjeta-grafica-evga-geforce-rtx-3080-xc3-ultra-gaming-10gb-gddr6x',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.opirata.com/p/tarjeta-grafica-evga-geforce-rtx-3080-ftw3-ultra-gaming-10gb-gddr6x',
    },
    {
      model: 'ftw3',
      url: 'https://www.opirata.com/p/tarjeta-grafica-evga-geforce-rtx-3080-ftw3-gaming-10gb-gddr6x',
    },
  ]),
];
