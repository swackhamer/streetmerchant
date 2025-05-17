import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for opirata 3070 series
 */
export const links: Link[] = [
  // Palit Cards
  ...createBrandSeriesLinks('palit', '3070', [
    {
      model: 'jetstream',
      url: 'https://www.opirata.com/p/tarjeta-grafica-palit-rtx-3070-jet-stream-8gb-gddr6',
    },
  ]),

  // Gainward Cards
  ...createBrandSeriesLinks('gainward', '3070', [
    {
      model: 'phantom gs',
      url: 'https://www.opirata.com/p/tarjeta-grafica-gainward-rtx-3070-phantom-gs-8gb-gddr6',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3070', [
    {
      model: 'gaming oc',
      url: 'https://www.opirata.com/p/tarjeta-grafica-gigabyte-geforce-rtx-3070-gaming-oc-8gb-gddr6',
    },
    {
      model: 'eagle oc',
      url: 'https://www.opirata.com/p/tarjeta-grafica-gigabyte-geforce-rtx-3070-eagle-oc-8gb-gddr6',
    },
    {
      model: 'vision oc',
      url: 'https://www.opirata.com/p/tarjeta-grafica-gigabyte-geforce-rtx-3070-vision-oc-8gb-gddr6',
    },
    {
      model: 'aorus master',
      url: 'https://www.opirata.com/p/gigabyte-aorus-vga-nvidia-rtx-3070-master-8g-ddr6',
    },
    {
      model: 'eagle',
      url: 'https://www.opirata.com/p/tarjeta-grafica-gigabyte-geforce-rtx-3070-eagle-8gb-gddr6',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3070', [
    {
      model: 'xc3 ultra',
      url: 'https://www.opirata.com/p/tarjeta-grafica-evga-geforce-rtx-3070-xc3-ultra-gaming-8gb-gddr6',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3070', [
    {
      model: 'dual fan',
      url: 'https://www.pccomponentes.com/pny-geforce-rtx-3070-dual-fan-8gb-gddr6',
    },
  ]),

];
