import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for kabum ryzen5800 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5800', [
    {
      model: '5800x',
      url: 'https://www.kabum.com.br/produto/129459',
    },
  ]),
];
