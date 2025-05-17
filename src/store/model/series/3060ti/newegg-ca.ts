import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for newegg-ca 3060ti series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3060ti', [
    {
      model: 'tuf oc',
      url: 'https://www.newegg.ca/asus-geforce-rtx-3060-ti-tuf-rtx3060ti-o8g-gaming/p/N82E16814126471',
      itemNumber: '14-126-471',
    },
    {
      model: 'dual oc',
      url: 'https://www.newegg.ca/asus-geforce-rtx-3060-ti-dual-rtx3060ti-o8g/p/N82E16814126468',
      itemNumber: '14-126-468',
    },
    {
      model: 'strix oc',
      url: 'https://www.newegg.ca/asus-geforce-rtx-3060-ti-rog-strix-rtx3060ti-o8g-gaming/p/N82E16814126470',
      itemNumber: '14-126-470',
    },
    {
      model: 'ko',
      url: 'https://www.newegg.ca/asus-geforce-rtx-3060-ti-ko-rtx3060ti-o8g-gaming/p/N82E16814126474',
      itemNumber: '14-126-474',
    },
    {
      model: 'dual',
      url: 'https://www.newegg.ca/asus-geforce-rtx-3060-ti-dual-rtx3060ti-8g/p/N82E16814126480',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3060ti', [
    {
      model: 'gaming oc',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3060-ti-gv-n306tgaming-oc-8gd/p/N82E16814932377',
      itemNumber: '14-932-377',
    },
    {
      model: 'aorus master',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3060-ti-gv-n306taorus-m-8gd/p/N82E16814932375',
      itemNumber: '14-932-375',
    },
    {
      model: 'gaming oc pro',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3060-ti-gv-n306tgamingoc-pro-8gd/p/N82E16814932376',
      itemNumber: '14-932-376',
    },
    {
      model: 'eagle oc',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3060-ti-gv-n306teagle-oc-8gd/p/N82E16814932378',
      itemNumber: '14-932-378',
    },
    {
      model: 'eagle',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3060-ti-gv-n306teagle-8gd/p/N82E16814932379',
      itemNumber: '14-932-379',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3060ti', [
    {
      model: 'xc gaming',
      url: 'https://www.newegg.ca/evga-geforce-rtx-3060-ti-08g-p5-3663-kr/p/N82E16814487535',
      itemNumber: '14-487-535',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.newegg.ca/evga-geforce-rtx-3060-ti-08g-p5-3667-kr/p/N82E16814487537',
      itemNumber: '14-487-537',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3060ti', [
    {
      model: 'ventus 2x oc',
      url: 'https://www.newegg.ca/msi-geforce-rtx-3060-ti-rtx-3060-ti-ventus-2x-oc/p/N82E16814137612',
      itemNumber: '14-137-612',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.newegg.ca/msi-geforce-rtx-3060-ti-rtx-3060-ti-gaming-x-trio/p/N82E16814137611',
      itemNumber: '14-137-611',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3060ti', [
    {
      model: 'twin edge',
      url: 'https://www.newegg.ca/zotac-geforce-rtx-3060-ti-zt-a30610e-10m/p/N82E16814500506',
      itemNumber: '14-500-506',
    },
    {
      model: 'twin edge oc',
      url: 'https://www.newegg.ca/zotac-geforce-rtx-3060-ti-zt-a30610h-10m/p/N82E16814500507',
      itemNumber: '14-500-507',
    },
  ]),

];
