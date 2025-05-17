import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for alternate-nl 3080 series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'eagle oc',
      url: 'https://www.alternate.nl/product/1672756',
    },
    {
      model: 'gaming oc',
      url: 'https://www.alternate.nl/product/1672753',
    },
    {
      model: 'vision oc',
      url: 'https://www.alternate.nl/product/1681134',
    },
    {
      model: 'aorus master',
      url: 'https://www.alternate.nl/product/1680168',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'ventus 3x oc',
      url: 'https://www.alternate.nl/product/1672345',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.alternate.nl/product/1672343',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'tuf',
      url: 'https://www.alternate.nl/product/1672251',
    },
    {
      model: 'tuf oc',
      url: 'https://www.alternate.nl/product/1672634',
    },
    {
      model: 'strix oc',
      url: 'https://www.alternate.nl/product/1672867',
    },
    {
      model: 'strix',
      url: 'https://www.alternate.nl/product/1672868',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080', [
    {
      model: 'xc3 black',
      url: 'https://www.alternate.nl/product/1673512',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.alternate.nl/product/1674164',
    },
    {
      model: 'xc3',
      url: 'https://www.alternate.nl/product/1673520',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.alternate.nl/product/1673524',
    },
    {
      model: 'ftw3',
      url: 'https://www.alternate.nl/product/1673517',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3080', [
    {
      model: 'trinity',
      url: 'https://www.alternate.nl/product/1672612',
    },
    {
      model: 'trinity oc',
      url: 'https://www.alternate.nl/product/1677989',
    },
    {
      model: 'amp holo',
      url: 'https://www.alternate.nl/product/1677985',
    },
    {
      model: 'amp extreme holo',
      url: 'https://www.alternate.nl/product/1677982',
    },
  ]),

  // Palit Cards
  ...createBrandSeriesLinks('palit', '3080', [
    {
      model: 'gaming pro oc',
      url: 'https://www.alternate.nl/product/1673431',
    },
  ]),

  // Gainward Cards
  ...createBrandSeriesLinks('gainward', '3080', [
    {
      model: 'phoenix gs',
      url: 'https://www.alternate.nl/product/1673442',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3080', [
    {
      model: 'ichill x3',
      url: 'https://www.alternate.nl/product/1673136',
    },
    {
      model: 'twin x2 oc',
      url: 'https://www.alternate.nl/product/1673137',
    },
    {
      model: 'ichill x4',
      url: 'https://www.alternate.nl/product/1673134',
    },
  ]),

];
