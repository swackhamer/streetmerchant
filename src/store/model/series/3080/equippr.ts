import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for equippr 3080 series
 */
export const links: Link[] = [
  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080', [
    {
      model: 'xc3 ultra',
      url: 'https://www.equippr.de/evga-geforce-rtx-3080-xc3-ultra-gaming-10-gb-gddr6x-retail-2061393.html',
    },
    {
      model: 'xc3',
      url: 'https://www.equippr.de/evga-geforce-rtx-3080-xc3-gaming-10-gb-gddr6x-retail-2061391.html',
    },
  ]),
];
