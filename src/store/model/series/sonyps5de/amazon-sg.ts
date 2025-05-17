import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for amazon-sg sonyps5de series
 */
export const links: Link[] = [
  // Sony Cards
  ...createBrandSeriesLinks('sony', 'sonyps5de', [
    {
      model: 'ps5 digital',
      url: 'https://www.amazon.sg/dp/B08FC6MR62',
      cartUrl: 'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08FC6MR62&Quantity.1=1',
    },
    {
      model: 'ps5 digital',
      url: 'https://www.amazon.sg/dp/B08HNSWWT7',
      cartUrl: 'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08HNSWWT7&Quantity.1=1',
    },
  ]),

];
