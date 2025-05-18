import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for amd-at ryzen5950 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5950', [
    {
      model: '5950x',
      url: 'https://www.amd.com/en/direct-buy/5450881400/at',
      cartUrl: 'https://www.amd.com/en/direct-buy/5450881400/at?add-to-cart=true',
    },
  ]),
];
