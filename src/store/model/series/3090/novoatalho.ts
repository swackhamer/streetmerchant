import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for novoatalho 3090 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'strix',
      url: 'https://www.novoatalho.pt/pt-PT/produto/44484/Placa-Grafica-Asus-GeForce-RTX-3090-ROG-STRIX-24GB/90YV0F90-M0NM00.html',
    },
    {
      model: 'strix oc',
      url: 'https://www.novoatalho.pt/pt-PT/produto/44485/Placa-Grafica-Asus-GeForce-RTX-3090-ROG-STRIX-OC-24GB/90YV0F93-M0NM00.html',
    },
    {
      model: 'tuf oc',
      url: 'https://www.novoatalho.pt/pt-PT/produto/44319/Placa-Grafica-Asus-GeForce-RTX-3090-TUF-GAMING-OC-24GB/90YV0FD1-M0NM00.html',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3090', [
    {
      model: 'ftw3 ultra',
      url: 'https://www.novoatalho.pt/pt-PT/produto/45582/Placa-Grafica-EVGA-GeForce-RTX-3090-FTW3-ULTRA-GAMING-24GB/24G-P5-3987-KR.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3090', [
    {
      model: 'gaming x trio',
      url: 'https://www.novoatalho.pt/pt-PT/produto/44316/Placa-Grafica-MSI-GeForce-RTX-3090-GAMING-X-TRIO-24GB/912-V388-011.html',
    },
    {
      model: 'suprim x',
      url: 'https://www.novoatalho.pt/pt-PT/produto/45819/Placa-Grafica-MSI-GeForce-RTX-3090-SUPRIM-X-24GB/912-V388-010.html',
    },
  ]),
];
