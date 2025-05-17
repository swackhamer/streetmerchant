import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for neobyte 3080ti series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080ti', [
    {
      model: 'tuf oc',
      url: 'https://www.neobyte.es/tarjeta-grafica-asus-tuf-rtx3080ti-oc-12gb-9453.html',
    },
    {
      model: 'tuf',
      url: 'https://www.neobyte.es/tarjeta-grafica-asus-tuf-rtx3080ti-12gb-9454.html',
    },
    {
      model: 'strix oc',
      url: 'https://www.neobyte.es/tarjeta-grafica-asus-strix-rtx3080ti-oc-12gb-9452.html',
    },
    {
      model: 'strix',
      url: 'https://www.neobyte.es/tarjeta-grafica-asus-strix-rtx3080ti-12gb-9474.html',
    },
    {
      model: 'strix oc lc',
      url: 'https://www.neobyte.es/tarjeta-grafica-asus-strix-lc-rtx3080ti-oc-12gb-9472.html',
    },
    {
      model: 'strix lc',
      url: 'https://www.neobyte.es/tarjeta-grafica-asus-strix-lc-rtx3080ti-12gb-9473.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080ti', [
    {
      model: 'gaming oc',
      url: 'https://www.neobyte.es/gigabyte-rtx-3080ti-gaming-oc-12gb-9462.html',
    },
    {
      model: 'eagle',
      url: 'https://www.neobyte.es/gigabyte-rtx-3080ti-eagle-12gb-9467.html',
    },
    {
      model: 'aorus master',
      url: 'https://www.neobyte.es/gigabyte-rtx-3080ti-aorus-master-12gb-9461.html',
    },
    {
      model: 'vision oc',
      url: 'https://www.neobyte.es/gigabyte-rtx-3080ti-vision-oc-12gb-9464.html',
    },
    {
      model: 'eagle oc',
      url: 'https://www.neobyte.es/gigabyte-rtx-3080ti-eagle-oc-12gb-9466.html',
    },
  ]),

];
