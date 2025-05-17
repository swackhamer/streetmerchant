import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for amazon-ca sonyps5de series
 */
export const links: Link[] = [
  // Sony Cards
  ...createBrandSeriesLinks('sony', 'sonyps5de', [
    {
      model: 'ps5 digital',
      url: 'https://www.amazon.ca/dp/B08GS1N24H',
      cartUrl: 'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08GS1N24H&Quantity.1=1',
    },
  ]),

];
