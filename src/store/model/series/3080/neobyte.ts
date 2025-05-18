import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for neobyte 3080 series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'eagle oc',
      url: 'https://www.neobyte.es/gigabyte-rtx-3080-eagle-oc-10gb-7278.html',
    },
    {
      model: 'gaming oc',
      url: 'https://www.neobyte.es/gigabyte-rtx-3080-gaming-oc-10gb-7277.html',
    },
    {
      model: 'vision oc',
      url: 'https://www.neobyte.es/gigabyte-rtx-3080-vision-oc-10g-7440.html',
    },
    {
      model: 'aorus master',
      url: 'https://www.neobyte.es/gigabyte-rtx-3080-aorus-master-10gb-7483.html',
    },
    {
      model: 'aorus xtreme',
      url: 'https://www.neobyte.es/gigabyte-rtx-3080-aorus-x-10gb-7840.html',
    },
    {
      model: 'aorus master',
      url: 'https://www.neobyte.es/tarjeta-grafica-gigabyte-rtx3080-aorus-master-10gb-9305.html',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'strix oc white',
      url: 'https://www.neobyte.es/tarjeta-grafica-asus-rog-strix-rtx3080-oc-10gb-white-edition-8205.html',
    },
    {
      model: 'tuf oc',
      url: 'https://www.neobyte.es/asus-tuf-rtx-3080-oc-gaming-10gb-7281.html',
    },
    {
      model: 'strix oc',
      url: 'https://www.neobyte.es/asus-rog-strix-rtx-3080-oc-gaming-10gb-7285.html',
    },
    {
      model: 'tuf',
      url: 'https://www.neobyte.es/asus-tuf-rtx-3080-gaming-10gb-7282.html',
    },
  ]),
];
