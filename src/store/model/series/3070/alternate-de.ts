import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for alternate-de 3070 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3070', [
    {
      model: 'dual oc',
      url: 'https://www.alternate.de/html/product/1677326',
    },
    {
      model: 'strix',
      url: 'https://www.alternate.de/html/product/1677327',
    },
    {
      model: 'tuf',
      url: 'https://www.alternate.de/html/product/1679872',
    },
    {
      model: 'strix oc',
      url: 'https://www.alternate.de/html/product/1758701',
    },
    {
      model: 'tuf oc',
      url: 'https://www.alternate.de/html/product/1758698',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3070', [
    {
      model: 'xc3 ultra',
      url: 'https://www.alternate.de/html/product/1687861',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.alternate.de/html/product/1756007',
    },
  ]),

  // Gainward Cards
  ...createBrandSeriesLinks('gainward', '3070', [
    {
      model: 'phantom',
      url: 'https://www.alternate.de/html/product/1684579',
    },
    {
      model: 'phantom gs',
      url: 'https://www.alternate.de/html/product/1684582',
    },
    {
      model: 'phoenix',
      url: 'https://www.alternate.de/html/product/1684578',
    },
    {
      model: 'phoenix gs',
      url: 'https://www.alternate.de/html/product/1680777',
    },
    {
      model: 'phantom',
      url: 'https://www.alternate.de/html/product/1780254',
    },
    {
      model: 'phantom gs',
      url: 'https://www.alternate.de/html/product/1780260',
    },
    {
      model: 'phoenix',
      url: 'https://www.alternate.de/html/product/1771999',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3070', [
    {
      model: 'aorus master',
      url: 'https://www.alternate.de/html/product/1768036',
    },
    {
      model: 'vision oc',
      url: 'https://www.alternate.de/html/product/1688819',
    },
    {
      model: 'gaming oc',
      url: 'https://www.alternate.de/html/product/1765420',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3070', [
    {
      model: 'ichill x3',
      url: 'https://www.alternate.de/html/product/1681756',
    },
    {
      model: 'ichill x4',
      url: 'https://www.alternate.de/html/product/1753794',
    },
    {
      model: 'twin x2',
      url: 'https://www.alternate.de/html/product/1681760',
    },
    {
      model: 'twin x2 oc',
      url: 'https://www.alternate.de/html/product/1681768',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3070', [
    {
      model: 'gaming z trio',
      url: 'https://www.alternate.de/html/product/1758122',
    },
    {
      model: 'suprim x',
      url: 'https://www.alternate.de/html/product/1758120',
    },
    {
      model: 'ventus 2x oc',
      url: 'https://www.alternate.de/html/product/1758134',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3070', [
    {
      model: 'twin edge oc',
      url: 'https://www.alternate.de/html/product/1758192',
    },
    {
      model: 'amp holo',
      url: 'https://www.alternate.de/html/product/1758184',
    },
    {
      model: 'amp holo',
      url: 'https://www.alternate.de/html/product/1702466',
    },
    {
      model: 'twin edge oc',
      url: 'https://www.alternate.de/html/product/1679097',
    },
  ]),

  // Palit Cards
  ...createBrandSeriesLinks('palit', '3070', [
    {
      model: 'gaming pro',
      url: 'https://www.alternate.de/html/product/1780508',
    },
    {
      model: 'gaming pro oc',
      url: 'https://www.alternate.de/html/product/1684564',
    },
    {
      model: 'gamerock',
      url: 'https://www.alternate.de/html/product/1684571',
    },
    {
      model: 'gamerock oc',
      url: 'https://www.alternate.de/html/product/1684570',
    },
  ]),

];
