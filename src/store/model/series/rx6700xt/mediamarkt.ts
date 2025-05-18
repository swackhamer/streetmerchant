import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for mediamarkt rx6700xt series
 */
export const links: Link[] = [
  // Asrock Cards
  ...createBrandSeriesLinks('asrock', 'rx6700xt', [
    {
      model: 'phantom gaming oc',
      url: 'https://www.mediamarkt.de/de/product/-85340951.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', 'rx6700xt', [
    {
      model: 'aorus elite',
      url: 'https://www.mediamarkt.de/de/product/-2728671.html',
    },
  ]),
];
