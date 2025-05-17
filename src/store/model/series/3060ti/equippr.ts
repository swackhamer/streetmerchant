import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for equippr 3060ti series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3060ti', [
    {
      model: 'dual oc',
      url: 'https://www.equippr.de/asus-geforce-rtx-3060-ti-dual-8-gb-gddr6-retail-2066580.html',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3060ti', [
    {
      model: 'ichill x3',
      url: 'https://www.equippr.de/inno3d-geforce-rtx-3060-ti-ichill-x3-8-gb-gddr6-2066593.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3060ti', [
    {
      model: 'aorus',
      url: 'https://www.equippr.de/gigabyte-geforce-rtx-3060-ti-aorus-8-gb-gddr6-retail-2066569.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3060ti', [
    {
      model: 'gaming x trio',
      url: 'https://www.equippr.de/msi-geforce-rtx-3060-ti-gaming-x-trio-8-gb-gddr6-retail-2066573.html',
    },
    {
      model: 'ventus 2x',
      url: 'https://www.equippr.de/msi-geforce-rtx-3060-ti-ventus-2x-oc-8-gb-gddr6-retail-2066574.html',
    },
  ]),

];
