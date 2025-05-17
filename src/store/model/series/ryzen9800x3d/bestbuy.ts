import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for bestbuy ryzen9800x3d series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen9800x3d', [
    {
      model: '9800x3d',
      url: 'https://api.bestbuy.com/click/-/6606318/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6606318/cart',
    },
  ]),

];
