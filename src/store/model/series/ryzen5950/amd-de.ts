import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for amd-de ryzen5950 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5950', [
    {
      model: '5950x',
      url: 'https://www.amd.com/de/direct-buy/5450881400/de',
      cartUrl: 'https://www.amd.com/de/direct-buy/5450881400/de?add-to-cart=true',
    },
  ]),
];
