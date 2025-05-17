import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for newegg 3060 series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3060', [
    {
      model: 'vision oc',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-3060-gv-n3060vision-oc-12gd/p/N82E16814932401',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932401',
      itemNumber: '14-932-401',
    },
    {
      model: 'eagle',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-3060-gv-n3060eagle-12gd/p/N82E16814932399',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932399',
      itemNumber: '14-932-399',
    },
    {
      model: 'eagle',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-3060-gv-n3060eagle-12gd/p/N82E16814932399',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932399',
      itemNumber: '14-932-399',
    },
    {
      model: 'aorus',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-3060-gv-n3060aorus-e-12gd/p/N82E16814932400',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932400',
      itemNumber: '14-932-400',
    },
    {
      model: 'eagle oc',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-3060-gv-n3060eagle-oc-12gd/p/N82E16814932403',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932403',
      itemNumber: '14-932-403',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3060', [
    {
      model: 'xc black',
      url: 'https://www.newegg.com/evga-geforce-rtx-3060-12g-p5-3655-kr/p/N82E16814487538',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487538',
      itemNumber: '14-487-538',
    },
    {
      model: 'xc gaming',
      url: 'https://www.newegg.com/evga-geforce-rtx-3060-12g-p5-3657-kr/p/N82E16814487539',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487539',
      itemNumber: '14-487-539',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3060', [
    {
      model: 'gaming x trio',
      url: 'https://www.newegg.com/msi-geforce-rtx-3060-rtx-3060-gaming-x-trio-12g/p/N82E16814137629',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137629',
      itemNumber: '14-137-629',
    },
    {
      model: 'gaming x',
      url: 'https://www.newegg.com/msi-geforce-rtx-3060-rtx-3060-gaming-x-12g/p/N82E16814137630',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137630',
      itemNumber: '14-137-630',
    },
    {
      model: 'ventus 3x',
      url: 'https://www.newegg.com/msi-geforce-rtx-3060-rtx-3060-ventus-3x-12g-oc/p/N82E16814137631',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137631',
      itemNumber: '14-137-631',
    },
    {
      model: 'ventus 2x oc',
      url: 'https://www.newegg.com/msi-geforce-rtx-3060-rtx-3060-ventus-2x-12g-oc/p/N82E16814137632',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137632',
      itemNumber: '14-137-632',
    },
    {
      model: 'ventus 2x',
      url: 'https://www.newegg.com/msi-geforce-rtx-3060-rtx-3060-ventus-2x-12g/p/N82E16814137638',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137638',
      itemNumber: '14-137-638',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3060', [
    {
      model: 'tuf oc',
      url: 'https://www.newegg.com/asus-geforce-rtx-3060-tuf-rtx3060-o12g-gaming/p/N82E16814126491',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126491',
      itemNumber: '14-126-491',
    },
    {
      model: 'strix oc',
      url: 'https://www.newegg.com/asus-geforce-rtx-3060-rog-strix-rtx3060-o12g-gaming/p/N82E16814126492',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126492',
      itemNumber: '14-126-492',
    },
    {
      model: 'dual',
      url: 'https://www.newegg.com/asus-geforce-rtx-3060-dual-rtx3060-12g/p/N82E16814126493',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126493',
      itemNumber: '14-126-493',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3060', [
    {
      model: 'twin edge oc',
      url: 'https://www.newegg.com/zotac-geforce-rtx-3060-zt-a30600h-10m/p/N82E16814500508',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814500508',
      itemNumber: '14-500-508',
    },
    {
      model: 'twin edge',
      url: 'https://www.newegg.com/zotac-geforce-rtx-3060-zt-a30600e-10m/p/N82E16814500509',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814500509',
      itemNumber: '14-500-509',
    },
    {
      model: 'twin edge',
      url: 'https://www.newegg.com/zotac-geforce-rtx-3060-zt-a30600e-10m/p/N82E16814500509',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814500509',
      itemNumber: '14-500-509',
    },
  ]),

];
