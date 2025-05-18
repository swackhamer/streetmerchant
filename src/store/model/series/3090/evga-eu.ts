import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for evga-eu 3090 series
 */
export const links: Link[] = [
  // Evga Cards
  ...createBrandSeriesLinks('evga', '3090', [
    {
      model: 'ftw3',
      url: 'https://eu.evga.com/products/product.aspx?pn=24G-P5-3985-KR',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://eu.evga.com/products/product.aspx?pn=24G-P5-3987-KR',
    },
    {
      model: 'xc3',
      url: 'https://eu.evga.com/products/product.aspx?pn=24G-P5-3973-KR',
    },
    {
      model: 'xc3 black',
      url: 'https://eu.evga.com/products/product.aspx?pn=24G-P5-3971-KR',
    },
    {
      model: 'xc3 ultra',
      url: 'https://eu.evga.com/products/product.aspx?pn=24G-P5-3975-KR',
    },
  ]),
];
