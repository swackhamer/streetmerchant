import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for evga 3070 series
 */
export const links: Link[] = [
  // Evga Cards
  ...createBrandSeriesLinks('evga', '3070', [
    {
      model: 'xc3 black',
      url: 'https://www.evga.com/products/product.aspx?pn=08G-P5-3751-KR',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.evga.com/products/product.aspx?pn=08G-P5-3755-KR',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.evga.com/products/product.aspx?pn=08G-P5-3767-KR',
    },
  ]),
];
