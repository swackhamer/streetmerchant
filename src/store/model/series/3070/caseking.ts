import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for caseking 3070 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3070', [
    {
      model: 'dual',
      url: 'https://www.caseking.de/asus-geforce-rtx-3070-dual-8g-8192-mb-gddr6-gcas-404.html',
    },
    {
      model: 'tuf oc',
      url: 'https://www.caseking.de/asus-geforce-rtx-3070-tuf-o8g-8192-mb-gddr6-gcas-406.html',
    },
    {
      model: 'strix oc',
      url: 'https://www.caseking.de/asus-geforce-rtx-3070-rog-strix-o8g-8192-mb-gddr6-gcas-403.html',
    },
    {
      model: 'dual oc',
      url: 'https://www.caseking.de/asus-geforce-rtx-3070-dual-o8g-8192-mb-gddr6-gcas-405.html',
    },
    {
      model: 'strix',
      url: 'https://www.caseking.de/asus-geforce-rtx-3070-rog-strix-8g-8192-mb-gddr6-gcas-415.html',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3070', [
    {
      model: 'xc3 black',
      url: 'https://www.caseking.de/evga-geforce-rtx-3070-xc3-black-gaming-8192-mb-gddr6-gcev-424.html',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.caseking.de/evga-geforce-rtx-3070-xc3-ultra-gaming-8192-mb-gddr6-gcev-426.html',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.caseking.de/evga-geforce-rtx-3070-ftw3-ultra-8192-mb-gddr6-gcev-428.html',
    },
    {
      model: 'xc3',
      url: 'https://www.caseking.de/evga-geforce-rtx-3070-xc3-8192-mb-gddr6-gcev-425.html',
    },
    {
      model: 'ftw3',
      url: 'https://www.caseking.de/evga-geforce-rtx-3070-ftw3-8192-mb-gddr6-gcev-427.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3070', [
    {
      model: 'gaming oc',
      url: 'https://www.caseking.de/gigabyte-geforce-rtx-3070-gaming-oc-8g-8192-mb-gddr6-gcgb-338.html',
    },
    {
      model: 'aorus master',
      url: 'https://www.caseking.de/gigabyte-aorus-geforce-rtx-3070-master-8g-8192-mb-gddr6-gcgb-343.html',
    },
    {
      model: 'vision oc',
      url: 'https://www.caseking.de/gigabyte-geforce-rtx-3070-vision-oc-8g-8192-mb-gddr6-gcgb-344.html',
    },
    {
      model: 'eagle',
      url: 'https://www.caseking.de/gigabyte-geforce-rtx-3070-eagle-8g-8192-mb-gddr6-gcgb-340.html',
    },
    {
      model: 'eagle oc',
      url: 'https://www.caseking.de/gigabyte-geforce-rtx-3070-eagle-oc-8g-8192-mb-gddr6-gcgb-339.html',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3070', [
    {
      model: 'twin x2',
      url: 'https://www.caseking.de/inno3d-geforce-rtx-3070-twin-x2-8192-mb-gddr6-gci3-176.html',
    },
    {
      model: 'ichill x3',
      url: 'https://www.caseking.de/inno3d-geforce-rtx-3070-ichill-x3-8192-mb-gddr6-gci3-174.html',
    },
    {
      model: 'ichill x4',
      url: 'https://www.caseking.de/inno3d-geforce-rtx-3070-ichill-x4-8192-mb-gddr6-gci3-173.html',
    },
    {
      model: 'twin x2 oc',
      url: 'https://www.caseking.de/inno3d-geforce-rtx-3070-twin-x2-oc-8192-mb-gddr6-gci3-175.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3070', [
    {
      model: 'gaming x trio',
      url: 'https://www.caseking.de/msi-geforce-rtx-3070-gaming-x-trio-8192-mb-gddr6-gcmc-250.html',
    },
    {
      model: 'suprim',
      url: 'https://www.caseking.de/msi-geforce-rtx-3070-suprim-8g-8192-mb-gddr6-gcmc-256.html',
    },
    {
      model: 'ventus 2x oc',
      url: 'https://www.caseking.de/msi-geforce-rtx-3070-ventus-2x-oc-8192-mb-gddr6-gcmc-249.html',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.caseking.de/msi-geforce-rtx-3070-ventus-3x-oc-8192-mb-gddr6-gcmc-251.html',
    },
    {
      model: 'suprim x',
      url: 'https://www.caseking.de/msi-geforce-rtx-3070-suprim-x-8g-8192-mb-gddr6-gcmc-254.html',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3070', [
    {
      model: 'xlr8 epic x',
      url: 'https://www.caseking.de/pny-geforce-rtx-3070-xlr8-gaming-revel-epic-x-rgb-8192-mb-gddr6-gcpn-078.html',
    },
    {
      model: 'dual fan',
      url: 'https://www.caseking.de/pny-geforce-rtx-3070-dual-fan-8192-mb-gddr6-gcpn-077.html',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3070', [
    {
      model: 'twin edge',
      url: 'https://www.caseking.de/zotac-gaming-geforce-rtx-3070-twin-edge-8192-mb-gddr6-gczt-164.html',
    },
    {
      model: 'twin edge oc',
      url: 'https://www.caseking.de/zotac-gaming-geforce-rtx-3070-twin-edge-oc-8192-mb-gddr6-gczt-168.html',
    },
    {
      model: 'twin edge oc white',
      url: 'https://www.caseking.de/zotac-gaming-geforce-rtx-3070-twin-edge-oc-white-8192-mb-gddr6-gczt-171.html',
    },
  ]),

];
