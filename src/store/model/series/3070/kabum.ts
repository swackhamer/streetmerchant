import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for kabum 3070 series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3070', [
    {
      model: 'gaming oc',
      url: 'https://www.kabum.com.br/produto/130209',
    },
    {
      model: 'eagle oc',
      url: 'https://www.kabum.com.br/produto/130210',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3070', [
    {
      model: 'xc3 black',
      url: 'https://www.kabum.com.br/produto/129938',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3070', [
    {
      model: 'dual fan',
      url: 'https://www.kabum.com.br/produto/128634',
    },
    {
      model: 'dual fan',
      url: 'https://www.kabum.com.br/produto/128635',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3070', [
    {
      model: 'gaming x trio',
      url: 'https://www.kabum.com.br/produto/130379',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.kabum.com.br/produto/130380',
    },
    {
      model: 'ventus 2x oc',
      url: 'https://www.kabum.com.br/produto/130381',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3070', [
    {
      model: 'twin edge',
      url: 'https://www.kabum.com.br/produto/129208',
    },
    {
      model: 'twin edge oc',
      url: 'https://www.kabum.com.br/produto/129207',
    },
  ]),
];
