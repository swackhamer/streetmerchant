import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for pny 3060 series
 */
export const links: Link[] = [
  // Pny Cards
  ...createBrandSeriesLinks('pny', '3060', [
    {
      model: 'dual fan',
      url: 'https://www.pny.com/geforce-rtx-3060-12gb-xlr8-gaming-revel-epic-x-rgb-df',
    },
    {
      model: 'single fan',
      url: 'https://www.pny.com/pny-geforce-rtx-3060-12gb-xlr8-gaming-revel-epic-x-rgb-sf',
    },
  ]),

];
