import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for opirata 3060ti series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3060ti', [
    {
      model: 'eagle oc',
      url: 'https://www.opirata.com/p/tarjeta-grafica-gigabyte-geforce-rtx-3060-ti-eagle-oc-8gb-gddr6',
    },
    {
      model: 'gaming oc',
      url: 'https://www.opirata.com/p/gigabyte-vga-nvidia-rtx-3060-ti-gaming-oc-8gb-ddr6',
    },
    {
      model: 'gaming oc pro',
      url: 'https://www.opirata.com/p/gigabyte-vga-nvidia-rtx-3060-ti-gaming-oc-pro-8gb',
    },
    {
      model: 'aorus master',
      url: 'https://www.opirata.com/p/gigabyte-aorus-vga-nvidia-rtx-3060-ti-master-8gb-gddr6',
    },
  ]),

  // Palit Cards
  ...createBrandSeriesLinks('palit', '3060ti', [
    {
      model: 'gaming pro',
      url: 'https://www.opirata.com/p/palit-vga-nvidia-geforce-rtx-3060-ti-gamingpro-8gb-gddr6',
    },
    {
      model: 'dual',
      url: 'https://www.opirata.com/p/tarjeta-grafica-palit-geforce-rtx-3060-ti-dual-8gb-gddr6',
    },
    {
      model: 'dual oc',
      url: 'https://www.opirata.com/p/palit-vga-nvidia-rtx-3060-ti-dual-oc-8gb-gddr6',
    },
  ]),
];
