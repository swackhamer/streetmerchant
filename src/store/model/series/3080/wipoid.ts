import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for wipoid 3080 series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'ventus 3x oc',
      url: 'https://www.wipoid.com/msi-geforce-rtx-3080-ventus-3x-10gb-gddr6x.html',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.wipoid.com/msi-geforce-rtx-3080-gaming-x-trio-10gb-gddr6x.html',
    },
    {
      model: 'suprim x',
      url: 'https://www.wipoid.com/msi-geforce-rtx-3080-suprim-x-10gb-gddr6x.html',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'tuf',
      url: 'https://www.wipoid.com/asus-tuf-gaming-geforce-rtx-3080-10gb-gddr6x.html',
    },
    {
      model: 'tuf oc',
      url: 'https://www.wipoid.com/asus-tuf-gaming-geforce-rtx-3080-oc-edition-10gb-gddr6x.html',
    },
    {
      model: 'strix oc',
      url: 'https://www.wipoid.com/asus-rog-strix-geforce-rtx-3080-oc-edition-10gb-gddr6x.html',
    },
    {
      model: 'strix',
      url: 'https://www.wipoid.com/asus-rog-strix-geforce-rtx-3080-10gb-gddr6x.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'gaming oc',
      url: 'https://www.wipoid.com/gigabyte-geforce-rtx-3080-gaming-oc-10gb-gddr6x.html',
    },
    {
      model: 'vision oc',
      url: 'https://www.wipoid.com/gigabyte-geforce-rtx-3080-vision-oc-10gb-gddr6x.html',
    },
    {
      model: 'aorus master',
      url: 'https://www.wipoid.com/gigabyte-aorus-geforce-rtx-3080-master-10gb-gddr6x.html',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080', [
    {
      model: 'xc3 black',
      url: 'https://www.wipoid.com/evga-geforce-rtx-3080-xc3-black-gaming-10gb-gddr6x.html',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.wipoid.com/evga-geforce-rtx-3080-xc3-ultra-gaming-10gb-gddr6x.html',
    },
    {
      model: 'xc3',
      url: 'https://www.wipoid.com/evga-geforce-rtx-3080-xc3-black-gaming-10gb-gddr6x.html',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.wipoid.com/evga-geforce-rtx-3080-ftw3-ultra-gaming-10gb-gddr6x.html',
    },
    {
      model: 'ftw3',
      url: 'https://www.wipoid.com/evga-geforce-rtx-3080-ftw3-ultra-gaming-10gb-gddr6x.html',
    },
    {
      model: 'ftw3',
      url: 'https://www.wipoid.com/evga-geforce-rtx-3080-ftw3-gaming-10gb-gddr6x.html',
    },
    {
      model: 'xc3',
      url: 'https://www.wipoid.com/evga-geforce-rtx-3080-xc3-gaming-10gb-gddr6x.html',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3080', [
    {
      model: 'trinity',
      url: 'https://www.wipoid.com/zotac-gaming-geforce-rtx-3080-trinity-10gb-gddr6x.html',
    },
    {
      model: 'trinity oc',
      url: 'https://www.wipoid.com/zotac-gaming-geforce-rtx-3080-trinity-oc-10gb-gddr6x.html',
    },
    {
      model: 'amp holo',
      url: 'https://www.wipoid.com/zotac-gaming-geforce-rtx-3080-amp-holo-10gb-gddr6x.html',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3080', [
    {
      model: 'xlr8 revel',
      url: 'https://www.wipoid.com/pny-geforce-rtx-3080-10gb-xlr8-gaming-epic-x-rgb-10gb-gddr6x.html',
    },
    {
      model: 'xlr8 revel',
      url: 'https://www.wipoid.com/pny-geforce-rtx-3080-10gb-xlr8-gaming-epic-x-rgb-10gb-gddr6x.html',
    },
  ]),
];
