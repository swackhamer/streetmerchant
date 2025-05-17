import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for wipoid 3060 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3060', [
    {
      model: 'strix',
      url: 'https://www.wipoid.com/asus-rog-strix-geforce-rtx-3060-12gb-gddr6.html',
    },
    {
      model: 'strix oc',
      url: 'https://www.wipoid.com/asus-rog-strix-geforce-rtx-3060-oc-edition-12gb-gddr6.html',
    },
  ]),

];
