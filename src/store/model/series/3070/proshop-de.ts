import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for proshop-de 3070 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3070', [
    {
      model: 'strix',
      url: 'https://www.proshop.de/2876843',
    },
    {
      model: 'strix oc',
      url: 'https://www.proshop.de/2876845',
    },
    {
      model: 'dual',
      url: 'https://www.proshop.de/2876851',
    },
    {
      model: 'dual oc',
      url: 'https://www.proshop.de/2876853',
    },
    {
      model: 'tuf',
      url: 'https://www.proshop.de/2876854',
    },
    {
      model: 'tuf oc',
      url: 'https://www.proshop.de/2876856',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3070', [
    {
      model: 'eagle',
      url: 'https://www.proshop.de/2878385',
    },
    {
      model: 'eagle oc',
      url: 'https://www.proshop.de/2878386',
    },
    {
      model: 'gaming oc',
      url: 'https://www.proshop.de/2878390',
    },
    {
      model: 'vision oc',
      url: 'https://www.proshop.de/2878390',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3070', [
    {
      model: 'ichill x2',
      url: 'https://www.proshop.de/2883916',
    },
    {
      model: 'twin x2 oc',
      url: 'https://www.proshop.de/2883917',
    },
    {
      model: 'ichill x3',
      url: 'https://www.proshop.de/2883918',
    },
    {
      model: 'ichill x4',
      url: 'https://www.proshop.de/2883919',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3070', [
    {
      model: 'gaming x trio',
      url: 'https://www.proshop.de/2876871',
    },
    {
      model: 'ventus 2x oc',
      url: 'https://www.proshop.de/2876873',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.proshop.de/2876875',
    },
  ]),
];
