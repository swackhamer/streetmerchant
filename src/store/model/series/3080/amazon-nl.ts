import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for amazon-nl 3080 series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'ventus 3x oc',
      url: 'https://www.amazon.nl/dp/B08HM4M621',
      cartUrl: 'https://www.amazon.nl/gp/aws/cart/add.html?ASIN.1=B08HM4M621&Quantity.1=1',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.amazon.nl/dp/B08HM4V2DH',
      cartUrl: 'https://www.amazon.nl/gp/aws/cart/add.html?ASIN.1=B08HM4V2DH&Quantity.1=1',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080', [
    {
      model: 'xc3 ultra',
      url: 'https://www.amazon.nl/dp/B08HJ9XFNM',
      cartUrl: 'https://www.amazon.nl/gp/aws/cart/add.html?ASIN.1=B08HJ9XFNM&Quantity.1=1',
    },
    {
      model: 'xc3 black',
      url: 'https://www.amazon.nl/dp/B08HH1BMQQ',
      cartUrl: 'https://www.amazon.nl/gp/aws/cart/add.html?ASIN.1=B08HH1BMQQ&Quantity.1=1',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'strix',
      url: 'https://www.amazon.nl/dp/B08HN7VVLJ',
      cartUrl: 'https://www.amazon.nl/gp/aws/cart/add.html?ASIN.1=B08HN7VVLJ&Quantity.1=1',
    },
  ]),
];
