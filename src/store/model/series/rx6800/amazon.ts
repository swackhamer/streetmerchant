import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for amazon rx6800 series
 */
export const links: Link[] = [
  // Xfx Cards
  ...createBrandSeriesLinks('xfx', 'rx6800', [
    {
      model: 'amd reference',
      url: 'https://www.amazon.com/dp/B08NN76VJD',
      cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08NN76VJD&Quantity.1=1',
    },
    {
      model: 'merc',
      url: 'https://www.amazon.com/dp/B08P5YFZCY',
      cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08P5YFZCY&Quantity.1=1',
    },
  ]),

  // Powercolor Cards
  ...createBrandSeriesLinks('powercolor', 'rx6800', [
    {
      model: 'amd reference',
      url: 'https://www.amazon.com/dp/B08MNZM5TK',
      cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08MNZM5TK&Quantity.1=1',
    },
  ]),

  // Sapphire Cards
  ...createBrandSeriesLinks('sapphire', 'rx6800', [
    {
      model: 'amd reference',
      url: 'https://www.amazon.com/dp/B08MVCLBWK',
      cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08MVCLBWK&Quantity.1=1',
    },
    {
      model: 'nitro+',
      url: 'https://www.amazon.com/dp/B08NXZSPMY',
      cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08NXZSPMY&Quantity.1=1',
    },
    {
      model: 'pulse',
      url: 'https://www.amazon.com/dp/B08NXYBVDB',
      cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08NXYBVDB&Quantity.1=1',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', 'rx6800', [
    {
      model: 'strix oc',
      url: 'https://www.amazon.com/dp/B08NWJ29NB',
      cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08NWJ29NB&Quantity.1=1',
    },
    {
      model: 'tuf oc',
      url: 'https://www.amazon.com/dp/B08P3YT3MY',
      cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08P3YT3MY&Quantity.1=1',
    },
  ]),
];
