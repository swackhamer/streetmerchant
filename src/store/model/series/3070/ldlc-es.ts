import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for ldlc-es 3070 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3070', [
    {
      model: 'gaming',
      url: 'https://www.ldlc.com/es-es/ficha/PB00386907.html',
    },
    {
      model: 'gaming oc',
      url: 'https://www.ldlc.com/es-es/ficha/PB00386904.html',
    },
    {
      model: 'dual oc',
      url: 'https://www.ldlc.com/es-es/ficha/PB00384225.html',
    },
    {
      model: 'tuf oc',
      url: 'https://www.ldlc.com/es-es/ficha/PB00384232.html',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3070', [
    {
      model: 'ftw3',
      url: 'https://www.ldlc.com/es-es/ficha/PB00386926.html',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.ldlc.com/es-es/ficha/PB00386925.html',
    },
    {
      model: 'xc3 black',
      url: 'https://www.ldlc.com/es-es/ficha/PB00386030.html',
    },
    {
      model: 'xc3',
      url: 'https://www.ldlc.com/es-es/ficha/PB00386928.html',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.ldlc.com/es-es/ficha/PB00386927.html',
    },
  ]),

  // Gainward Cards
  ...createBrandSeriesLinks('gainward', '3070', [
    {
      model: 'phantom',
      url: 'https://www.ldlc.com/es-es/ficha/PB00385465.html',
    },
    {
      model: 'phantom gs',
      url: 'https://www.ldlc.com/es-es/ficha/PB00385466.html',
    },
    {
      model: 'phoenix',
      url: 'https://www.ldlc.com/es-es/ficha/PB00385462.html',
    },
    {
      model: 'phoenix gs',
      url: 'https://www.ldlc.com/es-es/ficha/PB00385463.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3070', [
    {
      model: 'aorus master',
      url: 'https://www.ldlc.com/es-es/ficha/PB00385044.html',
    },
    {
      model: 'eagle',
      url: 'https://www.ldlc.com/es-es/ficha/PB00400752.html',
    },
    {
      model: 'eagle oc',
      url: 'https://www.ldlc.com/es-es/ficha/PB00383549.html',
    },
    {
      model: 'gaming oc',
      url: 'https://www.ldlc.com/es-es/ficha/PB00384189.html',
    },
    {
      model: 'vision oc',
      url: 'https://www.ldlc.com/es-es/ficha/PB00385043.html',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3070', [
    {
      model: 'ichill x3',
      url: 'https://www.ldlc.com/es-es/ficha/PB00386014.html',
    },
    {
      model: 'ichill x4',
      url: 'https://www.ldlc.com/es-es/ficha/PB00386023.html',
    },
    {
      model: 'twin x2',
      url: 'https://www.ldlc.com/es-es/ficha/PB00385663.html',
    },
  ]),

  // Kfa2 Cards
  ...createBrandSeriesLinks('kfa2', '3070', [
    {
      model: 'ex',
      url: 'https://www.ldlc.com/es-es/ficha/PB00393364.html',
    },
    {
      model: 'ex',
      url: 'https://www.ldlc.com/es-es/ficha/PB00393363.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3070', [
    {
      model: 'gaming trio',
      url: 'https://www.ldlc.com/es-es/ficha/PB00408781.html',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.ldlc.com/es-es/ficha/PB00385048.html',
    },
    {
      model: 'suprim',
      url: 'https://www.ldlc.com/es-es/ficha/PB00395874.html',
    },
    {
      model: 'ventus 2x',
      url: 'https://www.ldlc.com/es-es/ficha/PB00385046.html',
    },
    {
      model: 'ventus 3x',
      url: 'https://www.ldlc.com/es-es/ficha/PB00408780.html',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.ldlc.com/es-es/ficha/PB00385045.html',
    },
  ]),

  // Palit Cards
  ...createBrandSeriesLinks('palit', '3070', [
    {
      model: 'gamerock',
      url: 'https://www.ldlc.com/es-es/ficha/PB00385128.html',
    },
    {
      model: 'gamerock oc',
      url: 'https://www.ldlc.com/es-es/ficha/PB00385129.html',
    },
    {
      model: 'gaming pro',
      url: 'https://www.ldlc.com/es-es/ficha/PB00385126.html',
    },
    {
      model: 'gaming pro oc',
      url: 'https://www.ldlc.com/es-es/ficha/PB00385127.html',
    },
    {
      model: 'jetstream',
      url: 'https://www.ldlc.com/es-es/ficha/PB00385131.html',
    },
    {
      model: 'jetstream oc',
      url: 'https://www.ldlc.com/es-es/ficha/PB00385132.html',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3070', [
    {
      model: 'amp holo',
      url: 'https://www.ldlc.com/es-es/ficha/PB00401469.html',
    },
    {
      model: 'twin edge oc',
      url: 'https://www.ldlc.com/es-es/ficha/PB00383541.html',
    },
  ]),
];
