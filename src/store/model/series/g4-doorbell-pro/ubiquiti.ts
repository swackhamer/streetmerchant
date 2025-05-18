import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for ubiquiti g4-doorbell-pro series
 */
export const links: Link[] = [
  // Ubiquiti Cards
  ...createBrandSeriesLinks('ubiquiti', 'g4-doorbell-pro', [
    {
      model: 'g4 doorbell pro',
      url: 'https://store.ui.com/collections/unifi-protect/products/g4-doorbell-pro',
    },
  ]),
];
