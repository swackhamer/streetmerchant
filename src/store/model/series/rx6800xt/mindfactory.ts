import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for mindfactory rx6800xt series
 */
export const links: Link[] = [
  // Asrock Cards
  ...createBrandSeriesLinks('asrock', 'rx6800xt', [
    {
      model: 'phantom gaming',
      url: 'https://www.mindfactory.de/product_info.php/16GB-ASRock-Radeon-RX-6800-XT-PHANTOM-GAMING-DDR6_1386619.html',
    },
  ]),

  // Sapphire Cards
  ...createBrandSeriesLinks('sapphire', 'rx6800xt', [
    {
      model: 'nitro oc',
      url: 'https://www.mindfactory.de/product_info.php/16GB-Sapphire-Radeon-RX-6800-XT-NITRO--OC-HDMI-3xDP_1388340.html',
    },
  ]),

  // Xfx Cards
  ...createBrandSeriesLinks('xfx', 'rx6800xt', [
    {
      model: 'merc',
      url: 'https://www.mindfactory.de/product_info.php/16GB-XFX-Radeon-RX-6800-XT-Speedster-MERC319-DDR6-Black-Gaming-retail_1386623.html',
    },
  ]),

];
