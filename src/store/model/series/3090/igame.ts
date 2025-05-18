import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for igame 3090 series
 */
export const links: Link[] = [
  // Colorful Cards
  ...createBrandSeriesLinks('colorful', '3090', [
    {
      model: 'battle-ax',
      url: 'https://www.igamecomputer.com.au/products/mc022?_pos=1&_sid=b07af5f7e&_ss=r',
    },
    {
      model: 'igame advanced oc',
      url: 'https://www.igamecomputer.com.au/products/mc021?_pos=2&_sid=b07af5f7e&_ss=r',
    },
  ]),
];
