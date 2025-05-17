import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for arlt rx6700xt series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', 'rx6700xt', [
    {
      model: 'dual',
      url: 'https://www.arlt.com/Gaming/Gaming-Hardware/Grafikkarten/ASUS-Radeon-RX-6700-XT-Dual.html',
    },
    {
      model: 'strix oc',
      url: 'https://www.arlt.com/Gaming/Gaming-Hardware/Grafikkarten/ASUS-ROG-Strix-Radeon-RX-6700-XT-OC.html',
    },
  ]),

  // Sapphire Cards
  ...createBrandSeriesLinks('sapphire', 'rx6700xt', [
    {
      model: 'nitro+',
      url: 'https://www.arlt.com/Gaming/Gaming-Hardware/Grafikkarten/Sapphire-Nitro-Radeon-RX-6700-XT.html',
    },
  ]),

];
