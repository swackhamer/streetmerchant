import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for mindfactory rx6700xt series
 */
export const links: Link[] = [
  // Asrock Cards
  ...createBrandSeriesLinks('asrock', 'rx6700xt', [
    {
      model: 'challenger',
      url: 'https://www.mindfactory.de/product_info.php/12GB-ASRock-Radeon-RX-6700-XT-Challenger-12G--Retail-_1402343.html',
    },
    {
      model: 'phantom gaming',
      url: 'https://www.mindfactory.de/product_info.php/12GB-ASRock-Radeon-RX-6700-XT-PHANTOM-GAMING-DDR6--Retail-_1404253.html',
    },
    {
      model: 'challenger oc',
      url: 'https://www.mindfactory.de/product_info.php/12GB-ASRock-Radeon-RX-6700-XT-Challenger-D-OC--Retail-_1416036.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', 'rx6700xt', [
    {
      model: 'mech 2x oc',
      url: 'https://www.mindfactory.de/product_info.php/12GB-MSI-Radeon-RX-6700-XT-MECH-2X-OC-DDR6-3xDP--Retail-_1401817.html',
    },
  ]),

  // Powercolor Cards
  ...createBrandSeriesLinks('powercolor', 'rx6700xt', [
    {
      model: 'fighter',
      url: 'https://www.mindfactory.de/product_info.php/12GB-Powercolor-Radeon-RX-6700XT-Fighter-DDR6--Retail-_1402737.html',
    },
    {
      model: 'hellhound',
      url: 'https://www.mindfactory.de/product_info.php/12GB-PowerColor-Radeon-RX-6700-XT-Hellhound--Retail-_1402054.html',
    },
    {
      model: 'red devil',
      url: 'https://www.mindfactory.de/product_info.php/12GB-PowerColor-Radeon-RX-6700-XT-Red-Devil-12GB-GDDR6-HDMI-3xDP_1402329.html',
    },
  ]),

  // Xfx Cards
  ...createBrandSeriesLinks('xfx', 'rx6700xt', [
    {
      model: 'merc',
      url: 'https://www.mindfactory.de/product_info.php/12GB-XFX-Radeon-RX-6700-XT-MERC319-Black-GAMING--Retail-_1402055.html',
    },
    {
      model: 'qick',
      url: 'https://www.mindfactory.de/product_info.php/12GB-XFX-Radeon-RX-6700-XT-QICK319-DDR6-Black-Gaming-3xDP--Retail-_1405679.html',
    },
  ]),

];
