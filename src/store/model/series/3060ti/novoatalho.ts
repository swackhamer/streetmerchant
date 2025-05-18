import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for novoatalho 3060ti series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3060ti', [
    {
      model: 'tuf oc',
      url: 'https://www.novoatalho.pt/pt-PT/produto/46783/Placa-Grafica-Asus-GeForce-RTX-3060-Ti-TUF-GAMING-OC-8GB/90YV0G10-M0NA00.html',
    },
  ]),
];
