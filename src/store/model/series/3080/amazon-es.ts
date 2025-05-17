import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for amazon-es 3080 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'turbo',
      url: 'https://www.amazon.es/dp/B08D3LH86H',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08D3LH86H&Quantity.1=1',
    },
    {
      model: 'strix white',
      url: 'https://www.amazon.es/dp/B08BL4QX75',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08BL4QX75&Quantity.1=1',
    },
    {
      model: 'tuf',
      url: 'https://www.amazon.es/dp/B08HN37VQK',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HN37VQK&Quantity.1=1',
    },
    {
      model: 'tuf oc',
      url: 'https://www.amazon.es/dp/B08HN4DSTC',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HN4DSTC&Quantity.1=1',
    },
    {
      model: 'strix oc',
      url: 'https://www.amazon.es/dp/B08HN6KYS3',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HN6KYS3&Quantity.1=1',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'gaming z trio',
      url: 'https://www.amazon.es/dp/B092CYHPDJ',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B092CYHPDJ&Quantity.1=1',
    },
    {
      model: 'suprim x',
      url: 'https://www.amazon.es/dp/B08LTKLG5K',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08LTKLG5K&Quantity.1=1',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.amazon.es/dp/B08HM4V2DH',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HM4V2DH&Quantity.1=1',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.amazon.es/dp/B08HM4M621',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HM4M621&Quantity.1=1',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3080', [
    {
      model: 'amp holo',
      url: 'https://www.amazon.es/dp/B08KGVL9JQ',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08KGVL9JQ&Quantity.1=1',
    },
    {
      model: 'trinity oc',
      url: 'https://www.amazon.es/dp/B08HVV2P4Z',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HVV2P4Z&Quantity.1=1',
    },
    {
      model: 'trinity oc',
      url: 'https://www.amazon.es/dp/B08K3PDL9K',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08K3PDL9K&Quantity.1=1',
    },
    {
      model: 'trinity',
      url: 'https://www.amazon.es/dp/B08HR1NPPQ',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HR1NPPQ&Quantity.1=1',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080', [
    {
      model: 'xc3',
      url: 'https://www.amazon.es/dp/B08HR55YB5',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HR55YB5&Quantity.1=1',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.amazon.es/dp/B08HGYXP4C',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HGYXP4C&Quantity.1=1',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.amazon.es/dp/B08HJ9XFNM',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HJ9XFNM&Quantity.1=1',
    },
    {
      model: 'ftw3',
      url: 'https://www.amazon.es/dp/B08HGBYWQ6',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HGBYWQ6&Quantity.1=1',
    },
    {
      model: 'xc3',
      url: 'https://www.amazon.es/dp/B08HGLN78Q',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HGLN78Q&Quantity.1=1',
    },
    {
      model: 'xc3 black',
      url: 'https://www.amazon.es/dp/B08HH1BMQQ',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HH1BMQQ&Quantity.1=1',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'aorus master',
      url: 'https://www.amazon.es/dp/B08VHB7598',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08VHB7598&Quantity.1=1',
    },
    {
      model: 'aorus xtreme',
      url: 'https://www.amazon.es/dp/B08M5ZFNTT',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08M5ZFNTT&Quantity.1=1',
    },
    {
      model: 'aorus xtreme waterforce',
      url: 'https://www.amazon.es/dp/B08P5W32PC',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08P5W32PC&Quantity.1=1',
    },
    {
      model: 'aorus xtreme waterforce wb',
      url: 'https://www.amazon.es/dp/B08P5YGXMG',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08P5YGXMG&Quantity.1=1',
    },
    {
      model: 'aorus master',
      url: 'https://www.amazon.es/dp/B08KHLDS72',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08KHLDS72&Quantity.1=1',
    },
    {
      model: 'gaming oc',
      url: 'https://www.amazon.es/dp/B08HLZXHZY',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HLZXHZY&Quantity.1=1',
    },
    {
      model: 'eagle oc',
      url: 'https://www.amazon.es/dp/B08HHZVZ3N',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HHZVZ3N&Quantity.1=1',
    },
  ]),

  // Palit Cards
  ...createBrandSeriesLinks('palit', '3080', [
    {
      model: 'gamerock oc',
      url: 'https://www.amazon.es/dp/B08QZR8S24',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08QZR8S24&Quantity.1=1',
    },
    {
      model: 'gamerock',
      url: 'https://www.amazon.es/dp/B08MKSYYZ4',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08MKSYYZ4&Quantity.1=1',
    },
  ]),

];
