import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for computeralliance rx6900xt series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', 'rx6900xt', [
    {
      model: 'amd reference',
      url: 'https://www.computeralliance.com.au/asus-rx6900xt-16gb-pcie-video-card-rx6900xt-16g',
    },
  ]),
];
