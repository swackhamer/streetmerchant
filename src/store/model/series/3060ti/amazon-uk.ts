import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for amazon-uk 3060ti series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', '3060ti', [
    {
      model: 'ventus 2x oc',
      url: 'https://www.amazon.co.uk/dp/B08P2DQ28S',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08P2DQ28S&Quantity.1=1',
    },
    {
      model: 'ventus 2x oc',
      url: 'https://www.amazon.co.uk/dp/B08NW2YJB2',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08NW2YJB2&Quantity.1=1',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3060ti', [
    {
      model: 'twin edge',
      url: 'https://www.amazon.co.uk/dp/B08P3XJLJJ',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08P3XJLJJ&Quantity.1=1',
    },
    {
      model: 'twin edge oc',
      url: 'https://www.amazon.co.uk/dp/B08P3V572B',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08P3V572B&Quantity.1=1',
    },
    {
      model: 'twin edge oc',
      url: 'https://www.amazon.co.uk/dp/B08P3BJ9Y8',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08P3BJ9Y8&Quantity.1=1',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3060ti', [
    {
      model: 'eagle',
      url: 'https://www.amazon.co.uk/dp/B08P3JPX8P',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08P3JPX8P&Quantity.1=1',
    },
    {
      model: 'gaming oc',
      url: 'https://www.amazon.co.uk/dp/B08NW2X37Z',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08NW2X37Z&Quantity.1=1',
    },
    {
      model: 'eagle oc',
      url: 'https://www.amazon.co.uk/dp/B08NW528S1',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08NW528S1&Quantity.1=1',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3060ti', [
    {
      model: 'xlr8 revel',
      url: 'https://www.amazon.co.uk/dp/B08NW693LG',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08NW693LG&Quantity.1=1',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3060ti', [
    {
      model: 'tuf oc',
      url: 'https://www.amazon.co.uk/dp/B083Z5P6TX',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B083Z5P6TX&Quantity.1=1',
    },
    {
      model: 'tuf oc',
      url: 'https://www.amazon.co.uk/dp/B08NZ4G4T2',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08NZ4G4T2&Quantity.1=1',
    },
    {
      model: 'dual oc',
      url: 'https://www.amazon.co.uk/dp/B08P2HBBLX',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08P2HBBLX&Quantity.1=1',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3060ti', [
    {
      model: 'ftw3',
      url: 'https://www.amazon.co.uk/dp/B08PDN36R3',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08PDN36R3&Quantity.1=1',
    },
    {
      model: 'xc gaming',
      url: 'https://www.amazon.co.uk/dp/B08PDP837W',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08PDP837W&Quantity.1=1',
    },
    {
      model: 'xc3 black',
      url: 'https://www.amazon.co.uk/dp/B08PDMVPZ4',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08PDMVPZ4&Quantity.1=1',
    },
  ]),

];
