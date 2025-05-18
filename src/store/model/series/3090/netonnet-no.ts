import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for netonnet-no 3090 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'strix oc',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/asus-geforce-rtx-3090-rog-strix-gaming-oc-10g/1017795.11111/',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3090', [
    {
      model: 'vision oc',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/gigabyte-geforce-rtx-3090-vision-oc-24gb/1015516.11111/',
    },
  ]),
];
