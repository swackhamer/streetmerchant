import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for newegg-sg darkhero series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', 'darkhero', [
    {
      model: 'crosshair viii',
      url: 'https://www.newegg.com/global/sg-en/asus-rog-crosshair-viii-dark-hero/p/N82E16813119362',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16813119362',
    },
  ]),

];
