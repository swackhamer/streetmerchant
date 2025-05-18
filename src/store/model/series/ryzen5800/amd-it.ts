import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for amd-it ryzen5800 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5800', [
    {
      model: '5800x',
      url: 'https://www.amd.com/en/direct-buy/5450881600/it',
      cartUrl: 'https://www.amd.com/en/direct-buy/5450881600/it?add-to-cart=true',
    },
  ]),
];
