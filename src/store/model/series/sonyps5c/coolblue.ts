import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for coolblue sonyps5c series
 */
export const links: Link[] = [
  // Sony Cards
  ...createBrandSeriesLinks('sony', 'sonyps5c', [
    {
      model: 'ps5 console',
      url: 'https://www.coolblue.nl/en/product/873655',
    },
    {
      model: 'ps5 console',
      url: 'https://www.coolblue.nl/en/product/865866',
    },
    {
      model: 'ps5 console',
      url: 'https://www.coolblue.nl/product/883789',
    },
    {
      model: 'ps5 console',
      url: 'https://www.coolblue.nl/product/884071',
    },
    {
      model: 'ps5 console',
      url: 'https://www.coolblue.nl/product/884069',
    },
  ]),
];
