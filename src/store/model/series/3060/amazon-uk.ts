import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for amazon-uk 3060 series
 */
export const links: Link[] = [
  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3060', [
    {
      model: 'twin edge oc',
      url: 'https://smile.amazon.co.uk/dp/B08W8DGK3X',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08W8DGK3X&Quantity.1=1',
    },
    {
      model: 'twin edge oc',
      url: 'https://smile.amazon.co.uk/dp/B08WRK84PS',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08WRK84PS&Quantity.1=1',
    },
    {
      model: 'amp white',
      url: 'https://smile.amazon.co.uk/dp/B08WRV24YD',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08WRV24YD&Quantity.1=1',
    },
    {
      model: 'twin edge',
      url: 'https://smile.amazon.co.uk/dp/B08WRF18SC',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08WRF18SC&Quantity.1=1',
    },
  ]),

  // Palit Cards
  ...createBrandSeriesLinks('palit', '3060', [
    {
      model: 'dual oc',
      url: 'https://smile.amazon.co.uk/dp/B08WRBF83Y',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08WRBF83Y&Quantity.1=1',
    },
  ]),

  // Kfa2 Cards
  ...createBrandSeriesLinks('kfa2', '3060', [
    {
      model: 'dual oc',
      url: 'https://smile.amazon.co.uk/dp/B08ZJPGJ1B',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08ZJPGJ1B&Quantity.1=1',
    },
    {
      model: 'gaming',
      url: 'https://smile.amazon.co.uk/dp/B08Y92K1DZ',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08Y92K1DZ&Quantity.1=1',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3060', [
    {
      model: 'gaming x trio',
      url: 'https://smile.amazon.co.uk/dp/B08WH4RK2C',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08WH4RK2C&Quantity.1=1',
    },
    {
      model: 'gaming x',
      url: 'https://smile.amazon.co.uk/dp/B08WHML7GL',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08WHML7GL&Quantity.1=1',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://smile.amazon.co.uk/dp/B08WRP83LN',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08WRP83LN&Quantity.1=1',
    },
    {
      model: 'gaming x trio',
      url: 'https://smile.amazon.co.uk/dp/B08WT47L8B',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08WT47L8B&Quantity.1=1',
    },
    {
      model: 'ventus 2x',
      url: 'https://smile.amazon.co.uk/dp/B08WHJFYM8',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08WHJFYM8&Quantity.1=1',
    },
    {
      model: 'gaming x',
      url: 'https://smile.amazon.co.uk/dp/B08WPJ5P4R',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08WPJ5P4R&Quantity.1=1',
    },
    {
      model: 'ventus 2x oc',
      url: 'https://smile.amazon.co.uk/dp/B08WPRMVWB',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08WPRMVWB&Quantity.1=1',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3060', [
    {
      model: 'xlr8 epic x',
      url: 'https://smile.amazon.co.uk/dp/B08X12YK8G',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08X12YK8G&Quantity.1=1',
    },
    {
      model: 'uprising',
      url: 'https://smile.amazon.co.uk/dp/B08WS1R9CM',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08WS1R9CM&Quantity.1=1',
    },
    {
      model: 'xlr8 revel',
      url: 'https://smile.amazon.co.uk/dp/B08WRQ3JR1',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08WRQ3JR1&Quantity.1=1',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3060', [
    {
      model: 'eagle oc',
      url: 'https://smile.amazon.co.uk/dp/B08WBB3ZMJ',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08WBB3ZMJ&Quantity.1=1',
    },
    {
      model: 'aorus',
      url: 'https://smile.amazon.co.uk/dp/B08WS5X6F5',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08WS5X6F5&Quantity.1=1',
    },
    {
      model: 'vision oc',
      url: 'https://smile.amazon.co.uk/dp/B08WBB7KXV',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08WBB7KXV&Quantity.1=1',
    },
  ]),

  // Gainward Cards
  ...createBrandSeriesLinks('gainward', '3060', [
    {
      model: 'ghost oc',
      url: 'https://smile.amazon.co.uk/dp/B08X4Y9FQN',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08X4Y9FQN&Quantity.1=1',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3060', [
    {
      model: 'strix oc',
      url: 'https://smile.amazon.co.uk/dp/B08WGTL4CW',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08WGTL4CW&Quantity.1=1',
    },
    {
      model: 'tuf oc',
      url: 'https://smile.amazon.co.uk/dp/B08WHJPBFX',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08WHJPBFX&Quantity.1=1',
    },
    {
      model: 'dual',
      url: 'https://smile.amazon.co.uk/dp/B08CRH6DYB',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08CRH6DYB&Quantity.1=1',
    },
    {
      model: 'dual',
      url: 'https://smile.amazon.co.uk/dp/B08CRH6DYB',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08CRH6DYB&Quantity.1=1',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3060', [
    {
      model: 'xc gaming',
      url: 'https://smile.amazon.co.uk/dp/B08XQWR62V',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08XQWR62V&Quantity.1=1',
    },
    {
      model: 'xc gaming',
      url: 'https://smile.amazon.co.uk/dp/B08WM28PVH',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08WM28PVH&Quantity.1=1',
    },
  ]),
];
