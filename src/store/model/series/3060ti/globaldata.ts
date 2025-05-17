import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for globaldata 3060ti series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3060ti', [
    {
      model: 'aorus master',
      url: 'https://www.globaldata.pt/grafica-gigabyte-geforce-rtx-3060-ti-aorus-master-8gb-gd6-gvn306tam-00-10',
    },
    {
      model: 'eagle',
      url: 'https://www.globaldata.pt/grafica-gigabyte-geforce-rtx-3060-ti-eagle-8gb-gd6-gvn306te-00-10',
    },
    {
      model: 'eagle oc',
      url: 'https://www.globaldata.pt/grafica-gigabyte-geforce-rtx-3060-ti-eagle-oc-8gb-gd6-gvn306teo-00-10',
    },
    {
      model: 'gaming oc',
      url: 'https://www.globaldata.pt/grafica-gigabyte-geforce-rtx-3060-ti-gaming-oc-8gb-gd6-gvn306tgo-00-10',
    },
    {
      model: 'gaming oc pro',
      url: 'https://www.globaldata.pt/grafica-gigabyte-geforce-rtx-3060-ti-gaming-oc-pro-8gb-gd6-gvn306tgop-00-10',
    },
    {
      model: 'vision oc',
      url: 'https://www.globaldata.pt/grafica-gigabyte-geforce-rtx-3060-ti-vision-oc-8gb-gd6-gv-n306tvisoc-8gd',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3060ti', [
    {
      model: 'ventus 3x',
      url: 'https://www.globaldata.pt/grafica-msi-geforce-rtx-3060-ti-ventus-3x-oc-8g-4719072763152',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.globaldata.pt/grafica-msi-geforce-rtx-3060-ti-gaming-x-trio-8g-912-v390-053',
    },
    {
      model: 'ventus 2x',
      url: 'https://www.globaldata.pt/grafica-msi-geforce-rtx-3060-ti-ventus-2x-ocv1-8g-912-v397-003',
    },
    {
      model: 'gaming x',
      url: 'https://www.globaldata.pt/grafica-msi-geforce-rtx-3060-ti-gaming-x-8g-4719072781767',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3060ti', [
    {
      model: 'strix',
      url: 'https://www.globaldata.pt/grafica-asus-geforce-rtx-3060-ti-rog-strix-8gb-gd6-90yv0g00-m0na00',
    },
    {
      model: 'dual',
      url: 'https://www.globaldata.pt/grafica-asus-geforce-rtx-3060-ti-dual-8gb-gd6-90yv0g13-m0na00',
    },
    {
      model: 'dual oc',
      url: 'https://www.globaldata.pt/grafica-asus-geforce-rtx-3060-ti-dual-oc-8gb-gd6-90yv0g12-m0na00',
    },
    {
      model: 'tuf',
      url: 'https://www.globaldata.pt/grafica-asus-geforce-rtx-3060-ti-tuf-gaming-8gb-gd6-90yv0g11-m0na00',
    },
    {
      model: 'tuf oc',
      url: 'https://www.globaldata.pt/grafica-asus-geforce-rtx-3060-ti-tuf-gaming-oc-8gb-gd6-90yv0g10-m0na00',
    },
    {
      model: 'strix oc',
      url: 'https://www.globaldata.pt/grafica-asus-geforce-rtx-3060-ti-rog-strix-oc-8gb-gd6-90yv0g02-m0na00',
    },
    {
      model: 'dual mini oc',
      url: 'https://www.globaldata.pt/grafica-asus-geforce-rtx-3060-ti-dual-mini-oc-8gb-gd6-90yv0ft0-m0na00',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3060ti', [
    {
      model: 'twin edge',
      url: 'https://www.globaldata.pt/grafica-zotac-geforce-rtx-3060-ti-twin-edge-8gb-gd6-zt-a30610e-10m',
    },
    {
      model: 'twin edge oc',
      url: 'https://www.globaldata.pt/grafica-zotac-geforce-rtx-3060-ti-twin-edge-oc-8gb-gd6-zt-a30610h-10m',
    },
  ]),

];
