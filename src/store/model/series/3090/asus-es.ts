import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for asus-es 3090 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'tuf',
      url: 'https://estore.asus.com/es/90yv0fd0-m0nm00-tuf-rtx3090-24g-gaming.html',
    },
  ]),

];
