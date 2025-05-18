import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for galaxus rx6700xt series
 */
export const links: Link[] = [
  // Asrock Cards
  ...createBrandSeriesLinks('asrock', 'rx6700xt', [
    {
      model: 'challenger',
      url: 'https://www.galaxus.de/de/product/15816697',
    },
    {
      model: 'phantom gaming oc',
      url: 'https://www.galaxus.de/de/product/15948741',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', 'rx6700xt', [
    {
      model: 'tuf oc',
      url: 'https://www.galaxus.de/de/product/15300561',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', 'rx6700xt', [
    {
      model: 'aorus elite',
      url: 'https://www.galaxus.de/de/product/15301182',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', 'rx6700xt', [
    {
      model: 'mech 2x oc',
      url: 'https://www.galaxus.de/de/product/15301319',
    },
  ]),

  // Sapphire Cards
  ...createBrandSeriesLinks('sapphire', 'rx6700xt', [
    {
      model: 'nitro+ oc',
      url: 'https://www.galaxus.de/de/product/15059558',
    },
    {
      model: 'pulse',
      url: 'https://www.galaxus.de/de/product/15059559',
    },
  ]),
];
