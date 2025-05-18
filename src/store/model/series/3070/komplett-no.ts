import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for komplett-no 3070 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3070', [
    {
      model: 'dual',
      url: 'https://www.komplett.no/product/1168752/',
    },
    {
      model: 'strix oc white',
      url: 'https://www.komplett.no/product/1176244/',
    },
    {
      model: 'tuf oc',
      url: 'https://www.komplett.no/product/1171385/',
    },
    {
      model: 'strix white',
      url: 'https://www.komplett.no/product/1176246/',
    },
    {
      model: 'ekwb',
      url: 'https://www.komplett.no/product/1176557/',
    },
    {
      model: 'strix',
      url: 'https://www.komplett.no/product/1168754/',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3070', [
    {
      model: 'eagle',
      url: 'https://www.komplett.no/product/1171368/',
    },
    {
      model: 'aorus master',
      url: 'https://www.komplett.no/product/1173939/',
    },
    {
      model: 'vision oc',
      url: 'https://www.komplett.no/product/1173938/',
    },
    {
      model: 'eagle oc',
      url: 'https://www.komplett.no/product/1171367/',
    },
    {
      model: 'gaming oc',
      url: 'https://www.komplett.no/product/1171366/',
    },
  ]),

  // Palit Cards
  ...createBrandSeriesLinks('palit', '3070', [
    {
      model: 'gaming pro',
      url: 'https://www.komplett.no/product/1177553/',
    },
    {
      model: 'gaming pro oc',
      url: 'https://www.komplett.no/product/1172252/',
    },
    {
      model: 'gaming pro',
      url: 'https://www.komplett.no/product/1175239/',
    },
    {
      model: 'gamerock oc',
      url: 'https://www.komplett.no/product/1174399/',
    },
    {
      model: 'gamerock',
      url: 'https://www.komplett.no/product/1174396/',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3070', [
    {
      model: 'twin edge oc white',
      url: 'https://www.komplett.no/product/1175619/',
    },
    {
      model: 'amp holo',
      url: 'https://www.komplett.no/product/1176459/',
    },
    {
      model: 'twin edge',
      url: 'https://www.komplett.no/product/1168399/',
    },
    {
      model: 'twin edge oc',
      url: 'https://www.komplett.no/product/1170422/',
    },
  ]),

  // Gainward Cards
  ...createBrandSeriesLinks('gainward', '3070', [
    {
      model: 'phoenix gs',
      url: 'https://www.komplett.no/product/1171796/',
    },
    {
      model: 'phantom gs',
      url: 'https://www.komplett.no/product/1174400/',
    },
    {
      model: 'phantom gs',
      url: 'https://www.komplett.no/product/1174397/',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3070', [
    {
      model: 'suprim',
      url: 'https://www.komplett.no/product/1176458/',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.komplett.no/product/1168375/',
    },
    {
      model: 'ventus 2x oc',
      url: 'https://www.komplett.no/product/1168376/',
    },
    {
      model: 'suprim x',
      url: 'https://www.komplett.no/product/1174190/',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.komplett.no/product/1168377/',
    },
  ]),
];
