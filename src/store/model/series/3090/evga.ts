import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for evga 3090 series
 */
export const links: Link[] = [
  // Evga Cards
  ...createBrandSeriesLinks('evga', '3090', [
    {
      model: 'xc3 black',
      url: 'https://www.evga.com/products/product.aspx?pn=24G-P5-3971-KR',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.evga.com/products/product.aspx?pn=24G-P5-3987-KR',
    },
    {
      model: 'ftw3',
      url: 'https://www.evga.com/products/product.aspx?pn=24G-P5-3985-KR',
    },
    {
      model: 'xc3',
      url: 'https://www.evga.com/products/product.aspx?pn=24G-P5-3973-KR',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.evga.com/products/product.aspx?pn=24G-P5-3975-KR',
    },
  ]),
];
