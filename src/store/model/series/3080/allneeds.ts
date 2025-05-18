import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for allneeds 3080 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'strix oc white',
      url: 'https://allneeds.com.au/asus-geforce-rtx-3080-rog-strix-gaming-oc-10gb-video-card-white-edition-limited-edition',
    },
  ]),
];
