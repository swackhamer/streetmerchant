import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for neobyte 3090 series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3090', [
    {
      model: 'gaming oc',
      url: 'https://www.neobyte.es/gigabyte-rtx-3090-gaming-oc-24gb-7275.html',
    },
    {
      model: 'vision oc',
      url: 'https://www.neobyte.es/gigabyte-rtx-3090-vision-oc-24g-7696.html',
    },
    {
      model: 'aorus xtreme',
      url: 'https://www.neobyte.es/tarjeta-grafica-gigabyte-aorus-rtx3090-24gb-8961.html',
    },
    {
      model: 'aorus master',
      url: 'https://www.neobyte.es/tarjeta-grafica-gigabyte-rtx3090-aorus-master-24gb-9271.html',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'tuf oc',
      url: 'https://www.neobyte.es/asus-tuf-rtx-3090-oc-gaming-24gb-7279.html',
    },
    {
      model: 'tuf',
      url: 'https://www.neobyte.es/asus-tuf-rtx-3090-gaming-24gb-7280.html',
    },
    {
      model: 'strix oc white',
      url: 'https://www.neobyte.es/tarjeta-grafica-asus-rog-strix-rtx3090-oc-24gb-white-edition-8114.html',
    },
    {
      model: 'strix oc',
      url: 'https://www.neobyte.es/asus-rog-strix-rtx-3090-oc-gaming-24gb-7283.html',
    },
    {
      model: 'strix',
      url: 'https://www.neobyte.es/asus-rog-strix-rtx-3090-gaming-24gb-7284.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3090', [
    {
      model: 'gaming x trio',
      url: 'https://www.neobyte.es/grafica-msi-rtx-3090-gaming-x-trio-24g-7287.html',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.neobyte.es/grafica-msi-rtx-3090-ventus-3x-24g-oc-7288.html',
    },
  ]),

];
