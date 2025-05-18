import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for pccomponentes 3080 series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'eagle oc',
      url: 'https://www.pccomponentes.com/gigabyte-geforce-rtx-3080-eagle-oc-10g-10gb-gddr6x',
    },
    {
      model: 'gaming oc',
      url: 'https://www.pccomponentes.com/gigabyte-geforce-rtx-3080-gaming-oc-10g-10gb-gddr6x',
    },
    {
      model: 'vision oc',
      url: 'https://www.pccomponentes.com/gigabyte-geforce-rtx-3080-vision-oc-10gb-gddr6x',
    },
    {
      model: 'aorus master',
      url: 'https://www.pccomponentes.com/gigabyte-aorus-geforce-rtx-3080-master-10gb-gddr6x',
    },
    {
      model: 'aorus xtreme',
      url: 'https://www.pccomponentes.com/gigabyte-aorus-geforce-rtx-3080-xtreme-10gb-gddr6x',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'ventus 3x oc',
      url: 'https://www.pccomponentes.com/msi-geforce-rtx-3080-ventus-3x-oc-10gb-gddr6x',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.pccomponentes.com/msi-geforce-rtx-3080-gaming-x-trio-10gb-gddr6x',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'tuf',
      url: 'https://www.pccomponentes.com/asus-tuf-geforce-rtx-3080-10gb-gddr6x',
    },
    {
      model: 'tuf oc',
      url: 'https://www.pccomponentes.com/asus-tuf-geforce-rtx-3080-oc-10gb-gddr6x',
    },
    {
      model: 'strix oc',
      url: 'https://www.pccomponentes.com/asus-rog-strix-geforce-rtx-3080-10g-gaming-oc-10gb-gddr6x',
    },
    {
      model: 'strix',
      url: 'https://www.pccomponentes.com/asus-rog-strix-geforce-rtx-3080-gaming-10gb-gddr6x',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080', [
    {
      model: 'xc3 black',
      url: 'https://www.pccomponentes.com/evga-geforce-rtx-3080-xc3-black-gaming-10gb-gddr6x',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.pccomponentes.com/evga-geforce-rtx-3080-xc3-ultra-gaming-10gb-gddr6x',
    },
    {
      model: 'xc3',
      url: 'https://www.pccomponentes.com/evga-geforce-rtx-3080-xc3-gaming-10gb-gddr6x',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.pccomponentes.com/evga-geforce-rtx-3080-ftw3-ultra-gaming-10gb-gddr6x',
    },
    {
      model: 'ftw3',
      url: 'https://www.pccomponentes.com/evga-geforce-rtx-3080-ftw3-gaming-10gb-gddr6x',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3080', [
    {
      model: 'trinity',
      url: 'https://www.pccomponentes.com/zotac-gaming-geforce-rtx-3080-trinity-10gb-gddr6x',
    },
    {
      model: 'trinity oc',
      url: 'https://www.pccomponentes.com/zotac-gaming-geforce-rtx-3080-trinity-oc-10gb-gddr6x',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3080', [
    {
      model: 'xlr8 revel',
      url: 'https://www.pccomponentes.com/pny-geforce-rtx-3080-xlr8-gaming-epic-x-rgb-10gb-gddr6x',
    },
    {
      model: 'xlr8 revel',
      url: 'https://www.pccomponentes.com/pny-geforce-rtx-3080-epic-x-rgb-triple-fan-xlr8-gaming-edition-10gb-gddr6x',
    },
  ]),
];
