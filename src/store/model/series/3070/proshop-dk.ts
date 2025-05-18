import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for proshop-dk 3070 series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', '3070', [
    {
      model: 'gaming x trio',
      url: 'https://www.proshop.dk/2876871',
    },
    {
      model: 'suprim',
      url: 'https://www.proshop.dk/2908888',
    },
    {
      model: 'ventus 2x oc',
      url: 'https://www.proshop.dk/2876873',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.proshop.dk/2876875',
    },
    {
      model: 'suprim x',
      url: 'https://www.proshop.dk/2885269',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3070', [
    {
      model: 'strix oc',
      url: 'https://www.proshop.dk/2876845',
    },
    {
      model: 'tuf oc',
      url: 'https://www.proshop.dk/2876856',
    },
    {
      model: 'dual oc',
      url: 'https://www.proshop.dk/2876853',
    },
    {
      model: 'dual',
      url: 'https://www.proshop.dk/2876851',
    },
    {
      model: 'tuf',
      url: 'https://www.proshop.dk/2876854',
    },
    {
      model: 'strix',
      url: 'https://www.proshop.dk/2876843',
    },
    {
      model: 'strix oc',
      url: 'https://www.proshop.dk/2911575',
    },
    {
      model: 'strix',
      url: 'https://www.proshop.dk/2911574',
    },
    {
      model: 'ekwb',
      url: 'https://www.proshop.dk/2911577',
    },
    {
      model: 'strix',
      url: 'https://www.proshop.dk/2912910',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3070', [
    {
      model: 'gaming oc',
      url: 'https://www.proshop.dk/2878390',
    },
    {
      model: 'aorus master',
      url: 'https://www.proshop.dk/2878383',
    },
    {
      model: 'vision oc',
      url: 'https://www.proshop.dk/2878392',
    },
    {
      model: 'eagle oc',
      url: 'https://www.proshop.dk/2878386',
    },
    {
      model: 'eagle',
      url: 'https://www.proshop.dk/2878385',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3070', [
    {
      model: 'twin x2 oc',
      url: 'https://www.proshop.dk/2883917',
    },
    {
      model: 'twin x2',
      url: 'https://www.proshop.dk/2883916',
    },
    {
      model: 'ichill x4',
      url: 'https://www.proshop.dk/2883919',
    },
    {
      model: 'ichill x3',
      url: 'https://www.proshop.dk/2883918',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3070', [
    {
      model: 'twin edge',
      url: 'https://www.proshop.dk/2911956',
    },
    {
      model: 'amp holo',
      url: 'https://www.proshop.dk/2912456',
    },
  ]),

  // Palit Cards
  ...createBrandSeriesLinks('palit', '3070', [
    {
      model: 'gamerock oc',
      url: 'https://www.proshop.dk/2914382',
    },
    {
      model: 'gamerock oc',
      url: 'https://www.proshop.dk/2914381',
    },
  ]),
];
