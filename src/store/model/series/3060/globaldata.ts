import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for globaldata 3060 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3060', [
    {
      model: 'strix',
      url: 'https://www.globaldata.pt/grafica-asus-geforce-rtx-3060-rog-strix-12gb-gd6-90yv0gc4-m0na00',
    },
    {
      model: 'strix oc',
      url: 'https://www.globaldata.pt/grafica-asus-geforce-rtx-3060-rog-strix-oc-12gb-gd6-90yv0gc2-m0na00',
    },
    {
      model: 'tuf',
      url: 'https://www.globaldata.pt/grafica-asus-geforce-rtx-3060-tuf-gaming-12gb-gd6-90yv0gc1-m0na00',
    },
    {
      model: 'tuf oc',
      url: 'https://www.globaldata.pt/grafica-asus-geforce-rtx-3060-tuf-gaming-oc-12gb-gd6-90yv0gc0-m0na00',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3060', [
    {
      model: 'twin edge',
      url: 'https://www.globaldata.pt/grafica-zotac-geforce-rtx-3060-twin-edge-12gb-gd6-zt-a30600e-10m',
    },
    {
      model: 'amp holo',
      url: 'https://www.globaldata.pt/grafica-zotac-geforce-rtx-3060-amp-edition-white-12gb-gd6-zt-a30600f-10p',
    },
    {
      model: 'twin edge oc',
      url: 'https://www.globaldata.pt/grafica-zotac-geforce-rtx-3060-twin-edge-oc-12gb-gd6-zt-a30600h-10m',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3060', [
    {
      model: 'gaming x trio',
      url: 'https://www.globaldata.pt/grafica-msi-geforce-rtx-3060-gaming-x-trio-12g-912-v390-081',
    },
    {
      model: 'gaming x',
      url: 'https://www.globaldata.pt/grafica-msi-geforce-rtx-3060-gaming-x-12g-912-v397-037',
    },
    {
      model: 'ventus 2x',
      url: 'https://www.globaldata.pt/grafica-msi-geforce-rtx-3060-ventus-2x-12g-oc-912-v397-039',
    },
    {
      model: 'ventus 3x',
      url: 'https://www.globaldata.pt/grafica-msi-geforce-rtx-3060-ventus-3x-12g-oc-912-v397-038',
    },
    {
      model: 'ventus 2x',
      url: 'https://www.globaldata.pt/grafica-msi-geforce-rtx-3060-ventus-2x-12g-4719072803407',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3060', [
    {
      model: 'gaming oc',
      url: 'https://www.globaldata.pt/grafica-gigabyte-geforce-rtx-3060-gaming-oc-12gb-gd6-gvn3060go-00-10',
    },
  ]),
];
