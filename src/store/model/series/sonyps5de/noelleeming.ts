import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for noelleeming sonyps5de series
 */
export const links: Link[] = [
  // Sony Cards
  ...createBrandSeriesLinks('sony', 'sonyps5de', [
    {
      model: 'ps5 digital',
      url: 'https://www.noelleeming.co.nz/prod192879.html',
    },
  ]),
];
