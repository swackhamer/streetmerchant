import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for bestbuy sonyps5de series
 */
export const links: Link[] = [
  // Sony Cards
  ...createBrandSeriesLinks('sony', 'sonyps5de', [
    {
      model: 'ps5 digital',
      url: 'https://api.bestbuy.com/click/-/6430161/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6430161/cart',
    },
  ]),

];
