import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for novoatalho rx6800 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', 'rx6800', [
    {
      model: 'strix oc',
      url: 'https://www.novoatalho.pt/pt-PT/produto/46281/Placa-Grafica-Asus-Radeon-RX-6800-ROG-STRIX-OC-16GB/90YV0FM0-M0NA00.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', 'rx6800', [
    {
      model: 'gaming x trio',
      url: 'https://www.novoatalho.pt/pt-PT/produto/46280/Placa-Grafica-MSI-Radeon-RX-6800-GAMING-X-TRIO-16GB/V396-002R.html',
    },
  ]),
];
