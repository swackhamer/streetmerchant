import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for ubiquiti udm-us series
 */
export const links: Link[] = [
  // Ubiquiti Cards
  ...createBrandSeriesLinks('ubiquiti', 'udm-us', [
    {
      model: 'dream machine',
      url: 'https://store.ui.com/collections/unifi-network-unifi-os-consoles/products/udm-us',
    },
  ]),
];
