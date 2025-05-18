import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for mindfactory ryzen5800 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5800', [
    {
      model: '5800x',
      url: 'https://www.mindfactory.de/product_info.php/AMD-Ryzen-7-5800X-8x-3-80GHz-So-AM4-WOF_1380727.html',
    },
  ]),
];
