import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for amazon-de rx6700xt series
 */
export const links: Link[] = [
  // Asrock Cards
  ...createBrandSeriesLinks('asrock', 'rx6700xt', [
    {
      model: 'challenger oc',
      url: 'https://www.amazon.de/dp/B0977DG15L',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B0977DG15L&Quantity.1=1',
    },
    {
      model: 'challenger',
      url: 'https://www.amazon.de/dp/B093Z4BHJH',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B093Z4BHJH&Quantity.1=1',
    },
    {
      model: 'challenger pro oc',
      url: 'https://www.amazon.de/dp/B08ZDT3Q8H',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08ZDT3Q8H&Quantity.1=1',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', 'rx6700xt', [
    {
      model: 'dual',
      url: 'https://www.amazon.de/dp/B08CS6Z8R9',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08CS6Z8R9&Quantity.1=1',
    },
    {
      model: 'dual',
      url: 'https://www.amazon.de/dp/B08YWRFSQB/',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08YWRFSQB&Quantity.1=1',
    },
    {
      model: 'tuf oc',
      url: 'https://www.amazon.de/dp/B08BZP24CH',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08BZP24CH&Quantity.1=1',
    },
    {
      model: 'tuf oc',
      url: 'https://www.amazon.de/dp/B08YX8D8ST/',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08YX8D8ST&Quantity.1=1',
    },
    {
      model: 'strix',
      url: 'https://www.amazon.de/dp/B08BZPX64M/',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08BZPX64M&Quantity.1=1',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', 'rx6700xt', [
    {
      model: 'aorus elite',
      url: 'https://www.amazon.de/dp/B08Y74T47X/',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08Y74T47X&Quantity.1=1',
    },
    {
      model: 'eagle',
      url: 'https://www.amazon.de/dp/B08Y758F6C/',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08Y758F6C&Quantity.1=1',
    },
    {
      model: 'gaming oc',
      url: 'https://www.amazon.de/dp/B08Y746XN7/',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08Y746XN7&Quantity.1=1',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', 'rx6700xt', [
    {
      model: 'gaming x',
      url: 'https://www.amazon.de/dp/B08Z72P3R9/',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08Z72P3R9&Quantity.1=1',
    },
    {
      model: 'gaming x',
      url: 'https://www.amazon.de/dp/B09318LCPP/',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B09318LCPP&Quantity.1=1',
    },
    {
      model: 'mech 2x',
      url: 'https://www.amazon.de/dp/B08Z84S3K6',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08Z84S3K6&Quantity.1=1',
    },
    {
      model: 'mech 2x oc',
      url: 'https://www.amazon.de/dp/B08Z8LHVR1/',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08Z8LHVR1&Quantity.1=1',
    },
  ]),

  // Powercolor Cards
  ...createBrandSeriesLinks('powercolor', 'rx6700xt', [
    {
      model: 'hellhound',
      url: 'https://www.amazon.de/dp/B08Y93KQR4/',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08Y93KQR4&Quantity.1=1',
    },
    {
      model: 'hellhound white',
      url: 'https://www.amazon.de/dp/B094MM9X6S/',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B094MM9X6S&Quantity.1=1',
    },
    {
      model: 'red devil',
      url: 'https://www.amazon.de/dp/B08Y934HZQ/',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08Y934HZQ&Quantity.1=1',
    },
  ]),

  // Sapphire Cards
  ...createBrandSeriesLinks('sapphire', 'rx6700xt', [
    {
      model: 'amd reference',
      url: 'https://www.amazon.de/dp/B08Y7K29X9/',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08Y7K29X9&Quantity.1=1',
    },
    {
      model: 'nitro+ oc',
      url: 'https://www.amazon.de/dp/B08Y835PXB/',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08Y835PXB&Quantity.1=1',
    },
    {
      model: 'nitro+ oc',
      url: 'https://www.amazon.de/dp/B094593LB8/',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B094593LB8&Quantity.1=1',
    },
    {
      model: 'nitro+ oc',
      url: 'https://www.amazon.de/dp/B08Y7ZYNDN/',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08Y7ZYNDN&Quantity.1=1',
    },
  ]),

  // Xfx Cards
  ...createBrandSeriesLinks('xfx', 'rx6700xt', [
    {
      model: 'amd reference',
      url: 'https://www.amazon.de/dp/B08YKCRB74/',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08YKCRB74&Quantity.1=1',
    },
    {
      model: 'merc',
      url: 'https://www.amazon.de/dp/B08YK97LKC/',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08YK97LKC&Quantity.1=1',
    },
    {
      model: 'qick',
      url: 'https://www.amazon.de/dp/B091ZKN2RV/',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B091ZKN2RV&Quantity.1=1',
    },
    {
      model: 'qick ultra',
      url: 'https://www.amazon.de/dp/B08YKFS27X/',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08YKFS27X&Quantity.1=1',
    },
    {
      model: 'swft',
      url: 'https://www.amazon.de/dp/B08YKCC8XD/',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08YKCC8XD&Quantity.1=1',
    },
  ]),
];
