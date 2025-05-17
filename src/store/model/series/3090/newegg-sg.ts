import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for newegg-sg 3090 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'tuf',
      url: 'https://www.newegg.com/global/sg-en/asus-geforce-rtx-3090-tuf-rtx3090-24g-gaming/p/N82E16814126455',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126455',
      itemNumber: '14-126-455',
    },
    {
      model: 'strix',
      url: 'https://www.newegg.com/global/sg-en/asus-geforce-rtx-3090-rog-strix-rtx3090-o24g-gaming/p/N82E16814126456',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126456',
      itemNumber: '14-126-456',
    },
    {
      model: 'ekwb',
      url: 'https://www.newegg.com/global/sg-en/asus-geforce-rtx-3090-rtx3090-24g-ek/p/N82E16814126485',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126485',
    },
    {
      model: 'tuf oc',
      url: 'https://www.newegg.com/global/sg-en/asus-geforce-rtx-3090-tuf-rtx3090-o24g-gaming/p/N82E16814126454',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126454',
    },
    {
      model: 'strix white',
      url: 'https://www.newegg.com/global/sg-en/asus-geforce-rtx-3090-rog-strix-rtx3090-o24g-white/p/N82E16814126482',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126482',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3090', [
    {
      model: 'gaming x trio',
      url: 'https://www.newegg.com/global/sg-en/msi-geforce-rtx-3090-rtx-3090-gaming-x-trio-24g/p/N82E16814137595',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137595',
      itemNumber: '14-137-595',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.newegg.com/global/sg-en/msi-geforce-rtx-3090-rtx-3090-ventus-3x-24g-oc/p/N82E16814137596',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137596',
      itemNumber: '14-137-596',
    },
    {
      model: 'ventus 3x',
      url: 'https://www.newegg.com/global/sg-en/msi-geforce-rtx-3090-rtx-3090-ventus-3x-24g/p/N82E16814137599',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137599',
      itemNumber: '14-137-599',
    },
    {
      model: 'suprim x',
      url: 'https://www.newegg.com/global/sg-en/msi-geforce-rtx-3090-rtx3090-suprim-x-24g/p/N82E16814137610',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137610',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3090', [
    {
      model: 'trinity',
      url: 'https://www.newegg.com/global/sg-en/zotac-geforce-rtx-3090-zt-a30900d-10p/p/N82E16814500503',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814500503',
      itemNumber: '14-500-503',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3090', [
    {
      model: 'ftw3',
      url: 'https://www.newegg.com/global/sg-en/evga-geforce-rtx-3090-24g-p5-3985-kr/p/N82E16814487525',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487525',
      itemNumber: '14-487-525',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.newegg.com/global/sg-en/evga-geforce-rtx-3090-24g-p5-3975-kr/p/N82E16814487524',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487524',
      itemNumber: '14-487-524',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.newegg.com/global/sg-en/evga-geforce-rtx-3090-24g-p5-3987-kr/p/N82E16814487526',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487526',
      itemNumber: '14-487-526',
    },
    {
      model: 'xc3 black',
      url: 'https://www.newegg.com/global/sg-en/evga-geforce-rtx-3090-24g-p5-3971-kr/p/N82E16814487527',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487527',
      itemNumber: '14-487-527',
    },
    {
      model: 'xc3',
      url: 'https://www.newegg.com/global/sg-en/evga-geforce-rtx-3090-24g-p5-3973-kr/p/N82E16814487523',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487523',
      itemNumber: '14-487-523',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3090', [
    {
      model: 'gaming',
      url: 'https://www.newegg.com/global/sg-en/gigabyte-geforce-rtx-3090-gv-n3090gaming-oc-24gd/p/N82E16814932327',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932327',
      itemNumber: '14-932-327',
    },
    {
      model: 'eagle',
      url: 'https://www.newegg.com/global/sg-en/gigabyte-geforce-rtx-3090-gv-n3090eagle-oc-24gd/p/N82E16814932328',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932328',
      itemNumber: '14-932-328',
    },
    {
      model: 'aorus master',
      url: 'https://www.newegg.com/global/sg-en/gigabyte-geforce-rtx-3090-gv-n3090aorus-m-24gd/p/N82E16814932341',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932341',
    },
    {
      model: 'aorus xtreme waterforce',
      url: 'https://www.newegg.com/global/sg-en/gigabyte-geforce-rtx-3090-gv-n3090aorusx-w-24gd/p/N82E16814932387',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932387',
    },
    {
      model: 'aorus xtreme waterforce wb',
      url: 'https://www.newegg.com/global/sg-en/gigabyte-geforce-rtx-3090-gv-n3090aorusx-wb-24gd/p/N82E16814932386',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932386',
    },
    {
      model: 'aorus xtreme',
      url: 'https://www.newegg.com/global/sg-en/gigabyte-geforce-rtx-3090-gv-n3090aorus-x-24gd/p/N82E16814932340',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932340',
    },
    {
      model: 'vision oc',
      url: 'https://www.newegg.com/global/sg-en/gigabyte-geforce-rtx-3090-gv-n3090vision-oc-24gd/p/N82E16814932365',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932365',
    },
    {
      model: 'eagle',
      url: 'https://www.newegg.com/global/sg-en/gigabyte-geforce-rtx-3090-gv-n3090eagle-24gd/p/N82E16814932366',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932366',
    },
  ]),

];
