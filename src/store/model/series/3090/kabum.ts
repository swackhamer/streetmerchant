import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for kabum 3090 series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', '3090', [
    {
      model: 'gaming x trio',
      url: 'https://www.kabum.com.br/produto/127407',
    },
    {
      model: 'ventus 3x',
      url: 'https://www.kabum.com.br/produto/127408',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'tuf',
      url: 'https://www.kabum.com.br/produto/127511',
    },
    {
      model: 'strix',
      url: 'https://www.kabum.com.br/produto/128026',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3090', [
    {
      model: 'gaming',
      url: 'https://www.kabum.com.br/produto/128199',
    },
  ]),

];
