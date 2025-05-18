import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for ubiquiti unvr-pro series
 */
export const links: Link[] = [
  // Ubiquiti Cards
  ...createBrandSeriesLinks('ubiquiti', 'unvr-pro', [
    {
      model: 'network video recorder pro',
      url: 'https://store.ui.com/collections/unifi-protect/products/unvr-pro',
    },
  ]),
];
