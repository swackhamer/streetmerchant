import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for allneeds rx6900xt series
 */
export const links: Link[] = [
  // Sapphire Cards
  ...createBrandSeriesLinks('sapphire', 'rx6900xt', [
    {
      model: 'nitro+',
      url: 'https://allneeds.com.au/sapphire-nitro-radeon-rx-6900-xt-16gb-video-card-11308-01-20g',
    },
  ]),

];
