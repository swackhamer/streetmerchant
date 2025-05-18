import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for newegg-sg xboxsx series
 */
export const links: Link[] = [
  // Microsoft Cards
  ...createBrandSeriesLinks('microsoft', 'xboxsx', [
    {
      model: 'xbox series x',
      url: 'https://www.newegg.com/global/sg-en/p/N82E16868105273',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16868105273',
    },
  ]),
];
