import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for amazon-ca ryzen5900 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5900', [
    {
      model: '5900x',
      url: 'https://www.amazon.ca/dp/B08164VTWH',
      cartUrl: 'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08164VTWH&Quantity.1=1',
    },
  ]),

];
