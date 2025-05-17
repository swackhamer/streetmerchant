import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for evga-eu 3080 series
 */
export const links: Link[] = [
  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080', [
    {
      model: 'ftw3',
      url: 'https://eu.evga.com/products/product.aspx?pn=10G-P5-3895-KR',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://eu.evga.com/products/product.aspx?pn=10G-P5-3897-KR',
    },
    {
      model: 'xc3',
      url: 'https://eu.evga.com/products/product.aspx?pn=10G-P5-3883-KR',
    },
    {
      model: 'xc3 black',
      url: 'https://eu.evga.com/products/product.aspx?pn=10G-P5-3881-KR',
    },
    {
      model: 'xc3 ultra',
      url: 'https://eu.evga.com/products/product.aspx?pn=10G-P5-3885-KR',
    },
  ]),

];
