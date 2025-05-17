import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for neobyte 3070ti series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3070ti', [
    {
      model: 'strix',
      url: 'https://www.neobyte.es/tarjeta-grafica-asus-strix-rtx3070ti-8gb-9471.html',
    },
    {
      model: 'strix oc',
      url: 'https://www.neobyte.es/tarjeta-grafica-asus-tuf-rtx3070ti-oc-8gb-9470.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3070ti', [
    {
      model: 'eagle',
      url: 'https://www.neobyte.es/gigabyte-rtx-3070ti-eagle-8gb-9469.html',
    },
    {
      model: 'gaming oc',
      url: 'https://www.neobyte.es/gigabyte-rtx-3070ti-gaming-oc-8gb-9468.html',
    },
  ]),

];
