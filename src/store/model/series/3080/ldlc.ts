import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for ldlc 3080 series
 */
export const links: Link[] = [
  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080', [
    {
      model: 'xc3 ultra',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00369303.html',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00369299.html',
    },
    {
      model: 'xc3 black',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00369298.html',
    },
    {
      model: 'xc3',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00369268.html',
    },
    {
      model: 'ftw3 ultra hybrid',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00398046.html',
    },
    {
      model: 'ftw3',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00369265.html',
    },
    {
      model: 'xc3 ultra hybrid',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00398045.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'gaming x trio',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00369299.html',
    },
    {
      model: 'ventus 2x oc',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00368506.html',
    },
    {
      model: 'suprim x',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00391682.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'gaming oc',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00369299.html',
    },
    {
      model: 'eagle oc',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00369072.html',
    },
    {
      model: 'aorus',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00376208.html',
    },
    {
      model: 'aorus xtreme',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00390466.html',
    },
    {
      model: 'aorus xtreme waterforce',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00398370.html',
    },
    {
      model: 'vision oc',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00376207.html',
    },
    {
      model: 'aorus xtreme waterforce wb',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00398373.html',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3080', [
    {
      model: 'twin x2',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00368690.html',
    },
    {
      model: 'ichill x3',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00368691.html',
    },
    {
      model: 'ichill frostbite',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00391624.html',
    },
    {
      model: 'ichill x4',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00368692.html',
    },
  ]),

  // Palit Cards
  ...createBrandSeriesLinks('palit', '3080', [
    {
      model: 'gaming pro',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00369094.html',
    },
    {
      model: 'gamerock',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00386334.html',
    },
    {
      model: 'gaming pro',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00375448.html',
    },
    {
      model: 'gamerock',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00386332.html',
    },
  ]),

  // Gainward Cards
  ...createBrandSeriesLinks('gainward', '3080', [
    {
      model: 'phoenix',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00369150.html',
    },
    {
      model: 'phoenix gs',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00369158.html',
    },
    {
      model: 'phantom gs',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00390727.html',
    },
  ]),

  // Kfa2 Cards
  ...createBrandSeriesLinks('kfa2', '3080', [
    {
      model: 'sg',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00396037.html',
    },
    {
      model: 'sg',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00368931.html',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3080', [
    {
      model: 'amp holo',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00375625.html',
    },
    {
      model: 'trinity',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00368579.html',
    },
    {
      model: 'trinity oc',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00375644.html',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'tuf',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00368844.html',
    },
    {
      model: 'tuf',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00368789.html',
    },
    {
      model: 'strix',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00375431.html',
    },
    {
      model: 'strix',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00385535.html',
    },
  ]),
];
