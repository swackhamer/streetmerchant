import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for proshop-de 3090 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'strix',
      url: 'https://www.proshop.de/2876865',
    },
    {
      model: 'strix oc',
      url: 'https://www.proshop.de/2876867',
    },
    {
      model: 'tuf',
      url: 'https://www.proshop.de/2876764',
    },
    {
      model: 'tuf oc',
      url: 'https://www.proshop.de/2876869',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3090', [
    {
      model: 'aorus master',
      url: 'https://www.proshop.de/2876840',
    },
    {
      model: 'aorus xtreme',
      url: 'https://www.proshop.de/2876839',
    },
    {
      model: 'turbo',
      url: 'https://www.proshop.de/2878410',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3090', [
    {
      model: 'gaming x trio',
      url: 'https://www.proshop.de/2876881',
    },
  ]),
];
