import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for proshop-no 3090 series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', '3090', [
    {
      model: 'gaming x trio',
      url: 'https://www.proshop.no/2876881',
    },
    {
      model: 'suprim x',
      url: 'https://www.proshop.no/2885271',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.proshop.no/2876883',
    },
    {
      model: 'ventus 3x',
      url: 'https://www.proshop.no/2876882',
    },
    {
      model: 'gaming trio',
      url: 'https://www.proshop.no/2876880',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'tuf oc',
      url: 'https://www.proshop.no/2876869',
    },
    {
      model: 'strix oc',
      url: 'https://www.proshop.no/2876867',
    },
    {
      model: 'tuf',
      url: 'https://www.proshop.no/2876764',
    },
    {
      model: 'strix oc',
      url: 'https://www.proshop.no/2911582',
    },
    {
      model: 'ekwb',
      url: 'https://www.proshop.no/2887569',
    },
    {
      model: 'strix',
      url: 'https://www.proshop.no/2878405',
    },
    {
      model: 'strix',
      url: 'https://www.proshop.no/2911581',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3090', [
    {
      model: 'gaming x3',
      url: 'https://www.proshop.no/2878977',
    },
    {
      model: 'ichill x3',
      url: 'https://www.proshop.no/2878978',
    },
    {
      model: 'ichill x4',
      url: 'https://www.proshop.no/2878979',
    },
    {
      model: 'ichill frostbite',
      url: 'https://www.proshop.no/2887323',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3090', [
    {
      model: 'aorus master',
      url: 'https://www.proshop.no/2876840',
    },
    {
      model: 'aorus xtreme',
      url: 'https://www.proshop.no/2876839',
    },
    {
      model: 'aorus xtreme waterforce',
      url: 'https://www.proshop.no/2878404',
    },
    {
      model: 'vision oc',
      url: 'https://www.proshop.no/2878413',
    },
    {
      model: 'eagle oc',
      url: 'https://www.proshop.no/2876841',
    },
    {
      model: 'turbo',
      url: 'https://www.proshop.no/2878410',
    },
    {
      model: 'eagle',
      url: 'https://www.proshop.no/2878406',
    },
  ]),

  // Palit Cards
  ...createBrandSeriesLinks('palit', '3090', [
    {
      model: 'gamerock oc',
      url: 'https://www.proshop.no/2911898',
    },
  ]),
];
