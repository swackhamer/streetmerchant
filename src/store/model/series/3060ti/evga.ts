import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for evga 3060ti series
 */
export const links: Link[] = [
  // Evga Cards
  ...createBrandSeriesLinks('evga', '3060ti', [
    {
      model: 'xc gaming',
      url: 'https://www.evga.com/products/product.aspx?pn=08G-P5-3663-KR',
    },
    {
      model: 'ftw3',
      url: 'https://www.evga.com/products/product.aspx?pn=08G-P5-3665-KR',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.evga.com/products/product.aspx?pn=08G-P5-3667-KR',
    },
  ]),

];
