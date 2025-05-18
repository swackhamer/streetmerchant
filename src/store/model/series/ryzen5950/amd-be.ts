import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for amd-be ryzen5950 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5950', [
    {
      model: '5950x',
      url: 'https://www.amd.com/en/direct-buy/5450881400/be',
      cartUrl: 'https://www.amd.com/en/direct-buy/5450881400/be?add-to-cart=true',
    },
  ]),
];
