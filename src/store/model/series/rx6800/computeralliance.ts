import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for computeralliance rx6800 series
 */
export const links: Link[] = [
  // Asrock Cards
  ...createBrandSeriesLinks('asrock', 'rx6800', [
    {
      model: 'amd reference',
      url: 'https://www.computeralliance.com.au/asrock-rx6800-16gb-pcie-video-card',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', 'rx6800', [
    {
      model: 'gaming oc',
      url: 'https://www.computeralliance.com.au/gigabyte-rx6800-16gb-gaming-oc-pcie-video-card-gv-r68gaming-oc-16gd',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', 'rx6800', [
    {
      model: 'amd reference',
      url: 'https://www.computeralliance.com.au/msi-rx6800-16gb-pcie-video-card',
    },
  ]),
];
