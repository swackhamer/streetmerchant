import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for alternate-de 3060 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3060', [
    {
      model: 'tuf',
      url: 'https://www.alternate.de/html/product/1725773',
    },
    {
      model: 'tuf oc',
      url: 'https://www.alternate.de/html/product/1716805',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3060', [
    {
      model: 'xc gaming',
      url: 'https://www.alternate.de/html/product/1727976',
    },
  ]),

  // Gainward Cards
  ...createBrandSeriesLinks('gainward', '3060', [
    {
      model: 'ghost',
      url: 'https://www.alternate.de/html/product/1725925',
    },
    {
      model: 'ghost oc',
      url: 'https://www.alternate.de/html/product/1725930',
    },
    {
      model: 'pegasus',
      url: 'https://www.alternate.de/html/product/1725933',
    },
    {
      model: 'pegasus oc',
      url: 'https://www.alternate.de/html/product/1725932',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3060', [
    {
      model: 'aorus elite',
      url: 'https://www.alternate.de/html/product/1734878',
    },
    {
      model: 'eagle oc',
      url: 'https://www.alternate.de/html/product/1723539',
    },
    {
      model: 'gaming oc',
      url: 'https://www.alternate.de/html/product/1723538',
    },
    {
      model: 'vision oc',
      url: 'https://www.alternate.de/html/product/1726410',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3060', [
    {
      model: 'ichill x3 red',
      url: 'https://www.alternate.de/html/product/1717795',
    },
    {
      model: 'twin x2 oc',
      url: 'https://www.alternate.de/html/product/1717794',
    },
  ]),

  // Palit Cards
  ...createBrandSeriesLinks('palit', '3060', [
    {
      model: 'dual',
      url: 'https://www.alternate.de/html/product/1725916',
    },
    {
      model: 'dual oc',
      url: 'https://www.alternate.de/html/product/1725915',
    },
    {
      model: 'stormx oc',
      url: 'https://www.alternate.de/html/product/1725929',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3060', [
    {
      model: 'amp white',
      url: 'https://www.alternate.de/html/product/1715300',
    },
    {
      model: 'twin edge oc',
      url: 'https://www.alternate.de/html/product/1715299',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3060', [
    {
      model: 'gaming z trio',
      url: 'https://www.alternate.de/html/product/1753367',
    },
    {
      model: 'ventus 2x oc',
      url: 'https://www.alternate.de/html/product/1719422',
    },
  ]),
];
