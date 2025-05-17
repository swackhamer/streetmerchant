import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for amd-de ryzen5600 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5600', [
    {
      model: '5600x',
      url: 'https://www.amd.com/de/direct-buy/5450881700/de',
      cartUrl: 'https://www.amd.com/de/direct-buy/5450881700/de?add-to-cart=true',
    },
  ]),

];
