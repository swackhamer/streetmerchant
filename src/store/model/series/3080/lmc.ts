import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for lmc 3080 series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'gaming x trio',
      url: 'https://www.lmc.com.au/msi-geforce-rtx-3080-gaming-x-trio-10g-gaming-graphics-card',
    },
  ]),

  // Leadtek Cards
  ...createBrandSeriesLinks('leadtek', '3080', [
    {
      model: 'hurricane',
      url: 'https://www.lmc.com.au/leadtek-geforce-rtx-3080-hurricane-12789000110-10g-gddr6x-hdmi2.1-3xdp1.4a',
    },
  ]),
];
