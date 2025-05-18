import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for noelleeming sonyps5c series
 */
export const links: Link[] = [
  // Sony Cards
  ...createBrandSeriesLinks('sony', 'sonyps5c', [
    {
      model: 'ps5 console',
      url: 'https://www.noelleeming.co.nz/prod192865.html',
    },
  ]),
];
