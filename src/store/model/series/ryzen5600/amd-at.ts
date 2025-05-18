import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for amd-at ryzen5600 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5600', [
    {
      model: '5600x',
      url: 'https://www.amd.com/en/direct-buy/5450881700/at',
      cartUrl: 'https://www.amd.com/en/direct-buy/5450881700/at?add-to-cart=true',
    },
  ]),
];
