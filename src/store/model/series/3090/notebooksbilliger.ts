import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for notebooksbilliger 3090 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'strix',
      url: 'https://www.notebooksbilliger.de/asus+rog+strix+geforce+rtx+3090+24gb+gddr6x+grafikkarte+677343',
    },
    {
      model: 'strix oc',
      url: 'https://www.notebooksbilliger.de/asus+rog+strix+geforce+rtx+3090+oc+24gb+gddr6x+grafikkarte+677308',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3090', [
    {
      model: 'aorus master',
      url: 'https://www.notebooksbilliger.de/gigabyte+geforce+rtx+3090+master+24gb+gddr6x+grafikkarte+683868',
    },
  ]),

  // Palit Cards
  ...createBrandSeriesLinks('palit', '3090', [
    {
      model: 'gaming pro oc',
      url: 'https://www.notebooksbilliger.de/palit+geforce+rtx+3090+gamingpro+oc+24gb+gddr6x+grafikkarte+677599',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3090', [
    {
      model: 'trinity',
      url: 'https://www.notebooksbilliger.de/zotac+gaming+geforce+rtx+3090+trinity+24gb+gddr6x+grafikkarte+677550',
    },
  ]),
];
