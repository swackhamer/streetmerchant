import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for amazon-it sonyps5c series
 */
export const links: Link[] = [
  // Sony Cards
  ...createBrandSeriesLinks('sony', 'sonyps5c', [
    {
      model: 'ps5 console',
      url: 'https://www.amazon.it/dp/B08KKJ37F7',
      cartUrl: 'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08KKJ37F7&Quantity.1=1',
    },
  ]),
];
