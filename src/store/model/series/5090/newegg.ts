import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for newegg 5090 series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', '5090', [
    {
      model: 'ventus 3x oc',
      url: 'https://www.newegg.com/p/N82E16814137920',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137920',
      itemNumber: '14-137-920',
    },
    {
      model: 'suprim liquid soc',
      url: 'https://www.newegg.com/p/N82E16814137916',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137916',
      itemNumber: '14-137-916',
    },
    {
      model: 'suprim soc',
      url: 'https://www.newegg.com/p/N82E16814137915',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137915',
      itemNumber: '14-137-915',
    },
    {
      model: 'vanguard soc',
      url: 'https://www.newegg.com/p/N82E16814137918',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137918',
      itemNumber: '14-137-918',
    },
    {
      model: 'gaming trio oc',
      url: 'https://www.newegg.com/p/N82E16814137919',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137919',
      itemNumber: '14-137-919',
    },
    {
      model: 'vanguard soc launch edition',
      url: 'https://www.newegg.com/p/N82E16814137917',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137917',
      itemNumber: '14-137-917',
    },
    {
      model: 'ventus 3x',
      url: 'https://www.newegg.com/p/N82E16814137946',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137946',
      itemNumber: '14-137-946',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '5090', [
    {
      model: 'amp extreme infinity',
      url: 'https://www.newegg.com/p/N82E16814500593',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814500593',
      itemNumber: '14-500-593',
    },
    {
      model: 'solid',
      url: 'https://www.newegg.com/p/N82E16814500597',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814500597',
      itemNumber: '14-500-597',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '5090', [
    {
      model: 'tuf',
      url: 'https://www.newegg.com/p/N82E16814126752',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126752',
      itemNumber: '14-126-752',
    },
    {
      model: 'tuf oc',
      url: 'https://www.newegg.com/p/N82E16814126753',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126753',
      itemNumber: '14-126-753',
    },
    {
      model: 'astral oc',
      url: 'https://www.newegg.com/p/N82E16814126751',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126751',
      itemNumber: '14-126-751',
    },
    {
      model: 'astral',
      url: 'https://www.newegg.com/p/N82E16814126750',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126750',
      itemNumber: '14-126-750',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '5090', [
    {
      model: 'master ice',
      url: 'https://www.newegg.com/p/N82E16814932765',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932765',
      itemNumber: '14-932-765',
    },
    {
      model: 'gaming oc',
      url: 'https://www.newegg.com/p/N82E16814932761',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932761',
      itemNumber: '14-932-761',
    },
    {
      model: 'windforce oc',
      url: 'https://www.newegg.com/p/N82E16814932762',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932762',
      itemNumber: '14-932-762',
    },
    {
      model: 'master',
      url: 'https://www.newegg.com/p/N82E16814932760',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932760',
      itemNumber: '14-932-760',
    },
    {
      model: 'aorus xtreme waterforce wb',
      url: 'https://www.newegg.com/p/N82E16814932764',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932764',
    },
    {
      model: 'aorus xtreme waterforce',
      url: 'https://www.newegg.com/p/N82E16814932763',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932763',
      itemNumber: '14-932-763',
    },
  ]),
];
