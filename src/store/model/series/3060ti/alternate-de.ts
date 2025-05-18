import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for alternate-de 3060ti series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3060ti', [
    {
      model: 'tuf oc',
      url: 'https://www.alternate.de/html/product/1693462',
    },
    {
      model: 'tuf oc',
      url: 'https://www.alternate.de/html/product/1758690',
    },
    {
      model: 'dual mini oc',
      url: 'https://www.alternate.de/html/product/1758702',
    },
    {
      model: 'dual mini',
      url: 'https://www.alternate.de/html/product/1758703',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3060ti', [
    {
      model: 'ftw3 ultra',
      url: 'https://www.alternate.de/html/product/1698594',
    },
  ]),

  // Gainward Cards
  ...createBrandSeriesLinks('gainward', '3060ti', [
    {
      model: 'ghost',
      url: 'https://www.alternate.de/html/product/1698655',
    },
    {
      model: 'ghost oc',
      url: 'https://www.alternate.de/html/product/1694300',
    },
    {
      model: 'phoenix',
      url: 'https://www.alternate.de/html/product/1698654',
    },
    {
      model: 'phoenix gs',
      url: 'https://www.alternate.de/html/product/1694299',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3060ti', [
    {
      model: 'gaming oc',
      url: 'https://www.alternate.de/html/product/1694048',
    },
    {
      model: 'aorus elite',
      url: 'https://www.alternate.de/html/product/1769551',
    },
    {
      model: 'gaming pro oc',
      url: 'https://www.alternate.de/html/product/1762625',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3060ti', [
    {
      model: 'ichill x3 red',
      url: 'https://www.alternate.de/html/product/1696931',
    },
    {
      model: 'twin x2',
      url: 'https://www.alternate.de/html/product/1709206',
    },
    {
      model: 'twin x2 oc',
      url: 'https://www.alternate.de/html/product/1696932',
    },
    {
      model: 'twin x2 oc',
      url: 'https://www.alternate.de/html/product/1753819',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3060ti', [
    {
      model: 'gaming x',
      url: 'https://www.alternate.de/html/product/1714488',
    },
    {
      model: 'gaming x',
      url: 'https://www.alternate.de/html/product/1758136',
    },
    {
      model: 'gaming z trio',
      url: 'https://www.alternate.de/html/product/1758139',
    },
    {
      model: 'ventus 2x oc',
      url: 'https://www.alternate.de/html/product/1758141',
    },
  ]),

  // Palit Cards
  ...createBrandSeriesLinks('palit', '3060ti', [
    {
      model: 'dual',
      url: 'https://www.alternate.de/html/product/1698653',
    },
    {
      model: 'dual oc',
      url: 'https://www.alternate.de/html/product/1694308',
    },
    {
      model: 'gaming pro',
      url: 'https://www.alternate.de/html/product/1698650',
    },
    {
      model: 'gaming pro oc',
      url: 'https://www.alternate.de/html/product/1694305',
    },
    {
      model: 'dual',
      url: 'https://www.alternate.de/html/product/1780517',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3060ti', [
    {
      model: 'twin edge oc',
      url: 'https://www.alternate.de/html/product/1694335',
    },
    {
      model: 'twin edge oc',
      url: 'https://www.alternate.de/html/product/1758204',
    },
  ]),
];
