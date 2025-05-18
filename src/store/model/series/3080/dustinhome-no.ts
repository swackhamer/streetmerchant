import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for dustinhome-no 3080 series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'suprim x',
      url: 'https://www.dustinhome.no/product/5011216707/',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080', [
    {
      model: 'ftw3 ultra',
      url: 'https://www.dustinhome.no/product/5011197759/',
    },
    {
      model: 'ftw3',
      url: 'https://www.dustinhome.no/product/5011197760/',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.dustinhome.no/product/5011197756/',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3080', [
    {
      model: 'xlr8 epic x',
      url: 'https://www.dustinhome.no/product/5011196134/',
    },
    {
      model: 'xlr8 epic x',
      url: 'https://www.dustinhome.no/product/5011196133/',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'aorus xtreme waterforce wb',
      url: 'https://www.dustinhome.no/product/5011212484/',
    },
    {
      model: 'aorus master',
      url: 'https://www.dustinhome.no/product/5011199977/',
    },
  ]),
];
