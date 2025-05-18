import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for amd-at ryzen5900 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5900', [
    {
      model: '5900x',
      url: 'https://www.amd.com/en/direct-buy/5450881500/at',
      cartUrl: 'https://www.amd.com/en/direct-buy/5450881500/at?add-to-cart=true',
    },
  ]),
];
