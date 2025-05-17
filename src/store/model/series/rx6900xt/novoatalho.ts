import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for novoatalho rx6900xt series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', 'rx6900xt', [
    {
      model: 'tuf oc',
      url: 'https://www.novoatalho.pt/pt-PT/produto/46700/Placa-Grafica-Asus-Radeon-RX-6900-XT-TUF-GAMING-OC-16GB/90YV0GE0-M0NM00.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', 'rx6900xt', [
    {
      model: 'gaming x trio',
      url: 'https://www.novoatalho.pt/pt-PT/produto/46649/Placa-Grafica-MSI-Radeon-RX-6900-XT-GAMING-X-TRIO-16GB/912-V395-007.html',
    },
  ]),

];
