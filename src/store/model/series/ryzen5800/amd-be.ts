import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for amd-be ryzen5800 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5800', [
    {
      model: '5800x',
      url: 'https://www.amd.com/en/direct-buy/5450881600/be',
      cartUrl: 'https://www.amd.com/en/direct-buy/5450881600/be?add-to-cart=true',
    },
  ]),
];
