import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for pny 4080-16g series
 */
export const links: Link[] = [
  // Pny Cards
  ...createBrandSeriesLinks('pny', '4080-16g', [
    {
      model: 'xlr8 verto epic x',
      url: 'https://www.pny.com/pny-geforce-rtx-4080-16gb-xlr8-gaming-verto-epic-x-rgb-triple-fan',
    },
    {
      model: 'xlr8 verto epic x oc',
      url: 'https://www.pny.com/pny-geforce-rtx-4080-16gb-epic-x-argb-triple-fan-oc',
    },
  ]),
];
