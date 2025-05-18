import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for msy rx6800 series
 */
export const links: Link[] = [
  // Asrock Cards
  ...createBrandSeriesLinks('asrock', 'rx6800', [
    {
      model: 'amd reference',
      url: 'https://www.msy.com.au/asrock-radeon-radeon-rx6800-16g-16gb-rx-6800-pci-e-vga-card',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', 'rx6800', [
    {
      model: 'gaming x trio',
      url: 'https://www.msy.com.au/msi-radeon-rx-6800-gaming-x-trio-16g-16gb-rx-6800-pci-e-vga-card',
    },
  ]),
];
