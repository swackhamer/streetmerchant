import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for novoatalho ryzen5600 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5600', [
    {
      model: '5600x',
      url: 'https://www.novoatalho.pt/pt-PT/produto/45058/Processador-AMD-Ryzen-5-5600X-3-7Ghz-6-Core-SktAM4/100-100000065BOX.html',
    },
  ]),

];
