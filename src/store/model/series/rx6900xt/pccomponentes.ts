import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for pccomponentes rx6900xt series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', 'rx6900xt', [
    {
      model: 'gaming oc',
      url: 'https://www.pccomponentes.com/gigabyte-radeon-rx-6900-xt-gaming-oc-16gb-gddr6',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', 'rx6900xt', [
    {
      model: 'tuf oc',
      url: 'https://www.pccomponentes.com/asus-tuf-amd-radeon-rx-6900xt-oc-16gb-gddr6',
    },
  ]),
];
