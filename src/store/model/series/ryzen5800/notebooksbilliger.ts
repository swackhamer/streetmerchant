import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for notebooksbilliger ryzen5800 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5800', [
    {
      model: '5800x',
      url: 'https://www.notebooksbilliger.de/amd+ryzen+ryzen+7+5800x+cpu+684018',
    },
  ]),
];
