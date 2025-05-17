import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for coolblue 3080 series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'eagle oc',
      url: 'https://www.coolblue.nl/product/868737/',
    },
    {
      model: 'gaming oc',
      url: 'https://www.coolblue.nl/product/868736/',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'ventus 3x oc',
      url: 'https://www.coolblue.nl/product/868741/',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.coolblue.nl/product/868740/',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'tuf',
      url: 'https://www.coolblue.nl/product/868726/',
    },
    {
      model: 'tuf oc',
      url: 'https://www.coolblue.nl/product/868733/',
    },
    {
      model: 'strix oc',
      url: 'https://www.coolblue.nl/product/868731/',
    },
    {
      model: 'strix',
      url: 'https://www.coolblue.nl/product/868732/',
    },
  ]),

];
