import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for ubiquiti udm-pro series
 */
export const links: Link[] = [
  // Ubiquiti Cards
  ...createBrandSeriesLinks('ubiquiti', 'udm-pro', [
    {
      model: 'dream machine pro',
      url: 'https://store.ui.com/collections/unifi-network-unifi-os-consoles/products/udm-pro',
    },
  ]),
];
