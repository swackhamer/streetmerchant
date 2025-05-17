import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for notebooksbilliger 3070 series
 */
export const links: Link[] = [
  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3070', [
    {
      model: 'ichill x3',
      url: 'https://www.notebooksbilliger.de/inno3d+geforce+rtx+3070+ichill+x3+grafikkarte+684162',
    },
    {
      model: 'twin x2',
      url: 'https://www.notebooksbilliger.de/inno3d+geforce+rtx+3070+twin+x2+grafikkarte+685496',
    },
    {
      model: 'twin x2 oc',
      url: 'https://www.notebooksbilliger.de/inno3d+geforce+rtx+3070+twin+x2+oc+grafikkarte+685500',
    },
  ]),

  // Gainward Cards
  ...createBrandSeriesLinks('gainward', '3070', [
    {
      model: 'phoenix',
      url: 'https://www.notebooksbilliger.de/gainward+geforce+rtx+3070+phoenix+8gb+gddr6+grafikkarte+685073',
    },
    {
      model: 'phoenix gs',
      url: 'https://www.notebooksbilliger.de/gainward+geforce+rtx+3070+phoenix+gs+8gb+gddr6+grafikkarte+681575',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3070', [
    {
      model: 'uprising',
      url: 'https://www.notebooksbilliger.de/pny+geforce+rtx+3070+8gb+uprising+dual+fan+edition+grafikkarte+685520',
    },
    {
      model: 'xlr8 revel',
      url: 'https://www.notebooksbilliger.de/pny+geforce+rtx+3070+8gb+xlr8+gaming+revel+epic+x+rgb+685560',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3070', [
    {
      model: 'tuf',
      url: 'https://www.notebooksbilliger.de/asus+tuf+gaming+geforce+rtx+3070+8gb+grafikkarte+685524',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3070', [
    {
      model: 'twin edge',
      url: 'https://www.notebooksbilliger.de/zotac+gaming+geforce+rtx+3070+twin+edge+8gb+gddr6+grafikkarte+677561',
    },
    {
      model: 'twin edge oc',
      url: 'https://www.notebooksbilliger.de/zotac+gaming+geforce+rtx+3070+twin+edge+oc+8gb+gddr6+grafikkarte+684216',
    },
  ]),

];
