import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for notebooksbilliger 3080 series
 */
export const links: Link[] = [
  // Gainward Cards
  ...createBrandSeriesLinks('gainward', '3080', [
    {
      model: 'phoenix gs',
      url: 'https://www.notebooksbilliger.de/gainward+geforce+rtx+3080+phoenix+gs+10gb+gddr6x+grafikkarte+677618',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'eagle oc',
      url: 'https://www.notebooksbilliger.de/gigabyte+geforce+rtx+3080+eagle+oc+10gb+gddr6x+grafikkarte+677501',
    },
    {
      model: 'gaming oc',
      url: 'https://www.notebooksbilliger.de/gigabyte+geforce+rtx+3080+gaming+oc+10gb+gddr6x+grafikkarte+677499',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3080', [
    {
      model: 'ichill x3',
      url: 'https://www.notebooksbilliger.de/inno3d+geforce+rtx+3080+ichill+x3+grafikkarte+678588',
    },
    {
      model: 'twin x2 oc',
      url: 'https://www.notebooksbilliger.de/inno3d+geforce+rtx+3080+twin+x2+oc+grafikkarte+679190',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'gaming x trio',
      url: 'https://www.notebooksbilliger.de/msi+geforce+rtx+3080+gaming+x+trio+10g+grafikkarte+678527',
    },
  ]),

  // Palit Cards
  ...createBrandSeriesLinks('palit', '3080', [
    {
      model: 'gaming pro',
      url: 'https://www.notebooksbilliger.de/palit+geforce+rtx+3080+gamingpro+10gb+gddr6x+grafikkarte+677609',
    },
    {
      model: 'gaming pro oc',
      url: 'https://www.notebooksbilliger.de/palit+geforce+rtx+3080+gamingpro+oc+10gb+gddr6x+grafikkarte+677606',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3080', [
    {
      model: 'xlr8 revel',
      url: 'https://www.notebooksbilliger.de/pny+geforce+rtx+3080+xlr8+gaming+10gb+gddr6x+grafikkarte+677407',
    },
    {
      model: 'xlr8 revel',
      url: 'https://www.notebooksbilliger.de/pny+geforce+rtx+3080+10gb+xlr8+gaming+revel+epic+x+grafikkarte+677412',
    },
  ]),
];
