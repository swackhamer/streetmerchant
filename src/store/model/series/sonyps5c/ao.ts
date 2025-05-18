import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for ao sonyps5c series
 */
export const links: Link[] = [
  // Sony Cards
  ...createBrandSeriesLinks('sony', 'sonyps5c', [
    {
      model: 'ps5 console',
      url: 'https://ao.com/brands/playstation',
    },
  ]),
];
