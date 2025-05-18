import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for novoatalho rx6800xt series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', 'rx6800xt', [
    {
      model: 'strix oc',
      url: 'https://www.novoatalho.pt/pt-PT/produto/46785/Placa-Grafica-Asus-Radeon-RX-6800-XT-ROG-STRIX-OC-LC-16GB/90YV0FL0-M0NM00.html',
    },
    {
      model: 'tuf oc',
      url: 'https://www.novoatalho.pt/pt-PT/produto/46784/Placa-Grafica-Asus-Radeon-RX-6800-XT-TUF-GAMING-OC-16GB/90YV0FL1-M0NM00.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', 'rx6800xt', [
    {
      model: 'gaming x trio',
      url: 'https://www.novoatalho.pt/pt-PT/produto/46279/Placa-Grafica-MSI-Radeon-RX-6800-XT-GAMING-X-TRIO-16GB/912-V395-001.html',
    },
  ]),
];
