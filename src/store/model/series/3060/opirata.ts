import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for opirata 3060 series
 */
export const links: Link[] = [
  // Evga Cards
  ...createBrandSeriesLinks('evga', '3060', [
    {
      model: 'xc gaming',
      url: 'https://www.opirata.com/p/tarjeta-grafica-evga-rtx-3060-12gb-xc-gaming-gddr6',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3060', [
    {
      model: 'gaming oc',
      url: 'https://www.opirata.com/p/tarjeta-grafica-gigabyte-vga-nvidia-rtx-3060-gaming-oc-12gb-ddr6',
    },
    {
      model: 'eagle oc',
      url: 'https://www.opirata.com/p/tarjeta-grafica-gigabyte-geforce-rtx-3060-eagle-oc-12gb-gddr6',
    },
  ]),
];
