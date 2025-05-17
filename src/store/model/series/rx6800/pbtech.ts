import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for pbtech rx6800 series
 */
export const links: Link[] = [
  // Asrock Cards
  ...createBrandSeriesLinks('asrock', 'rx6800', [
    {
      model: 'challenger pro',
      url: 'https://www.pbtech.com/au/product/VGAASR06800/ASRock-Radeon-RX-6800-Challenger-Pro-Graphics-Card',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', 'rx6800', [
    {
      model: 'gaming x trio',
      url: 'https://www.pbtech.com/au/product/VGAMSI66801/MSI-Radeon-RX-6800-Gaming-X-TRIO-16GB-GDDR6-PCIE-4',
    },
  ]),

  // Sapphire Cards
  ...createBrandSeriesLinks('sapphire', 'rx6800', [
    {
      model: 'pulse',
      url: 'https://www.pbtech.com/au/product/VGASAP16802/Sapphire-PULSE-AMD-Radeon-RX-6800-OC-Graphics-Card',
    },
  ]),

];
