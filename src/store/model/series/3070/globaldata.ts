import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for globaldata 3070 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3070', [
    {
      model: 'dual',
      url: 'https://www.globaldata.pt/grafica-asus-geforce-rtx-3070-dual-8gb-gd6-90yv0fq1-m0na00',
    },
    {
      model: 'dual oc',
      url: 'https://www.globaldata.pt/grafica-asus-geforce-rtx-3070-dual-oc-8gb-gd6-90yv0fq0-m0na00',
    },
    {
      model: 'ekwb',
      url: 'https://www.globaldata.pt/grafica-asus-geforce-rtx-3070-ek-8gb-gd6-90yv0fu0-m0na00',
    },
    {
      model: 'strix',
      url: 'https://www.globaldata.pt/grafica-asus-geforce-rtx-3070-rog-strix-8gb-gd6-90yv0fr0-m0na00',
    },
    {
      model: 'strix oc',
      url: 'https://www.globaldata.pt/grafica-asus-geforce-rtx-3070-rog-strix-oc-8gb-gd6-90yv0fr1-m0na00',
    },
    {
      model: 'strix oc white',
      url: 'https://www.globaldata.pt/grafica-asus-geforce-rtx-3070-rog-strix-oc-white-8gb-gd6-90yv0fr5-m0na00',
    },
    {
      model: 'strix white',
      url: 'https://www.globaldata.pt/grafica-asus-geforce-rtx-3070-rog-strix-white-8gb-gd6-90yv0fr6-m0na00',
    },
    {
      model: 'tuf',
      url: 'https://www.globaldata.pt/grafica-asus-geforce-rtx-3070-tuf-gaming-8gb-gd6-90yv0fq7-m0na00',
    },
    {
      model: 'tuf oc',
      url: 'https://www.globaldata.pt/grafica-asus-geforce-rtx-3070-tuf-gaming-oc-8gb-gd6-90yv0fq6-m0na00',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3070', [
    {
      model: 'aorus master',
      url: 'https://www.globaldata.pt/grafica-gigabyte-geforce-rtx-3070-aorus-master-8gb-gd6-gvn3070am-00-11',
    },
    {
      model: 'eagle',
      url: 'https://www.globaldata.pt/grafica-gigabyte-geforce-rtx-3070-eagle-8gb-gd6-gvn3070e-00-10',
    },
    {
      model: 'eagle oc',
      url: 'https://www.globaldata.pt/grafica-gigabyte-geforce-rtx-3070-eagle-oc-8gb-gd6-gvn3070eo-00-10',
    },
    {
      model: 'gaming oc',
      url: 'https://www.globaldata.pt/grafica-gigabyte-geforce-rtx-3070-gaming-oc-8gb-gd6-gv-n3070gam-oc-8g',
    },
    {
      model: 'vision oc',
      url: 'https://www.globaldata.pt/grafica-gigabyte-geforce-rtx-3070-vision-oc-8gb-gd6-gvn3070vo-00-10',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3070', [
    {
      model: 'gaming x trio',
      url: 'https://www.globaldata.pt/grafica-msi-geforce-rtx-3070-gaming-x-trio-8g-912-v390-006',
    },
    {
      model: 'suprim x',
      url: 'https://www.globaldata.pt/grafica-msi-geforce-rtx-3070-suprim-x-8g-4719072763046',
    },
    {
      model: 'ventus 2x',
      url: 'https://www.globaldata.pt/grafica-msi-geforce-rtx-3070-ventus-2x-oc-8g-912-v390-008',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.globaldata.pt/grafica-msi-geforce-rtx-3070-ventus-3x-oc-8g-912-v390-007',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3070', [
    {
      model: 'amp holo',
      url: 'https://www.globaldata.pt/grafica-zotac-geforce-rtx-3070-amp-holo-8gb-gd6-zt-a30700f-10p',
    },
    {
      model: 'twin edge',
      url: 'https://www.globaldata.pt/grafica-zotac-geforce-rtx-3070-twin-edge-8gb-gd6-zt-a30700e-10p',
    },
    {
      model: 'twin edge oc',
      url: 'https://www.globaldata.pt/grafica-zotac-geforce-rtx-3070-twin-edge-oc-8gb-gd6-zt-a30700h-10p',
    },
    {
      model: 'twin edge oc white',
      url: 'https://www.globaldata.pt/grafica-zotac-geforce-rtx-3070-twin-edge-white-oc-8gb-gd6-zt-a30700j-10p',
    },
  ]),
];
