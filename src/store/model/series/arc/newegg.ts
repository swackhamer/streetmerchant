import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for newegg arc series
 */
export const links: Link[] = [
  // Sparkle Cards
  ...createBrandSeriesLinks('sparkle', 'arc', [
    {
      model: 'b580',
      url: 'https://www.newegg.com/sparkle-intel-arc-b580-titan-oc-12gb-gddr6/p/N82E16814993013',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814993013',
      itemNumber: '14-993-013',
    },
  ]),

];
