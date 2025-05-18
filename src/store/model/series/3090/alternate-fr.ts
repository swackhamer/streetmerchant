import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for alternate-fr 3090 series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3090', [
    {
      model: 'aorus xtreme waterforce',
      url: 'https://www.alternate.fr/html/product/1694043',
    },
    {
      model: 'gaming oc',
      url: 'https://www.alternate.fr/html/product/1672749',
    },
    {
      model: 'vision oc',
      url: 'https://www.alternate.fr/html/product/1691159',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3090', [
    {
      model: 'gaming x trio',
      url: 'https://www.alternate.fr/html/product/1672341',
    },
  ]),

  // Palit Cards
  ...createBrandSeriesLinks('palit', '3090', [
    {
      model: 'gamerock',
      url: 'https://www.alternate.fr/html/product/1688678',
    },
  ]),
];
