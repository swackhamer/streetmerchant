import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for mindfactory rx6900xt series
 */
export const links: Link[] = [
  // Asrock Cards
  ...createBrandSeriesLinks('asrock', 'rx6900xt', [
    {
      model: 'amd reference',
      url: 'https://www.mindfactory.de/product_info.php/16GB-ASRock-Radeon-6900-XT--Retail-_1388342.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', 'rx6900xt', [
    {
      model: 'amd reference',
      url: 'https://www.mindfactory.de/product_info.php/16GB-MSI-Radeon-6900-XT--Retail-_1388361.html',
    },
  ]),

  // Powercolor Cards
  ...createBrandSeriesLinks('powercolor', 'rx6900xt', [
    {
      model: 'amd reference',
      url: 'https://www.mindfactory.de/product_info.php/16GB-PowerColor-Radeon-RX-6900XT-DDR6-Drei-Luefter-256bit--Retail-_1388355.html',
    },
  ]),

  // Xfx Cards
  ...createBrandSeriesLinks('xfx', 'rx6900xt', [
    {
      model: 'amd reference',
      url: 'https://www.mindfactory.de/product_info.php/16GB-XFX-Radeon-RX-6900-XT-DDR6-Drei-Luefter-256bit_1388333.html',
    },
  ]),
];
