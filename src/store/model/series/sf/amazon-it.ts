import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for amazon-it sf series
 */
export const links: Link[] = [
  // Corsair Cards
  ...createBrandSeriesLinks('corsair', 'sf', [
    {
      model: '750 platinum',
      url: 'https://www.amazon.it/dp/B07M63H81H',
      cartUrl: 'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B07M63H81H&Quantity.1=1',
    },
  ]),

];
