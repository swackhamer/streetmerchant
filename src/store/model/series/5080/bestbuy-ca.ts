import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for bestbuy-ca 5080 series
 */
export const links: Link[] = [
  // NVIDIA Founders Edition
  ...createFoundersEditionLinks('5080', [
    {
      url: 'https://www.bestbuy.ca/en-ca/product/18931347',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '5080', [
    {
      model: 'astral oc',
      url: 'https://www.bestbuy.ca/en-ca/product/19177946',
    },
    {
      model: 'prime',
      url: 'https://www.bestbuy.ca/en-ca/product/18971064',
    },
    {
      model: 'prime',
      url: 'https://www.bestbuy.ca/en-ca/product/18971064',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '5080', [
    {
      model: 'ventus 3x oc',
      url: 'https://www.bestbuy.ca/en-ca/product/18938760',
    },
    {
      model: 'gaming trio oc',
      url: 'https://www.bestbuy.ca/en-ca/product/18938759',
    },
    {
      model: 'suprim liquid x',
      url: 'https://www.bestbuy.ca/en-ca/product/18938758',
    },
    {
      model: 'suprim liquid soc',
      url: 'https://www.bestbuy.ca/en-ca/product/18938757',
    },
    {
      model: 'vanguard soc launch edition',
      url: 'https://www.bestbuy.ca/en-ca/product/18938756',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '5080', [
    {
      model: 'triple fan oc',
      url: 'https://www.bestbuy.ca/en-ca/product/18934178',
    },
    {
      model: 'epic x oc',
      url: 'https://www.bestbuy.ca/en-ca/product/18934177',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '5080', [
    {
      model: 'solid oc',
      url: 'https://www.bestbuy.ca/en-ca/product/18931629',
    },
  ]),
];
