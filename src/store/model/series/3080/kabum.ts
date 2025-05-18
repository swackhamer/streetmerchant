import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for kabum 3080 series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'gaming x trio',
      url: 'https://www.kabum.com.br/produto/127409',
    },
    {
      model: 'ventus 3x',
      url: 'https://www.kabum.com.br/produto/127410',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'tuf',
      url: 'https://www.kabum.com.br/produto/121138',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'eagle oc',
      url: 'https://www.kabum.com.br/produto/128078',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080', [
    {
      model: 'ichill x3',
      url: 'https://www.kabum.com.br/produto/128051',
    },
    {
      model: 'ichill x3',
      url: 'https://www.kabum.com.br/produto/128052',
    },
  ]),
];
