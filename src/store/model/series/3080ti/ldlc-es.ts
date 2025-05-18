import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for ldlc-es 3080ti series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080ti', [
    {
      model: 'strix',
      url: 'https://www.ldlc.com/es-es/ficha/PB00438231.html',
    },
    {
      model: 'tuf oc',
      url: 'https://www.ldlc.com/es-es/ficha/PB00438230.html',
    },
    {
      model: 'tuf',
      url: 'https://www.ldlc.com/es-es/ficha/PB00438229.html',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080ti', [
    {
      model: 'ftw3 ultra',
      url: 'https://www.ldlc.com/es-es/ficha/PB00438264.html',
    },
    {
      model: 'ftw3',
      url: 'https://www.ldlc.com/es-es/ficha/PB00438537.html',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.ldlc.com/es-es/ficha/PB00438539.html',
    },
    {
      model: 'xc3 black',
      url: 'https://www.ldlc.com/es-es/ficha/PB00438543.html',
    },
    {
      model: 'ftw3 ultra hybrid',
      url: 'https://www.ldlc.com/es-es/ficha/PB00440781.html',
    },
    {
      model: 'xc3',
      url: 'https://www.ldlc.com/es-es/ficha/PB00438542.html',
    },
  ]),

  // Gainward Cards
  ...createBrandSeriesLinks('gainward', '3080ti', [
    {
      model: 'phoenix',
      url: 'https://www.ldlc.com/es-es/ficha/PB00438243.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080ti', [
    {
      model: 'gaming oc',
      url: 'https://www.ldlc.com/es-es/ficha/PB00438260.html',
    },
    {
      model: 'vision oc',
      url: 'https://www.ldlc.com/es-es/ficha/PB00438262.html',
    },
    {
      model: 'aorus xtreme',
      url: 'https://www.ldlc.com/es-es/ficha/PB00438269.html',
    },
    {
      model: 'eagle',
      url: 'https://www.ldlc.com/es-es/ficha/PB00438258.html',
    },
    {
      model: 'aorus master',
      url: 'https://www.ldlc.com/es-es/ficha/PB00438279.html',
    },
    {
      model: 'eagle oc',
      url: 'https://www.ldlc.com/es-es/ficha/PB00438259.html',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3080ti', [
    {
      model: 'ichill frostbite',
      url: 'https://www.ldlc.com/es-es/ficha/PB00438516.html',
    },
    {
      model: 'x3 oc',
      url: 'https://www.ldlc.com/es-es/ficha/PB00438517.html',
    },
    {
      model: 'ichill x3',
      url: 'https://www.ldlc.com/es-es/ficha/PB00438292.html',
    },
    {
      model: 'ichill x4',
      url: 'https://www.ldlc.com/es-es/ficha/PB00438564.html',
    },
  ]),

  // Kfa2 Cards
  ...createBrandSeriesLinks('kfa2', '3080ti', [
    {
      model: 'sg oc',
      url: 'https://www.ldlc.com/es-es/ficha/PB00438228.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080ti', [
    {
      model: 'gaming x trio',
      url: 'https://www.ldlc.com/es-es/ficha/PB00438240.html',
    },
    {
      model: 'suprim x',
      url: 'https://www.ldlc.com/es-es/ficha/PB00438242.html  ',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.ldlc.com/es-es/ficha/PB00438520.html',
    },
  ]),

  // Palit Cards
  ...createBrandSeriesLinks('palit', '3080ti', [
    {
      model: 'gamerock oc',
      url: 'https://www.ldlc.com/es-es/ficha/PB00438238.html',
    },
    {
      model: 'gaming pro',
      url: 'https://www.ldlc.com/es-es/ficha/PB00438241.html',
    },
    {
      model: 'gamerock',
      url: 'https://www.ldlc.com/es-es/ficha/PB00438263.html',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3080ti', [
    {
      model: 'amp holo',
      url: 'https://www.ldlc.com/es-es/ficha/PB00438234.html',
    },
    {
      model: 'trinity',
      url: 'https://www.ldlc.com/es-es/ficha/PB00438232.html',
    },
    {
      model: 'trinity oc',
      url: 'https://www.ldlc.com/es-es/ficha/PB00438233.html',
    },
  ]),
];
