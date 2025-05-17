import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for wipoid 3070 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3070', [
    {
      model: 'strix oc',
      url: 'https://www.wipoid.com/asus-rog-strix-geforce-rtx-3070-oc-8gb-gddr6.html',
    },
    {
      model: 'tuf oc',
      url: 'https://www.wipoid.com/asus-tuf-gaming-geforce-rtx-3070-oc-edition-8gb-gddr6.html',
    },
    {
      model: 'strix',
      url: 'https://www.wipoid.com/asus-rog-strix-geforce-rtx-3070-8gb-gddr6.html',
    },
    {
      model: 'dual oc',
      url: 'https://www.wipoid.com/asus-dual-geforce-rtx-3070-oc-edition-8gb-gddr6.html',
    },
    {
      model: 'dual',
      url: 'https://www.wipoid.com/asus-dual-geforce-rtx-3070-8gb-gddr6.html',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3070', [
    {
      model: 'ftw3 ultra',
      url: 'https://www.wipoid.com/evga-geforce-rtx-3070-ftw3-ultra-gaming-8gb-gddr6.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3070', [
    {
      model: 'aorus master',
      url: 'https://www.wipoid.com/gigabyte-aorus-geforce-rtx-3070-master-8gb-gddr6.html',
    },
    {
      model: 'vision oc',
      url: 'https://www.wipoid.com/gigabyte-geforce-rtx-3070-vision-oc-8gb-gddr6.html',
    },
    {
      model: 'gaming oc',
      url: 'https://www.wipoid.com/gigabyte-geforce-rtx-3070-gaming-oc-8gb-gddr6.html',
    },
    {
      model: 'eagle oc',
      url: 'https://www.wipoid.com/gigabyte-geforce-rtx-3070-eagle-oc-8gb-gddr6.html',
    },
    {
      model: 'vision oc',
      url: 'https://www.wipoid.com/gigabyte-geforce-rtx-3080-eagle-oc-10gb-gddr6x.html',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3070', [
    {
      model: 'amp holo',
      url: 'https://www.wipoid.com/zotac-gaming-geforce-rtx-3070-amp-holo-8gb-gddr6.html',
    },
    {
      model: 'twin edge oc',
      url: 'https://www.wipoid.com/zotac-gaming-geforce-rtx-3070-twin-edge-oc-white-gddr6.html',
    },
    {
      model: 'twin edge oc',
      url: 'https://www.wipoid.com/zotac-gaming-geforce-rtx-3070-twin-edge-oc-8gb-gddr6.html',
    },
    {
      model: 'twin edge',
      url: 'https://www.wipoid.com/zotac-gaming-geforce-rtx-3070-twin-edge-8gb-gddr6.html',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3070', [
    {
      model: 'xlr8 epic x',
      url: 'https://www.wipoid.com/pny-geforce-rtx-3070-xlr8-gaming-epic-x-8gb-gddr6x.html',
    },
    {
      model: 'dual fan',
      url: 'https://www.wipoid.com/pny-geforce-rtx-3070-dual-fan-8gb-gddr6.html',
    },
  ]),

];
