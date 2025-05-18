import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for computeruniverse rx6700xt series
 */
export const links: Link[] = [
  // Asrock Cards
  ...createBrandSeriesLinks('asrock', 'rx6700xt', [
    {
      model: 'challenger oc',
      url: 'https://www.computeruniverse.net/de/p/90829010',
    },
    {
      model: 'challenger pro oc',
      url: 'https://www.computeruniverse.net/de/p/90829011',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', 'rx6700xt', [
    {
      model: 'tuf oc',
      url: 'https://www.computeruniverse.net/de/p/90828759',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', 'rx6700xt', [
    {
      model: 'aorus elite',
      url: 'https://www.computeruniverse.net/de/p/90829454',
    },
  ]),

  // Xfx Cards
  ...createBrandSeriesLinks('xfx', 'rx6700xt', [
    {
      model: 'swft',
      url: 'https://www.computeruniverse.net/de/p/90829019',
    },
  ]),
];
