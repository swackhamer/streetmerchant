import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for mindfactory rx6800 series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', 'rx6800', [
    {
      model: 'gaming oc',
      url: 'https://www.mindfactory.de/product_info.php/16GB-Gigabyte-Radeon-RX-6800-GAMING-OC-16G_1387544.html',
    },
    {
      model: 'amd reference',
      url: 'https://www.mindfactory.de/product_info.php/16GB-Gigabyte-Radeon-RX-6800--Retail-_1387542.html',
    },
  ]),

  // Powercolor Cards
  ...createBrandSeriesLinks('powercolor', 'rx6800', [
    {
      model: 'amd reference',
      url: 'https://www.mindfactory.de/product_info.php/16GB-Powercolor-Radeon-RX-6800-Fighter-DDR6-Drei-Luefter-256bit--Retail_1388356.html',
    },
    {
      model: 'red dragon',
      url: 'https://www.mindfactory.de/product_info.php/16GB-PowerColor-Radeon-RX-6800-Red-Dragon-DDR6-retail_1387556.html',
    },
  ]),

  // Sapphire Cards
  ...createBrandSeriesLinks('sapphire', 'rx6800', [
    {
      model: 'amd reference',
      url: 'https://www.mindfactory.de/product_info.php/16GB-Sapphire-Radeon-RX-6800-GDDR6-HDMI-DUAL-DP-USB-C--Retail-_1383029.html',
    },
    {
      model: 'nitro oc',
      url: 'https://www.mindfactory.de/product_info.php/16GB-Sapphire-Radeon-RX-6800-NITRO--OC-HDMI-3xDP_1388341.html',
    },
  ]),

  // Xfx Cards
  ...createBrandSeriesLinks('xfx', 'rx6800', [
    {
      model: 'amd reference',
      url: 'https://www.mindfactory.de/product_info.php/16GB-XFX-Radeon-RX-6800-Drei-Luefter-256bit-DDR6--Retail-_1388348.html',
    },
    {
      model: 'merc',
      url: 'https://www.mindfactory.de/product_info.php/16GB-XFX-Radeon-RX-6800-Speedster-MERC319-DDR6-Black-Gaming_1386624.html',
    },
  ]),
];
