import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for equippr 3070 series
 */
export const links: Link[] = [
  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3070', [
    {
      model: 'twin edge oc',
      url: 'https://www.equippr.de/zotac-geforce-rtx-3070-twin-edge-oc-8-gb-gddr6-retail-2064130.html',
    },
    {
      model: 'twin edge',
      url: 'https://www.equippr.de/zotac-geforce-rtx-3070-twin-edge-8-gb-gddr6-retail-2060897.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3070', [
    {
      model: 'eagle',
      url: 'https://www.equippr.de/gigabyte-geforce-rtx-3070-eagle-8-gb-gddr6-retail-2063884.html',
    },
    {
      model: 'eagle oc',
      url: 'https://www.equippr.de/gigabyte-geforce-rtx-3070-eagle-oc-8-gb-gddr6-retail-2063882.html',
    },
  ]),
];
