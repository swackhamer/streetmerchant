import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for coolblue 3090 series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', '3090', [
    {
      model: 'gaming x trio',
      url: 'https://www.coolblue.nl/product/868738/',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.coolblue.nl/product/868739/',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'tuf oc',
      url: 'https://www.coolblue.nl/product/868730/',
    },
    {
      model: 'tuf',
      url: 'https://www.coolblue.nl/product/868727/',
    },
    {
      model: 'strix oc',
      url: 'https://www.coolblue.nl/product/868728/',
    },
    {
      model: 'strix',
      url: 'https://www.coolblue.nl/product/868729/',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3090', [
    {
      model: 'gaming oc',
      url: 'https://www.coolblue.nl/product/868734/',
    },
    {
      model: 'eagle oc',
      url: 'https://www.coolblue.nl/product/868735/',
    },
  ]),

];
