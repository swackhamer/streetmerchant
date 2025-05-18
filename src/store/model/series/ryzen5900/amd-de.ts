import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for amd-de ryzen5900 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5900', [
    {
      model: '5900x',
      url: 'https://www.amd.com/de/direct-buy/5450881500/de',
      cartUrl: 'https://www.amd.com/de/direct-buy/5450881500/de?add-to-cart=true',
    },
  ]),
];
