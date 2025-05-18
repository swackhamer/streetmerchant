import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for notebooksbilliger 3060 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3060', [
    {
      model: 'strix',
      url: 'https://www.notebooksbilliger.de/asus+rog+strix+geforce+rtx+3060+oc+12g+grafikkarte+702541',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3060', [
    {
      model: 'gaming oc',
      url: 'https://www.notebooksbilliger.de/gigabyte+geforce+rtx+3060+gaming+oc+12gb+gddr6+grafikkarte+700421',
    },
    {
      model: 'eagle oc',
      url: 'https://www.notebooksbilliger.de/gigabyte+geforce+rtx+3060+eagle+oc+12gb+gddr6+grafikkarte+700422',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3060', [
    {
      model: 'twin x2 oc',
      url: 'https://www.notebooksbilliger.de/inno3d+geforce+rtx+3060+12gb+twin+x2+oc+701384',
    },
    {
      model: 'ichill x3',
      url: 'https://www.notebooksbilliger.de/inno3d+geforce+rtx+3060+12gb+ichill+x3+red+701383?',
    },
  ]),

  // Palit Cards
  ...createBrandSeriesLinks('palit', '3060', [
    {
      model: 'dual',
      url: 'https://www.notebooksbilliger.de/palit+geforce+rtx+3060+12gb+dual+702252',
    },
    {
      model: 'dual oc',
      url: 'https://www.notebooksbilliger.de/palit+geforce+rtx+3060+12gb+dual+oc+gddr6+702251',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3060', [
    {
      model: 'xlr8 gaming',
      url: 'https://www.notebooksbilliger.de/pny+geforce+rtx+3060+12gb+xlr8+gaming+revel+epic+x+rgb+single+701885',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3060', [
    {
      model: 'amp white',
      url: 'https://www.notebooksbilliger.de/zotac+geforce+rtx+3060+amp+white+12gb+gddr6+grafikkarte+701867',
    },
    {
      model: 'twin edge oc',
      url: 'https://www.notebooksbilliger.de/zotac+gaming+geforce+rtx+3060+twin+edge+oc+12gb+grafikkarte+700378',
    },
  ]),
];
