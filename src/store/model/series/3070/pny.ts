import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for pny 3070 series
 */
export const links: Link[] = [
  // Pny Cards
  ...createBrandSeriesLinks('pny', '3070', [
    {
      model: 'dual fan',
      url: 'https://www.pny.com/pny-geforce-rtx-3070-8gb-df',
    },
    {
      model: 'xlr8 revel',
      url: 'https://www.pny.com/geforce-rtx-3070-xlr8-gaming-epic-x-rgb-triple-fan',
    },
  ]),
];
