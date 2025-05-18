import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for amd-it ryzen5900 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5900', [
    {
      model: '5900x',
      url: 'https://www.amd.com/en/direct-buy/5450881500/it',
      cartUrl: 'https://www.amd.com/en/direct-buy/5450881500/it?add-to-cart=true',
    },
  ]),
];
