import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for newegg 4080-16g series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '4080-16g', [
    {
      model: 'tuf oc',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/9SIA4RRJPT6655',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=9SIA4RRJPT6655',
    },
    {
      model: 'tuf',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/9SIAXMKJPP1243',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=9SIAXMKJPP1243',
    },
    {
      model: 'strix oc',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/N82E16814126597',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126597',
      itemNumber: '14-126-597',
    },
    {
      model: 'strix',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/N82E16814126601',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126601',
      itemNumber: '14-126-601',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '4080-16g', [
    {
      model: 'suprim x',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/9SIB6NDJBU7977',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=9SIB6NDJBU7977',
    },
    {
      model: 'ventus 3x',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/9SIA4REJPN0233',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=9SIA4REJPN0233',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/N82E16814137766',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137766',
      itemNumber: '14-137-766',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/N82E16814137765',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137765',
      itemNumber: '14-137-765',
    },
    {
      model: 'ventus 3x',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/N82E16814137768',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137768',
      itemNumber: '14-137-768',
    },
    {
      model: 'suprim x',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/N82E16814137767',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137767',
      itemNumber: '14-137-767',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '4080-16g', [
    {
      model: 'master',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/9SIA4REJPN0959',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=9SIA4REJPN0959',
    },
    {
      model: 'aero oc',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/9SIA4REJPN0307',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=9SIA4REJPN0307',
    },
    {
      model: 'gaming oc',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/N82E16814932561',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932561',
      itemNumber: '14-932-561',
    },
    {
      model: 'eagle oc',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/N82E16814932562',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932562',
      itemNumber: '14-932-562',
    },
    {
      model: 'aorus',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/N82E16814932559',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932559',
      itemNumber: '14-932-559',
    },
    {
      model: 'aero oc',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/N82E16814932560',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932560',
      itemNumber: '14-932-560',
    },
    {
      model: 'aorus w',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/N82E16814932558',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932558',
      itemNumber: '14-932-558',
    },
    {
      model: 'aorus x wb',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/N82E16814932557',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932557',
      itemNumber: '14-932-557',
    },
  ]),

  // Ax Cards
  ...createBrandSeriesLinks('ax', '4080-16g', [
    {
      model: 'x3w',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/9SIA4REJPN0954',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=9SIA4REJPN0954',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '4080-16g', [
    {
      model: 'ice dragon super',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/9SIBDCAJBT4674',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=9SIBDCAJBT4674',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '4080-16g', [
    {
      model: 'xlr8 verto',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/N82E16814133843',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814133843',
      itemNumber: '14-133-843',
    },
    {
      model: 'xlr8 verto oc',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/N82E16814133844',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814133844',
      itemNumber: '14-133-844',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '4080-16g', [
    {
      model: 'amp extreme airo',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/N82E16814500541',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814500541',
      itemNumber: '14-500-541',
    },
    {
      model: 'trinity',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/N82E16814500542',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814500542',
      itemNumber: '14-500-542',
    },
    {
      model: 'trinity oc',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/N82E16814500543',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814500543',
      itemNumber: '14-500-543',
    },
  ]),
];
