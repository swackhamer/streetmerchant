import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for memoryexpress 5080 series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '5080', [
    {
      model: 'windforce oc',
      url: 'https://www.memoryexpress.com/Products/MX00132482',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '5080', [
    {
      model: 'prime',
      url: 'https://www.memoryexpress.com/Products/MX00132529',
    },
  ]),

];
