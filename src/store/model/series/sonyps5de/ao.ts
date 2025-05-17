import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for ao sonyps5de series
 */
export const links: Link[] = [
  // Sony Cards
  ...createBrandSeriesLinks('sony', 'sonyps5de', [
    {
      model: 'ps5 digital',
      url: 'https://ao.com/brands/playstation',
    },
  ]),

];
