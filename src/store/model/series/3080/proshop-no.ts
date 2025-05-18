import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for proshop-no 3080 series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'gaming x trio',
      url: 'https://www.proshop.no/2876877',
    },
    {
      model: 'suprim x',
      url: 'https://www.proshop.no/2885270',
    },
    {
      model: 'ventus 3x',
      url: 'https://www.proshop.no/2876878',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.proshop.no/2876879',
    },
    {
      model: 'gaming trio',
      url: 'https://www.proshop.no/2876876',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'strix oc',
      url: 'https://www.proshop.no/2876859',
    },
    {
      model: 'tuf',
      url: 'https://www.proshop.no/2876763',
    },
    {
      model: 'tuf oc',
      url: 'https://www.proshop.no/2876861',
    },
    {
      model: 'strix oc',
      url: 'https://www.proshop.no/2911579',
    },
    {
      model: 'strix',
      url: 'https://www.proshop.no/2876857',
    },
    {
      model: 'ekwb',
      url: 'https://www.proshop.no/2887568',
    },
    {
      model: 'strix',
      url: 'https://www.proshop.no/2911578',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'gaming oc',
      url: 'https://www.proshop.no/2876838',
    },
    {
      model: 'vision oc',
      url: 'https://www.proshop.no/2878401',
    },
    {
      model: 'aorus master',
      url: 'https://www.proshop.no/2876835',
    },
    {
      model: 'eagle',
      url: 'https://www.proshop.no/2878395',
    },
    {
      model: 'aorus xtreme',
      url: 'https://www.proshop.no/2876836',
    },
    {
      model: 'eagle oc',
      url: 'https://www.proshop.no/2876837',
    },
    {
      model: 'aorus xtreme waterforce',
      url: 'https://www.proshop.no/2878393',
    },
    {
      model: 'aorus xtreme waterforce wb',
      url: 'https://www.proshop.no/2878394',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3080', [
    {
      model: 'ichill x4',
      url: 'https://www.proshop.no/2878971',
    },
    {
      model: 'twin x2 oc',
      url: 'https://www.proshop.no/2878968',
    },
    {
      model: 'ichill x3',
      url: 'https://www.proshop.no/2878969',
    },
  ]),
];
