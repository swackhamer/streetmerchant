import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for caseking 3080 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'strix',
      url: 'https://www.caseking.de/asus-geforce-rtx-3080-rog-strix-10g-10240-mb-gddr6x-gcas-400.html',
    },
    {
      model: 'strix oc',
      url: 'https://www.caseking.de/asus-geforce-rtx-3080-rog-strix-o10g-10240-mb-gddr6x-gcas-399.html',
    },
    {
      model: 'tuf',
      url: 'https://www.caseking.de/asus-geforce-rtx-3080-tuf-gaming-10g-10240-mb-gddr6x-gcas-394.html',
    },
    {
      model: 'tuf oc',
      url: 'https://www.caseking.de/asus-geforce-rtx-3080-tuf-gaming-o10g-10240-mb-gddr6x-gcas-396.html',
    },
    {
      model: 'ekwb',
      url: 'https://www.caseking.de/asus-geforce-rtx-3080-ekwb-10g-10240-mb-gddr6x-gcas-413.html',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080', [
    {
      model: 'ftw3',
      url: 'https://www.caseking.de/evga-geforce-rtx-3080-ftw3-gaming-10240-mb-gddr6x-gcev-416.html',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.caseking.de/evga-geforce-rtx-3080-ftw3-ultra-gaming-10240-mb-gddr6x-gcev-417.html',
    },
    {
      model: 'xc3',
      url: 'https://www.caseking.de/evga-geforce-rtx-3080-xc3-gaming-10240-mb-gddr6x-gcev-415.html',
    },
    {
      model: 'xc3 black',
      url: 'https://www.caseking.de/evga-geforce-rtx-3080-xc3-black-gaming-10240-mb-gddr6x-gcev-414.html',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.caseking.de/evga-geforce-rtx-3080-xc3-ultra-gaming-10240-mb-gddr6x-gcev-423.html',
    },
    {
      model: 'xc3 ultra hybrid',
      url: 'https://www.caseking.de/evga-geforce-rtx-3080-xc3-ultra-hybrid-gaming-10240-mb-gddr6x-gcev-435.html',
    },
    {
      model: 'ftw3 ultra hybrid',
      url: 'https://www.caseking.de/evga-geforce-rtx-3080-ftw3-ultra-hybrid-gaming-10240-mb-gddr6x-gcev-436.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'aorus master',
      url: 'https://www.caseking.de/gigabyte-aorus-geforce-rtx-3080-master-10g-10240-mb-gddr6x-gcgb-331.html',
    },
    {
      model: 'eagle oc',
      url: 'https://www.caseking.de/gigabyte-geforce-rtx-3080-eagle-oc-10g-10240-mb-gddr6x-gcgb-326.html',
    },
    {
      model: 'gaming oc',
      url: 'https://www.caseking.de/gigabyte-geforce-rtx-3080-gaming-oc-10g-10240-mb-gddr6x-gcgb-327.html',
    },
    {
      model: 'vision oc',
      url: 'https://www.caseking.de/gigabyte-geforce-rtx-3080-vision-oc-10g-10240-mb-gddr6x-gcgb-332.html',
    },
    {
      model: 'aorus xtreme',
      url: 'https://www.caseking.de/gigabyte-aorus-geforce-rtx-3080-xtreme-10g-10240-mb-gddr6x-gcgb-333.html',
    },
    {
      model: 'aorus xtreme waterforce wb',
      url: 'https://www.caseking.de/gigabyte-aorus-geforce-rtx-3080-xtreme-waterforce-wb-10g-10240-mb-gddr6x-gcgb-352.html',
    },
    {
      model: 'aorus xtreme waterforce',
      url: 'https://www.caseking.de/gigabyte-aorus-geforce-rtx-3080-xtreme-waterforce-10g-10240-mb-gddr6x-gcgb-351.html',
    },
    {
      model: 'eagle',
      url: 'https://www.caseking.de/gigabyte-geforce-rtx-3080-eagle-10g-10240-mb-gddr6x-gcgb-353.html',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3080', [
    {
      model: 'ichill x3',
      url: 'https://www.caseking.de/inno3d-geforce-rtx-3080-ichill-x3-10240-mb-gddr6x-gci3-170.html',
    },
    {
      model: 'ichill x4',
      url: 'https://www.caseking.de/inno3d-geforce-rtx-3080-ichill-x4-10240-mb-gddr6x-gci3-169.html',
    },
    {
      model: 'twin x2 oc',
      url: 'https://www.caseking.de/inno3d-geforce-rtx-3080-twin-x2-oc-10240-mb-gddr6x-gci3-171.html',
    },
    {
      model: 'ichill frostbite',
      url: 'https://www.caseking.de/inno3d-geforce-rtx-3080-ichill-frostbite-10240-mb-gddr6x-gci3-177.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'gaming x trio',
      url: 'https://www.caseking.de/msi-geforce-rtx-3080-gaming-x-trio-10g-10240-mb-gddr6x-gcmc-248.html',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.caseking.de/msi-geforce-rtx-3080-ventus-3x-10g-oc-10240-mb-gddr6x-gcmc-247.html',
    },
    {
      model: 'suprim x',
      url: 'https://www.caseking.de/msi-geforce-rtx-3080-suprim-x-10g-10240-mb-gddr6x-gcmc-253.html',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3080', [
    {
      model: 'xlr8 revel',
      url: 'https://www.caseking.de/pny-geforce-rtx-3080-xlr8-gaming-epic-x-rgb-10240-mb-gddr6x-gcpn-075.html',
    },
    {
      model: 'xlr8 revel',
      url: 'https://www.caseking.de/pny-geforce-rtx-3080-xlr8-gaming-revel-epic-x-rgb-10240-mb-gddr6x-gcpn-076.html',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3080', [
    {
      model: 'amp holo',
      url: 'https://www.caseking.de/zotac-gaming-geforce-rtx-3080-amp-holo-10240-mb-gddr6x-gczt-166.html',
    },
    {
      model: 'trinity oc',
      url: 'https://www.caseking.de/zotac-gaming-geforce-rtx-3080-trinity-oc-10240-mb-gddr6x-gczt-167.html',
    },
    {
      model: 'trinity',
      url: 'https://www.caseking.de/zotac-gaming-geforce-rtx-3080-trinity-10240-mb-gddr6x-gczt-163.html',
    },
  ]),

];
