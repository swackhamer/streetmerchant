import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for newegg a3-matx series
 */
export const links: Link[] = [
  // Lianli Cards
  ...createBrandSeriesLinks('lianli', 'a3-matx', [
    {
      model: 'a3 matx wd',
      url: 'https://www.newegg.com/p/2AM-000Z-000E0',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=2AM-000Z-000E0',
    },
  ]),
];
