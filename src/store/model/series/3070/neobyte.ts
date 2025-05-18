import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for neobyte 3070 series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3070', [
    {
      model: 'vision oc',
      url: 'https://www.neobyte.es/gigabyte-rtx-3070-vision-oc-8gb-7788.html',
    },
    {
      model: 'eagle oc',
      url: 'https://www.neobyte.es/gigabyte-rtx-3070-eagle-oc-8gb-7649.html',
    },
    {
      model: 'eagle',
      url: 'https://www.neobyte.es/tarjeta-grafica-gigabyte-rtx3070-eagle-8gb-8779.html',
    },
    {
      model: 'aorus master',
      url: 'https://www.neobyte.es/gigbyte-rtx-3070-aorus-master-8gb-7770.html',
    },
    {
      model: 'gaming oc',
      url: 'https://www.neobyte.es/gigabyte-rtx-3070-gaming-oc-8gb-7484.html',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3070', [
    {
      model: 'strix oc',
      url: 'https://www.neobyte.es/asus-rog-strix-rtx-3070-oc-8gb-gaming-7291.html',
    },
    {
      model: 'dual oc',
      url: 'https://www.neobyte.es/asus-dual-rtx-3070-oc-8gb-7293.html',
    },
    {
      model: 'dual',
      url: 'https://www.neobyte.es/asus-dual-rtx-3070-8gb-7294.html',
    },
    {
      model: 'tuf oc',
      url: 'https://www.neobyte.es/asus-tuf-rtx-3070-gaming-8gb-7822.html',
    },
    {
      model: 'strix',
      url: 'https://www.neobyte.es/asus-rog-strix-rtx-3070-8gb-gaming-7292.html',
    },
    {
      model: 'tuf',
      url: 'https://www.neobyte.es/tarjeta-grafica-asus-tuf-rtx-3070-gaming-8gb-8049.html',
    },
    {
      model: 'strix oc white',
      url: 'https://www.neobyte.es/tarjeta-grafica-asus-strix-rtx3070-oc-8gb-blanca-8206.html',
    },
    {
      model: 'tuf oc',
      url: 'https://www.neobyte.es/tarjeta-grafica-asus-tuf-rtx3070-oc-gaming-8gb-7961.html',
    },
    {
      model: 'strix white',
      url: 'https://www.neobyte.es/tarjeta-grafica-asus-rog-strix-geforce-rtx-3070-white-edition-8523.html',
    },
  ]),
];
