import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for dcomp ryzen5900 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5900', [
    {
      model: '5900x',
      url: 'https://dcomp.com.au/productdetail/3270',
    },
  ]),
];
