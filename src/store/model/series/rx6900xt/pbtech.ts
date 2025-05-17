import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for pbtech rx6900xt series
 */
export const links: Link[] = [
  // Sapphire Cards
  ...createBrandSeriesLinks('sapphire', 'rx6900xt', [
    {
      model: 'nitro+',
      url: 'https://www.pbtech.com/au/product/VGASAP16915/Sapphire-Nitro-AMD-Radeon-RX-6900-XT-OC-Gaming-Gra',
    },
  ]),

];
