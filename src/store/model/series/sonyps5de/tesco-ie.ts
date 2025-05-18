import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for tesco-ie sonyps5de series
 */
export const links: Link[] = [
  // Sony Cards
  ...createBrandSeriesLinks('sony', 'sonyps5de', [
    {
      model: 'ps5 digital',
      url: 'https://www.tesco.ie/groceries/product/details/?id=307756010',
    },
  ]),
];
