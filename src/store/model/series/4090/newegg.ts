import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for newegg 4090 series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '4090', [
    {
      model: 'aorus master 24g',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-4090-gv-n4090aorus-m-24gd/p/N82E16814932555',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932555',
      itemNumber: 'N82E16814932555',
    },
    {
      model: 'aorus xtreme waterforce 24g',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-4090-gv-n4090aorusx-w-24gd/p/N82E16814932556',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932556',
      itemNumber: 'N82E16814932556',
    },
    {
      model: 'gaming oc',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/N82E16814932550',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932550',
      itemNumber: 'N82E16814932550',
    },
    {
      model: 'windforce',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-4090-gv-n4090wf3-24gd/p/N82E16814932554',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932554',
      itemNumber: 'N82E16814932554',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '4090', [
    {
      model: 'gaming x trio',
      url: 'https://www.newegg.com/msi-geforce-rtx-4090-rtx-4090-gaming-x-trio-24g/p/N82E16814137761',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137761',
      itemNumber: 'N82E16814137761',
    },
    {
      model: 'gaming trio',
      url: 'https://www.newegg.com/msi-geforce-rtx-4090-rtx-4090-gaming-trio-24g/p/N82E16814137762',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137762',
      itemNumber: 'N82E16814137762',
    },
    {
      model: 'suprim',
      url: 'https://www.newegg.com/msi-geforce-rtx-4090-rtx-4090-suprim-liquid-x-24g/p/N82E16814137759',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137759',
      itemNumber: 'N82E16814137759',
    },
    {
      model: 'suprim x',
      url: 'https://www.newegg.com/msi-geforce-rtx-4090-rtx-4090-suprim-liquid-x-24g/p/N82E16814137760',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137760',
      itemNumber: 'N82E16814137760',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '4090', [
    {
      model: 'strix',
      url: 'https://www.newegg.com/asus-geforce-rtx-4090-rog-strix-rtx4090-24g-gaming/p/N82E16814126600',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126600',
      itemNumber: 'N82E16814126600',
    },
    {
      model: 'strix oc',
      url: 'https://www.newegg.com/asus-geforce-rtx-4090-rog-strix-rtx4090-o24g-gaming/p/N82E16814126593',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126593',
      itemNumber: 'N82E16814126593',
    },
    {
      model: 'tuf',
      url: 'https://www.newegg.com/asus-geforce-rtx-4090-tuf-rtx4090-24g-gaming/p/N82E16814126596',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126596',
      itemNumber: 'N82E16814126596',
    },
    {
      model: 'tuf oc',
      url: 'https://www.newegg.com/asus-geforce-rtx-4090-tuf-rtx4090-o24g-gaming/p/N82E16814126594',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126594',
      itemNumber: 'N82E16814126594',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '4090', [
    {
      model: 'trinity',
      url: 'https://www.newegg.com/zotac-geforce-rtx-4090-zt-d40900d-10p/p/N82E16814500539',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814500539',
      itemNumber: 'N82E16814500539',
    },
    {
      model: 'amp extreme airo',
      url: 'https://www.newegg.com/zotac-geforce-rtx-4090-zt-d40900b-10p/p/N82E16814500538',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814500538',
      itemNumber: 'N82E16814500538',
    },
  ]),
];
