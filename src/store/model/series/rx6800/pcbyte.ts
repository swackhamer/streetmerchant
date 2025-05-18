import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for pcbyte rx6800 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', 'rx6800', [
    {
      model: 'tuf oc',
      url: 'https://www.pcbyte.com.au/store/product/asus-amd-radeon-rx-6800-tuf-gaming-oc-16gb-video-card-tuf-rx6800-o16g-gaming-171072',
    },
    {
      model: 'strix oc',
      url: 'https://www.pcbyte.com.au/store/product/asus-amd-radeon-rx-6800-rog-strix-oc-16gb-video-card-rog-strix-rx6800-o16g-gaming-171073',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', 'rx6800', [
    {
      model: 'gaming oc',
      url: 'https://www.pcbyte.com.au/store/product/gigabyte-amd-radeon-rx-6800-gaming-oc-16gb-video-card-gv-r68gaming-oc-16gd-78455',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', 'rx6800', [
    {
      model: 'gaming x trio',
      url: 'https://www.pcbyte.com.au/store/product/msi-amd-radeon-rx-6800-gaming-x-trio-16g-video-card-151402',
    },
  ]),

  // Sapphire Cards
  ...createBrandSeriesLinks('sapphire', 'rx6800', [
    {
      model: 'nitro+',
      url: 'https://www.pcbyte.com.au/store/product/sapphire-amd-radeon-rx-6800-nitro-16gb-video-card-11305-01-20g-152047',
    },
  ]),
];
