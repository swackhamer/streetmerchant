import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for globaldata 3080 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'ekwb',
      url: 'https://www.globaldata.pt/grafica-gigabyte-geforce-rtx-3070-gaming-oc-8gb-gd6-gv-n3070gam-oc-8g',
    },
    {
      model: 'ekwb',
      url: 'https://www.globaldata.pt/grafica-asus-geforce-rtx-3080-ek-10gd6x-90yv0f60-m0nm00',
    },
    {
      model: 'strix oc',
      url: 'https://www.globaldata.pt/grafica-asus-geforce-rtx-3080-rog-strix-oc-10gd6x-90yv0fa1-m0nm00',
    },
    {
      model: 'strix oc white',
      url: 'https://www.globaldata.pt/grafica-asus-geforce-rtx-3080-rog-strix-oc-white-10gd6x-90yv0fa5-m0nm00',
    },
    {
      model: 'strix white',
      url: 'https://www.globaldata.pt/grafica-asus-geforce-rtx-3080-rog-strix-white-10gd6x-90yv0fa6-m0nm00',
    },
    {
      model: 'tuf',
      url: 'https://www.globaldata.pt/grafica-asus-geforce-rtx-3080-tuf-gaming-10gd6x-90yv0fb0-m0nm00',
    },
    {
      model: 'tuf oc',
      url: 'https://www.globaldata.pt/grafica-asus-geforce-rtx-3080-tuf-gaming-oc-10gd6x-90yv0fb1-m0nm00',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'aorus master',
      url: 'https://www.globaldata.pt/grafica-gigabyte-geforce-rtx-3080-aorus-master-10gb-gd6x-gvn3080aorusm',
    },
    {
      model: 'aorus master',
      url: 'https://www.globaldata.pt/grafica-gigabyte-geforce-rtx-3080-aorus-master-oc-10gb-gd6x-gvn3080am-00-10',
    },
    {
      model: 'aorus xtreme',
      url: 'https://www.globaldata.pt/grafica-gigabyte-geforce-rtx-3080-aorus-xtreme-10gb-gd6x-gvn3080ax-00-10',
    },
    {
      model: 'eagle',
      url: 'https://www.globaldata.pt/grafica-gigabyte-geforce-rtx-3080-eagle-10gb-gd6x-gv-n3080eagle-10gd',
    },
    {
      model: 'eagle oc',
      url: 'https://www.globaldata.pt/grafica-gigabyte-geforce-rtx-3080-eagle-oc-10gb-gd6x-gvn3080eagleoc10gd',
    },
    {
      model: 'gaming oc',
      url: 'https://www.globaldata.pt/grafica-gigabyte-geforce-rtx-3080-gaming-oc-10gb-gd6x-gvn3080gamingoc10g',
    },
    {
      model: 'vision oc',
      url: 'https://www.globaldata.pt/grafica-gigabyte-geforce-rtx-3080-vision-oc-10gb-gd6x-gvn3080visoc-10',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'gaming x trio',
      url: 'https://www.globaldata.pt/grafica-msi-geforce-rtx-3080-gaming-x-trio-10g-4719072762544',
    },
    {
      model: 'suprim x',
      url: 'https://www.globaldata.pt/grafica-msi-geforce-rtx-3080-suprim-x-10g-4719072762537',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.globaldata.pt/grafica-msi-geforce-rtx-3080-ventus-3x-10g-oc-4719072762520',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3080', [
    {
      model: 'amp extreme holo',
      url: 'https://www.globaldata.pt/grafica-zotac-geforce-rtx-3080-amp-extreme-holo-10gb-gd6x-zt-a30800b-10p',
    },
    {
      model: 'amp holo',
      url: 'https://www.globaldata.pt/grafica-zotac-geforce-rtx-3080-amp-holo-10gb-gd6x-zt-a30800f-10p',
    },
    {
      model: 'trinity',
      url: 'https://www.globaldata.pt/grafica-zotac-geforce-rtx-3080-trinity-10gb-gd6x-zt-a30800d-10p',
    },
    {
      model: 'trinity oc',
      url: 'https://www.globaldata.pt/grafica-zotac-geforce-rtx-3080-trinity-oc-10gb-gd6x-zt-a30800j-10p',
    },
  ]),
];
