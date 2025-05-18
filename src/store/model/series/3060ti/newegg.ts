import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for newegg 3060ti series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3060ti', [
    {
      model: 'strix',
      url: 'https://www.newegg.com/asus-geforce-rtx-3060-ti-rog-strix-rtx3060ti-o8g-gaming/p/N82E16814126470',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126470',
      itemNumber: '14-126-470',
    },
    {
      model: 'tuf',
      url: 'https://www.newegg.com/asus-geforce-rtx-3060-ti-tuf-rtx3060ti-o8g-gaming/p/N82E16814126471',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126471',
      itemNumber: '14-126-471',
    },
    {
      model: 'dual',
      url: 'https://www.newegg.com/asus-geforce-rtx-3060-ti-dual-rtx3060ti-o8g/p/N82E16814126468',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126468',
      itemNumber: '14-126-468',
    },
    {
      model: 'gaming',
      url: 'https://www.newegg.com/asus-geforce-rtx-3060-ti-ko-rtx3060ti-o8g-gaming/p/N82E16814126474',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126474',
      itemNumber: '14-126-474',
    },
    {
      model: 'dual',
      url: 'https://www.newegg.com/asus-geforce-rtx-3060-ti-dual-rtx3060ti-8g/p/N82E16814126480',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126480',
      itemNumber: '14-126-480',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3060ti', [
    {
      model: 'gaming x trio',
      url: 'https://www.newegg.com/msi-geforce-rtx-3060-ti-rtx-3060-ti-gaming-x-trio/p/N82E16814137611',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137611',
      itemNumber: '14-137-611',
    },
    {
      model: 'ventus 2x oc',
      url: 'https://www.newegg.com/msi-geforce-rtx-3060-ti-rtx-3060-ti-ventus-2x-oc/p/N82E16814137612',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137612',
      itemNumber: '14-137-612',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3060ti', [
    {
      model: 'twin edge oc',
      url: 'https://www.newegg.com/zotac-geforce-rtx-3060-ti-zt-a30610h-10m/p/N82E16814500507',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814500507',
      itemNumber: '14-500-507',
    },
    {
      model: 'twin edge',
      url: 'https://www.newegg.com/zotac-geforce-rtx-3060-ti-zt-a30610e-10m/p/N82E16814500506',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814500506',
      itemNumber: '14-500-506',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3060ti', [
    {
      model: 'xc3',
      url: 'https://www.newegg.com/evga-geforce-rtx-3060-ti-08g-p5-3663-kr/p/N82E16814487535',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487535',
      itemNumber: '14-487-535',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.newegg.com/evga-geforce-rtx-3060-ti-08g-p5-3667-kr/p/N82E16814487537',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487537',
      itemNumber: '14-487-537',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3060ti', [
    {
      model: 'aorus',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-3060-ti-gv-n306taorus-m-8gd/p/N82E16814932375',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932375',
      itemNumber: '14-932-375',
    },
    {
      model: 'gaming oc',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-3060-ti-gv-n306tgamingoc-pro-8gd/p/N82E16814932376',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932376',
      itemNumber: '14-932-376',
    },
    {
      model: 'eagle',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-3060-ti-gv-n306teagle-8gd/p/N82E16814932379',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932379',
      itemNumber: '14-932-379',
    },
    {
      model: 'gaming oc',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-3060-ti-gv-n306tgaming-oc-8gd/p/N82E16814932377',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932377',
      itemNumber: '14-932-377',
    },
    {
      model: 'eagle',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-3060-ti-gv-n306teagle-oc-8gd/p/N82E16814932378',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932378',
      itemNumber: '14-932-378',
    },
  ]),
];
