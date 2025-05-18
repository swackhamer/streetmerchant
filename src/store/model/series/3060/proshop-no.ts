import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for proshop-no 3060 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3060', [
    {
      model: 'dual',
      url: 'https://www.proshop.no/2918899',
    },
    {
      model: 'strix oc',
      url: 'https://www.proshop.no/2918909',
    },
    {
      model: 'tuf oc',
      url: 'https://www.proshop.no/2918906',
    },
    {
      model: 'dual oc',
      url: 'https://www.proshop.no/2918901',
    },
    {
      model: 'tuf',
      url: 'https://www.proshop.no/2918904',
    },
    {
      model: 'strix',
      url: 'https://www.proshop.no/2918907',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3060', [
    {
      model: 'ventus 3x oc',
      url: 'https://www.proshop.no/2918921',
    },
    {
      model: 'ventus 2x oc',
      url: 'https://www.proshop.no/2918919',
    },
    {
      model: 'suprim x',
      url: 'https://www.proshop.no/2918934',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.proshop.no/2918925',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3060', [
    {
      model: 'gaming oc',
      url: 'https://www.proshop.no/2918930',
    },
    {
      model: 'vision oc',
      url: 'https://www.proshop.no/2918932',
    },
    {
      model: 'eagle',
      url: 'https://www.proshop.no/2918927',
    },
    {
      model: 'eagle oc',
      url: 'https://www.proshop.no/2918928',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3060', [
    {
      model: 'twin x2 oc',
      url: 'https://www.proshop.no/2918934',
    },
    {
      model: 'ichill x3',
      url: 'https://www.proshop.no/2918935',
    },
  ]),
];
