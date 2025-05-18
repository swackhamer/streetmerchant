import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for pcbyte rx6900xt series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', 'rx6900xt', [
    {
      model: 'gaming oc',
      url: 'https://www.pcbyte.com.au/store/product/gigabyte-amd-radeon-rx-6900-xt-gaming-oc-16g-video-card-gv-r69xtgaming-oc-16gd-205734',
    },
  ]),

  // Sapphire Cards
  ...createBrandSeriesLinks('sapphire', 'rx6900xt', [
    {
      model: 'nitro+',
      url: 'https://www.pcbyte.com.au/store/product/sapphire-amd-radeon-rx-6900-xt-nitro-16gb-video-card-11308-01-20g-185858',
    },
  ]),
];
