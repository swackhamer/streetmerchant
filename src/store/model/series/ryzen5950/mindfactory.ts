import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for mindfactory ryzen5950 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5950', [
    {
      model: '5950x',
      url: 'https://www.mindfactory.de/product_info.php/AMD-Ryzen-9-5950X-16x-3-40GHz-So-AM4-WOF_1380729.html',
    },
  ]),
];
