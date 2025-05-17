import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for alternate-fr rx6700xt series
 */
export const links: Link[] = [
  // Xfx Cards
  ...createBrandSeriesLinks('xfx', 'rx6700xt', [
    {
      model: 'qick',
      url: 'https://www.alternate.fr/html/product/1746956',
    },
    {
      model: 'merc',
      url: 'https://www.alternate.fr/html/product/1730305',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', 'rx6700xt', [
    {
      model: 'gaming oc',
      url: 'https://www.alternate.fr/html/product/1723391',
    },
    {
      model: 'aorus',
      url: 'https://www.alternate.fr/html/product/17411817',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', 'rx6700xt', [
    {
      model: 'gaming x',
      url: 'https://www.alternate.fr/html/product/1730741',
    },
  ]),

];
