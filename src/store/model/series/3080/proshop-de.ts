import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for proshop-de 3080 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'strix',
      url: 'https://www.proshop.de/2876857',
    },
    {
      model: 'strix oc',
      url: 'https://www.proshop.de/2876859',
    },
    {
      model: 'tuf',
      url: 'https://www.proshop.de/2876763',
    },
    {
      model: 'tuf oc',
      url: 'https://www.proshop.de/2876861',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'aorus master',
      url: 'https://www.proshop.de/2876835',
    },
    {
      model: 'eagle oc',
      url: 'https://www.proshop.de/2876837',
    },
    {
      model: 'gaming oc',
      url: 'https://www.proshop.de/2876838',
    },
    {
      model: 'vision oc',
      url: 'https://www.proshop.de/2878401',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3080', [
    {
      model: 'ichill x3',
      url: 'https://www.proshop.de/2878969',
    },
    {
      model: 'ichill x4',
      url: 'https://www.proshop.de/2878971',
    },
    {
      model: 'twin x2 oc',
      url: 'https://www.proshop.de/2878968',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'gaming x trio',
      url: 'https://www.proshop.de/2876877',
    },
    {
      model: 'ventus 3x',
      url: 'https://www.proshop.de/2876878',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.proshop.de/2876879',
    },
  ]),
];
