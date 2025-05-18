import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for amd-uk ryzen5800 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5800', [
    {
      model: '5800x',
      url: 'https://www.amd.com/en/direct-buy/5450881600/gb',
      cartUrl: 'https://www.amd.com/en/direct-buy/5450881600/gb?add-to-cart=true',
    },
  ]),
];
