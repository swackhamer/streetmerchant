import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for amazon-it sonyps5de series
 */
export const links: Link[] = [
  // Sony Cards
  ...createBrandSeriesLinks('sony', 'sonyps5de', [
    {
      model: 'ps5 digital',
      url: 'https://www.amazon.it/dp/B08KJF2D25',
      cartUrl: 'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08KJF2D25&Quantity.1=1',
    },
  ]),

];
