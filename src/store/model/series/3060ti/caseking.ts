import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for caseking 3060ti series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3060ti', [
    {
      model: 'strix oc',
      url: 'https://www.caseking.de/asus-geforce-rtx-3060-ti-rog-strix-o8g-8192-mb-gddr6-gcas-407.html',
    },
    {
      model: 'dual oc',
      url: 'https://www.caseking.de/asus-geforce-rtx-3060-ti-dual-o8g-8192-mb-gddr6-gcas-410.html',
    },
    {
      model: 'tuf oc',
      url: 'https://www.caseking.de/asus-geforce-rtx-3060-ti-tuf-o8g-8192-mb-gddr6-gcas-412.html',
    },
    {
      model: 'dual',
      url: 'https://www.caseking.de/asus-geforce-rtx-3060-ti-dual-8g-8192-mb-gddr6-gcas-411.html',
    },
    {
      model: 'tuf',
      url: 'https://www.caseking.de/asus-geforce-rtx-3060-ti-tuf-8g-8192-mb-gddr6-gcas-408.html',
    },
    {
      model: 'strix',
      url: 'https://www.caseking.de/asus-geforce-rtx-3060-ti-rog-strix-8g-8192-mb-gddr6-gcas-409.html',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3060ti', [
    {
      model: 'xc gaming',
      url: 'https://www.caseking.de/evga-geforce-rtx-3060-ti-xc-gaming-8192-mb-gddr6-gcev-431.html',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.caseking.de/evga-geforce-rtx-3060-ti-ftw3-ultra-gaming-8192-mb-gddr6-gcev-403.html',
    },
    {
      model: 'ftw3 black',
      url: 'https://www.caseking.de/evga-geforce-rtx-3060-ti-ftw3-black-gaming-8192-mb-gddr6-gcev-430.html',
    },
    {
      model: 'xc black',
      url: 'https://www.caseking.de/evga-geforce-rtx-3060-ti-xc-black-gaming-8192-mb-gddr6-gcev-432.html',
    },
    {
      model: 'ftw3',
      url: 'https://www.caseking.de/evga-geforce-rtx-3060-ti-ftw3-gaming-8192-mb-gddr6-gcev-429.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3060ti', [
    {
      model: 'eagle oc',
      url: 'https://www.caseking.de/gigabyte-geforce-rtx-3060-ti-eagle-oc-8g-8192-mb-gddr6-gcgb-349.html',
    },
    {
      model: 'aorus master',
      url: 'https://www.caseking.de/gigabyte-aorus-geforce-rtx-3060-ti-master-8g-8192-mb-gddr6-gcgb-346.html',
    },
    {
      model: 'gaming oc pro',
      url: 'https://www.caseking.de/gigabyte-geforce-rtx-3060-ti-gaming-oc-pro-8g-8192-mb-gddr6-gcgb-347.html',
    },
    {
      model: 'gaming oc',
      url: 'https://www.caseking.de/gigabyte-geforce-rtx-3060-ti-gaming-oc-8g-8192-mb-gddr6-gcgb-348.html',
    },
    {
      model: 'eagle',
      url: 'https://www.caseking.de/gigabyte-geforce-rtx-3060-ti-eagle-8g-8192-mb-gddr6-gcgb-350.html',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3060ti', [
    {
      model: 'twin x2 oc',
      url: 'https://www.caseking.de/inno3d-geforce-rtx-3060-ti-twin-x2-oc-8192-mb-gddr6-gci3-180.html',
    },
    {
      model: 'ichill x3',
      url: 'https://www.caseking.de/inno3d-geforce-rtx-3060-ti-ichill-x3-8192-mb-gddr6-gci3-179.html',
    },
    {
      model: 'twin x2',
      url: 'https://www.caseking.de/inno3d-geforce-rtx-3060-ti-twin-x2-8192-mb-gddr6-gci3-181.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3060ti', [
    {
      model: 'gaming x trio',
      url: 'https://www.caseking.de/msi-geforce-rtx-3060-ti-gaming-x-trio-8192-mb-gddr6-gcmc-255.html',
    },
    {
      model: 'ventus 2x oc',
      url: 'https://www.caseking.de/msi-geforce-rtx-3060-ti-ventus-2x-oc-8192-mb-gddr6-gcmc-246.html',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.caseking.de/msi-geforce-rtx-3060-ti-ventus-3x-oc-8192-mb-gddr6-gcmc-245.html',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3060ti', [
    {
      model: 'xlr8 epic x',
      url: 'https://www.caseking.de/pny-geforce-rtx-3060-ti-xlr8-gaming-revel-epic-x-8192-mb-gddr6-gcpn-080.html',
    },
    {
      model: 'xlr8 uprising',
      url: 'https://www.caseking.de/pny-geforce-rtx-3060-ti-uprising-8g-8192-mb-gddr6-gcpn-079.html',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3060ti', [
    {
      model: 'twin edge',
      url: 'https://www.caseking.de/zotac-gaming-geforce-rtx-3060-ti-twin-edge-8192-mb-gddr6-gczt-169.html',
    },
    {
      model: 'twin edge oc',
      url: 'https://www.caseking.de/zotac-gaming-geforce-rtx-3060-ti-twin-edge-oc-8192-mb-gddr6-gczt-170.html',
    },
  ]),
];
