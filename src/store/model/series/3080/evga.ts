import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for evga 3080 series
 */
export const links: Link[] = [
  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080', [
    {
      model: 'xc3 black',
      url: 'https://www.evga.com/products/product.aspx?pn=10G-P5-3881-KR',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.evga.com/products/product.aspx?pn=10G-P5-3897-KR',
    },
    {
      model: 'ftw3 ultra hydro copper',
      url: 'https://www.evga.com/products/product.aspx?pn=10G-P5-3897-KR',
    },
    {
      model: 'ftw3',
      url: 'https://www.evga.com/products/product.aspx?pn=10G-P5-3895-KR',
    },
    {
      model: 'xc3',
      url: 'https://www.evga.com/products/product.aspx?pn=10G-P5-3883-KR',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.evga.com/products/product.aspx?pn=10G-P5-3885-KR',
    },
  ]),
];
