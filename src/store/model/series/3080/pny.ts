import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for pny 3080 series
 */
export const links: Link[] = [
  // Pny Cards
  ...createBrandSeriesLinks('pny', '3080', [
    {
      model: 'xlr8 revel',
      url: 'https://www.pny.com/geforce-rtx-3080-xlr8-gaming-epic-x-rgb-triple-fan-m',
    },
    {
      model: 'xlr8 revel',
      url: 'https://www.pny.com/geforce-rtx-3080-xlr8-gaming-epic-x-rgb-triple-fan-p',
    },
  ]),
];
