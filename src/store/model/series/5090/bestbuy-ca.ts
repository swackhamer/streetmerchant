import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for bestbuy-ca 5090 series
 */
export const links: Link[] = [
  // NVIDIA Founders Edition
  ...createFoundersEditionLinks('5090', [
    {
      url: 'https://www.bestbuy.ca/en-ca/product/18931348',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '5090', [
    {
      model: 'astral oc',
      url: 'https://www.bestbuy.ca/en-ca/product/19177947',
    },
    {
      model: 'tuf',
      url: 'https://www.bestbuy.ca/en-ca/product/18969272',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '5090', [
    {
      model: 'ventus 3x',
      url: 'https://www.bestbuy.ca/en-ca/product/18938755',
    },
    {
      model: 'suprim liquid x',
      url: 'https://www.bestbuy.ca/en-ca/product/18938754',
    },
    {
      model: 'vanguard',
      url: 'https://www.bestbuy.ca/en-ca/product/18938752',
    },
    {
      model: 'gaming trio oc',
      url: 'https://www.bestbuy.ca/en-ca/product/18938751',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '5090', [
    {
      model: 'solid',
      url: 'https://www.bestbuy.ca/en-ca/product/18931631',
    },
  ]),

];
