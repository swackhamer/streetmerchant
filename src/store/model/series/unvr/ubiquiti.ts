import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for ubiquiti unvr series
 */
export const links: Link[] = [
  // Ubiquiti Cards
  ...createBrandSeriesLinks('ubiquiti', 'unvr', [
    {
      model: 'network video recorder',
      url: 'https://store.ui.com/collections/unifi-protect/products/unvr',
    },
  ]),
];
