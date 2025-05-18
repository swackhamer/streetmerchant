import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for wipoid 3060ti series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3060ti', [
    {
      model: 'tuf',
      url: 'https://www.wipoid.com/asus-tuf-gaming-geforce-rtx-3060-ti-8gb-gddr6.html',
    },
    {
      model: 'strix oc',
      url: 'https://www.wipoid.com/asus-rog-strix-geforce-rtx-3060-ti-oc-8gb-gddr6.html',
    },
    {
      model: 'tuf oc',
      url: 'https://www.wipoid.com/asus-tuf-gaming-geforce-rtx-3060-ti-oc-edition-8gb-gddr6.html',
    },
    {
      model: 'dual oc',
      url: 'https://www.wipoid.com/asus-dual-geforce-rtx-3060-ti-oc-edition-8gb-gddr6.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3060ti', [
    {
      model: 'aorus master',
      url: 'https://www.wipoid.com/gigabyte-aorus-geforce-rtx-3060-ti-master-8gb-gddr6.html',
    },
    {
      model: 'gaming oc',
      url: 'https://www.wipoid.com/gigabyte-geforce-rtx-3060-ti-gaming-oc-8gb-gddr6.html',
    },
    {
      model: 'gaming oc pro',
      url: 'https://www.wipoid.com/gigabyte-geforce-rtx-3060-ti-gaming-pro-oc-8gb-gddr6.html',
    },
    {
      model: 'eagle',
      url: 'https://www.wipoid.com/gigabyte-geforce-rtx-3060-ti-eagle-8gb-gddr6.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3060ti', [
    {
      model: 'gaming x trio',
      url: 'https://www.wipoid.com/msi-geforce-rtx-3060-ti-gaming-x-trio-8gb-gddr6.html',
    },
    {
      model: 'ventus 2x oc',
      url: 'https://www.wipoid.com/msi-geforce-rtx-3060-ti-ventus-2x-oc-8gb-gddr6.html',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3060ti', [
    {
      model: 'twin edge oc',
      url: 'https://www.wipoid.com/zotac-gaming-geforce-rtx-3060-ti-twin-edge-oc-8gb-gddr6.html',
    },
    {
      model: 'twin edge',
      url: 'https://www.wipoid.com/zotac-gaming-geforce-rtx-3060-ti-twin-edge-8gb-gddr6.html',
    },
  ]),

  // Palit Cards
  ...createBrandSeriesLinks('palit', '3060ti', [
    {
      model: 'gaming pro',
      url: 'https://www.wipoid.com/palit-geforce-rtx-3060-ti-gaming-pro-8gb-gddr6.html',
    },
    {
      model: 'dual',
      url: 'https://www.wipoid.com/palit-geforce-rtx-3060-ti-dual-8gb-gddr6.html',
    },
  ]),
];
