import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for novoatalho 3070 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3070', [
    {
      model: 'dual oc',
      url: 'https://www.novoatalho.pt/pt-PT/produto/45331/Placa-Grafica-Asus-GeForce-RTX-3070-DUAL-OC-8GB/90YV0FQ0-M0NA00.html',
    },
    {
      model: 'tuf',
      url: 'https://www.novoatalho.pt/pt-PT/produto/45750/Placa-Grafica-Asus-GeForce-RTX-3070-TUF-GAMING-OC-8GB/90YV0FQ6-M0NA00.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3070', [
    {
      model: 'gaming oc',
      url: 'https://www.novoatalho.pt/pt-PT/produto/45862/Placa-Grafica-Gigabyte-GeForce-RTX-3070-Gaming-OC-8GB/GV-N3070GAM-OC-8G.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3070', [
    {
      model: 'gaming x trio',
      url: 'https://www.novoatalho.pt/pt-PT/produto/45334/Placa-Grafica-MSI-GeForce-RTX-3070-GAMING-X-TRIO-8GB/912-V390-006.html',
    },
  ]),
];
