import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for alternate-de sonyps5c series
 */
export const links: Link[] = [
  // Sony Cards
  ...createBrandSeriesLinks('sony', 'sonyps5c', [
    {
      model: 'ps5 console',
      url: 'https://www.alternate.de/html/product/1651220',
    },
    {
      model: 'ps5 console',
      url: 'https://www.alternate.de/html/product/1750947',
    },
  ]),
];
