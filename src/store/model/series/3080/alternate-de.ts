import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for alternate-de 3080 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'strix',
      url: 'https://www.alternate.de/html/product/1672868',
    },
    {
      model: 'strix white',
      url: 'https://www.alternate.de/html/product/1699867',
    },
    {
      model: 'strix oc',
      url: 'https://www.alternate.de/html/product/1766848',
    },
    {
      model: 'strix oc white',
      url: 'https://www.alternate.de/html/product/1699868',
    },
    {
      model: 'tuf',
      url: 'https://www.alternate.de/html/product/1672251',
    },
    {
      model: 'tuf oc',
      url: 'https://www.alternate.de/html/product/1672634',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080', [
    {
      model: 'ftw3',
      url: 'https://www.alternate.de/html/product/1673517',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.alternate.de/html/product/1673524',
    },
    {
      model: 'xc3 black',
      url: 'https://www.alternate.de/html/product/1673512',
    },
    {
      model: 'xc3',
      url: 'https://www.alternate.de/html/product/1673520',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.alternate.de/html/product/1674164',
    },
  ]),

  // Gainward Cards
  ...createBrandSeriesLinks('gainward', '3080', [
    {
      model: 'phantom',
      url: 'https://www.alternate.de/html/product/1713332',
    },
    {
      model: 'phantom gs',
      url: 'https://www.alternate.de/html/product/1688597',
    },
    {
      model: 'phoenix',
      url: 'https://www.alternate.de/html/product/1673443',
    },
    {
      model: 'phoenix gs',
      url: 'https://www.alternate.de/html/product/1673442',
    },
    {
      model: 'phantom',
      url: 'https://www.alternate.de/html/product/1780243',
    },
    {
      model: 'phoenix',
      url: 'https://www.alternate.de/html/product/1780244',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'aorus xtreme',
      url: 'https://www.alternate.de/html/product/1680168',
    },
    {
      model: 'aorus xtreme waterforce wb',
      url: 'https://www.alternate.de/html/product/1694051',
    },
    {
      model: 'eagle',
      url: 'https://www.alternate.de/html/product/1692001',
    },
    {
      model: 'eagle oc',
      url: 'https://www.alternate.de/html/product/1672756',
    },
    {
      model: 'gaming oc',
      url: 'https://www.alternate.de/html/product/1672753',
    },
    {
      model: 'vision oc',
      url: 'https://www.alternate.de/html/product/1681134',
    },
    {
      model: 'aorus master',
      url: 'https://www.alternate.de/html/product/1765406',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3080', [
    {
      model: 'ichill frostbite',
      url: 'https://www.alternate.de/html/product/1693867',
    },
    {
      model: 'ichill x3',
      url: 'https://www.alternate.de/html/product/1673136',
    },
    {
      model: 'ichill x4',
      url: 'https://www.alternate.de/html/product/1673134',
    },
    {
      model: 'twin x2 oc',
      url: 'https://www.alternate.de/html/product/1673137',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'gaming x trio',
      url: 'https://www.alternate.de/html/product/1672343',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.alternate.de/html/product/1672345',
    },
    {
      model: 'suprim x',
      url: 'https://www.alternate.de/html/product/1758116',
    },
    {
      model: 'gaming z trio',
      url: 'https://www.alternate.de/html/product/1758119',
    },
  ]),

  // Palit Cards
  ...createBrandSeriesLinks('palit', '3080', [
    {
      model: 'gamerock',
      url: 'https://www.alternate.de/html/product/1688679',
    },
    {
      model: 'gamerock oc',
      url: 'https://www.alternate.de/html/product/1688594',
    },
    {
      model: 'gaming pro',
      url: 'https://www.alternate.de/html/product/1673437',
    },
    {
      model: 'gaming pro oc',
      url: 'https://www.alternate.de/html/product/1673431',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3080', [
    {
      model: 'amp extreme holo',
      url: 'https://www.alternate.de/html/product/1677982',
    },
    {
      model: 'trinity oc',
      url: 'https://www.alternate.de/html/product/1677989',
    },
    {
      model: 'trinity',
      url: 'https://www.alternate.de/html/product/1672612',
    },
    {
      model: 'amp holo',
      url: 'https://www.alternate.de/html/product/1758181',
    },
    {
      model: 'trinity oc',
      url: 'https://www.alternate.de/html/product/1758185',
    },
  ]),

];
