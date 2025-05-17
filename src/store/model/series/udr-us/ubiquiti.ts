import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for ubiquiti udr-us series
 */
export const links: Link[] = [
  // Ubiquiti Cards
  ...createBrandSeriesLinks('ubiquiti', 'udr-us', [
    {
      model: 'dream router',
      url: 'https://store.ui.com/collections/unifi-network-unifi-os-consoles/products/dream-router',
    },
  ]),

];
