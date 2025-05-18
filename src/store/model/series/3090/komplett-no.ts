import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for komplett-no 3090 series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', '3090', [
    {
      model: 'gaming x trio',
      url: 'https://www.komplett.no/product/1168378/',
    },
    {
      model: 'suprim x',
      url: 'https://www.komplett.no/product/1173670',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.komplett.no/product/1168381/',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'ekwb',
      url: 'https://www.komplett.no/product/1174234',
    },
    {
      model: 'strix oc white',
      url: 'https://www.komplett.no/product/1176245',
    },
    {
      model: 'tuf',
      url: 'https://www.komplett.no/product/1168359',
    },
    {
      model: 'strix oc',
      url: 'https://www.komplett.no/product/1168438',
    },
    {
      model: 'tuf oc',
      url: 'https://www.komplett.no/product/1168490',
    },
    {
      model: 'strix',
      url: 'https://www.komplett.no/product/1168437',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3090', [
    {
      model: 'gaming oc',
      url: 'https://www.komplett.no/product/1168414',
    },
    {
      model: 'vision oc',
      url: 'https://www.komplett.no/product/1173940',
    },
    {
      model: 'aorus master',
      url: 'https://www.komplett.no/product/1168417',
    },
    {
      model: 'eagle oc',
      url: 'https://www.komplett.no/product/1168412',
    },
    {
      model: 'aorus xtreme',
      url: 'https://www.komplett.no/product/1168413',
    },
    {
      model: 'turbo',
      url: 'https://www.komplett.no/product/1171270',
    },
    {
      model: 'aorus xtreme waterforce',
      url: 'https://www.komplett.no/product/1175706/',
    },
  ]),

  // Palit Cards
  ...createBrandSeriesLinks('palit', '3090', [
    {
      model: 'gamerock oc',
      url: 'https://www.komplett.no/product/1171795',
    },
    {
      model: 'gamerock',
      url: 'https://www.komplett.no/product/1171802',
    },
    {
      model: 'gaming pro',
      url: 'https://www.komplett.no/product/1168127',
    },
  ]),

  // Gainward Cards
  ...createBrandSeriesLinks('gainward', '3090', [
    {
      model: 'phantom gs',
      url: 'https://www.komplett.no/product/1171803/',
    },
    {
      model: 'phantom gs',
      url: 'https://www.komplett.no/product/1171799/',
    },
    {
      model: 'phoenix gs',
      url: 'https://www.komplett.no/product/1168420/',
    },
    {
      model: 'phoenix',
      url: 'https://www.komplett.no/product/1168126/',
    },
  ]),
];
