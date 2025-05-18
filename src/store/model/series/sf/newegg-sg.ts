import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for newegg-sg sf series
 */
export const links: Link[] = [
  // Corsair Cards
  ...createBrandSeriesLinks('corsair', 'sf', [
    {
      model: '750 platinum',
      url: 'https://www.newegg.com/global/sg-en/corsair-sf750-cp-9020186-na-750w/p/N82E16817139080',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16817139080',
    },
    {
      model: '600 platinum',
      url: 'https://www.newegg.com/global/sg-en/corsair-sf-series-sf600-cp-9020182-na-600w/p/N82E16817139242',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16817139242',
    },
  ]),
];
