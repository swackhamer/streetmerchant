import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for equippr rx6700xt series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', 'rx6700xt', [
    {
      model: 'strix oc',
      url: 'https://www.equippr.de/asus-radeon-rx-6700-xt-rog-strix-oc-12-gb-gddr6-retail-2072469.html',
    },
  ]),
];
