import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for alternate-de 3090 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'strix',
      url: 'https://www.alternate.de/html/product/1672870',
    },
    {
      model: 'strix oc',
      url: 'https://www.alternate.de/html/product/1672872',
    },
    {
      model: 'strix oc white',
      url: 'https://www.alternate.de/html/product/1701891',
    },
    {
      model: 'strix white',
      url: 'https://www.alternate.de/html/product/1701894',
    },
    {
      model: 'tuf',
      url: 'https://www.alternate.de/html/product/1672259',
    },
    {
      model: 'tuf oc',
      url: 'https://www.alternate.de/html/product/1672629',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3090', [
    {
      model: 'ftw3',
      url: 'https://www.alternate.de/html/product/1673530',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.alternate.de/html/product/1673531',
    },
    {
      model: 'xc3 black',
      url: 'https://www.alternate.de/html/product/1673521',
    },
    {
      model: 'xc3',
      url: 'https://www.alternate.de/html/product/1673525',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.alternate.de/html/product/1673529',
    },
    {
      model: 'xc3 ultra hybrid',
      url: 'https://www.alternate.de/html/product/1703237',
    },
  ]),

  // Gainward Cards
  ...createBrandSeriesLinks('gainward', '3090', [
    {
      model: 'phantom',
      url: 'https://www.alternate.de/html/product/1688769',
    },
    {
      model: 'phantom',
      url: 'https://www.alternate.de/html/product/1780227',
    },
    {
      model: 'phantom gs',
      url: 'https://www.alternate.de/html/product/1688598',
    },
    {
      model: 'phoenix',
      url: 'https://www.alternate.de/html/product/1673441',
    },
    {
      model: 'phoenix gs',
      url: 'https://www.alternate.de/html/product/1673440',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3090', [
    {
      model: 'aorus master',
      url: 'https://www.alternate.de/html/product/1687793',
    },
    {
      model: 'aorus xtreme',
      url: 'https://www.alternate.de/html/product/1680670',
    },
    {
      model: 'aorus xtreme waterforce',
      url: 'https://www.alternate.de/html/product/1694043',
    },
    {
      model: 'aorus xtreme waterforce wb',
      url: 'https://www.alternate.de/html/product/1694045',
    },
    {
      model: 'eagle oc',
      url: 'https://www.alternate.de/html/product/1672744',
    },
    {
      model: 'gaming oc',
      url: 'https://www.alternate.de/html/product/1672749',
    },
    {
      model: 'turbo',
      url: 'https://www.alternate.de/html/product/1687703',
    },
    {
      model: 'vision oc',
      url: 'https://www.alternate.de/html/product/1691159',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3090', [
    {
      model: 'gaming x3',
      url: 'https://www.alternate.de/html/product/1673131',
    },
    {
      model: 'ichill frostbite',
      url: 'https://www.alternate.de/html/product/1693868',
    },
    {
      model: 'ichill x3',
      url: 'https://www.alternate.de/html/product/1673135',
    },
    {
      model: 'ichill x4',
      url: 'https://www.alternate.de/html/product/1673129',
    },
  ]),

  // Palit Cards
  ...createBrandSeriesLinks('palit', '3090', [
    {
      model: 'gamerock oc',
      url: 'https://www.alternate.de/html/product/1688672',
    },
    {
      model: 'gaming pro',
      url: 'https://www.alternate.de/html/product/1673432',
    },
    {
      model: 'gaming pro oc',
      url: 'https://www.alternate.de/html/product/1673434',
    },
    {
      model: 'gamerock',
      url: 'https://www.alternate.de/html/product/1688678',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3090', [
    {
      model: 'gaming x trio',
      url: 'https://www.alternate.de/html/product/1672341',
    },
    {
      model: 'suprim x',
      url: 'https://www.alternate.de/html/product/1689857',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.alternate.de/html/product/1672346',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3090', [
    {
      model: 'trinity',
      url: 'https://www.alternate.de/html/product/1672611',
    },
    {
      model: 'trinity oc',
      url: 'https://www.alternate.de/html/product/1712450',
    },
  ]),

];
