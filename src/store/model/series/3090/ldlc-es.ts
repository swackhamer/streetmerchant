import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for ldlc-es 3090 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'tuf',
      url: 'https://www.ldlc.com/es-es/ficha/PB00369842.html',
    },
    {
      model: 'tuf oc',
      url: 'https://www.ldlc.com/es-es/ficha/PB00374911.html',
    },
    {
      model: 'gaming oc',
      url: 'https://www.ldlc.com/es-es/ficha/PB00369849.html',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3090', [
    {
      model: 'ftw3 ultra',
      url: 'https://www.ldlc.com/es-es/ficha/PB00374837.html',
    },
    {
      model: 'ftw3',
      url: 'https://www.ldlc.com/es-es/ficha/PB00374838.html',
    },
    {
      model: 'ftw3 ultra hybrid',
      url: 'https://www.ldlc.com/es-es/ficha/PB00398037.html',
    },
    {
      model: 'kngpn hybrid',
      url: 'https://www.ldlc.com/es-es/ficha/PB00398044.html',
    },
    {
      model: 'xc3 black',
      url: 'https://www.ldlc.com/es-es/ficha/PB00374629.html',
    },
    {
      model: 'xc3',
      url: 'https://www.ldlc.com/es-es/ficha/PB00374628.html',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.ldlc.com/es-es/ficha/PB00374631.html',
    },
    {
      model: 'xc3 ultra hybrid',
      url: 'https://www.ldlc.com/es-es/ficha/PB00398039.html',
    },
  ]),

  // Gainward Cards
  ...createBrandSeriesLinks('gainward', '3090', [
    {
      model: 'phantom',
      url: 'https://www.ldlc.com/es-es/ficha/PB00390729.html',
    },
    {
      model: 'phantom gs',
      url: 'https://www.ldlc.com/es-es/ficha/PB00390227.html',
    },
    {
      model: 'phoenix',
      url: 'https://www.ldlc.com/es-es/ficha/PB00370903.html',
    },
    {
      model: 'phoenix gs',
      url: 'https://www.ldlc.com/es-es/ficha/PB00370913.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3090', [
    {
      model: 'aorus master',
      url: 'https://www.ldlc.com/es-es/ficha/PB00376302.html',
    },
    {
      model: 'aorus xtreme',
      url: 'https://www.ldlc.com/es-es/ficha/PB00390730.html',
    },
    {
      model: 'aorus xtreme waterforce wb',
      url: 'https://www.ldlc.com/es-es/ficha/PB00400756.html',
    },
    {
      model: 'eagle oc',
      url: 'https://www.ldlc.com/es-es/ficha/PB00371132.html',
    },
    {
      model: 'gaming oc',
      url: 'https://www.ldlc.com/es-es/ficha/PB00371131.html',
    },
    {
      model: 'turbo',
      url: 'https://www.ldlc.com/es-es/ficha/PB00391621.html',
    },
    {
      model: 'vision oc',
      url: 'https://www.ldlc.com/es-es/ficha/PB00386908.html',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3090', [
    {
      model: 'ichill x4',
      url: 'https://www.ldlc.com/es-es/ficha/PB00374614.html',
    },
    {
      model: 'gaming x3',
      url: 'https://www.ldlc.com/es-es/ficha/PB00371280.html',
    },
    {
      model: 'ichill frostbite',
      url: 'https://www.ldlc.com/es-es/ficha/PB00391541.html',
    },
    {
      model: 'ichill x3',
      url: 'https://www.ldlc.com/es-es/ficha/PB00374606.html',
    },
  ]),

  // Kfa2 Cards
  ...createBrandSeriesLinks('kfa2', '3090', [
    {
      model: 'sg',
      url: 'https://www.ldlc.com/es-es/ficha/PB00371133.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3090', [
    {
      model: 'suprim x',
      url: 'https://www.ldlc.com/es-es/ficha/PB00391683.html',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.ldlc.com/es-es/ficha/PB00370065.html',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.ldlc.com/es-es/ficha/PB00370057.html',
    },
  ]),

  // Palit Cards
  ...createBrandSeriesLinks('palit', '3090', [
    {
      model: 'gamerock',
      url: 'https://www.ldlc.com/es-es/ficha/PB00389189.html',
    },
    {
      model: 'gamerock oc',
      url: 'https://www.ldlc.com/es-es/ficha/PB00391625.html',
    },
    {
      model: 'gaming pro',
      url: 'https://www.ldlc.com/es-es/ficha/PB00374912.html',
    },
    {
      model: 'gaming pro oc',
      url: 'https://www.ldlc.com/es-es/ficha/PB00374914.html',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3090', [
    {
      model: 'amp holo',
      url: 'https://www.ldlc.com/es-es/ficha/PB00431614.html',
    },
    {
      model: 'trinity oc',
      url: 'https://www.ldlc.com/es-es/ficha/PB00401472.html',
    },
    {
      model: 'trinity',
      url: 'https://www.ldlc.com/es-es/ficha/PB00370250.html',
    },
  ]),

];
