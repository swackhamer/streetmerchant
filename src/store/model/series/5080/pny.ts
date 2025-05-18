import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for pny 5080 series
 */
export const links: Link[] = [
  // Pny Cards
  ...createBrandSeriesLinks('pny', '5080', [
    {
      model: 'triple fan',
      url: 'https://www.pny.com/geforce-rtx-5080-series?sku=VCG508016TFXPB1',
    },
    {
      model: 'triple fan oc',
      url: 'https://www.pny.com/geforce-rtx-5080-series?sku=VCG508016TFXPB1-O',
    },
    {
      model: 'epic x',
      url: 'https://www.pny.com/geforce-rtx-5080-series?sku=VCG508016TFXXPB1',
    },
    {
      model: 'epic x oc',
      url: 'https://www.pny.com/geforce-rtx-5080-series?sku=VCG508016TFXXPB1-O',
    },
  ]),
];
