import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for novoatalho ryzen5800 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5800', [
    {
      model: '5800x',
      url: 'https://www.novoatalho.pt/pt-PT/produto/45059/Processador-AMD-Ryzen-7-5800X-3-8Ghz-OctaCore-SktAM4/100-100000063WOF.html',
    },
  ]),
];
