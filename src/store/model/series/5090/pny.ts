import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for pny 5090 series
 */
export const links: Link[] = [
  // Pny Cards
  ...createBrandSeriesLinks('pny', '5090', [
    {
      model: 'triple fan',
      url: 'https://www.pny.com/geforce-rtx-5090-series?sku=VCG509032TFXPB1',
    },
    {
      model: 'triple fan oc',
      url: 'https://www.pny.com/geforce-rtx-5090-series?sku=VCG509032TFXPB1-O',
    },
    {
      model: 'epic x',
      url: 'https://www.pny.com/geforce-rtx-5090-series?sku=VCG509032TFXXPB1',
    },
    {
      model: 'epic x oc',
      url: 'https://www.pny.com/geforce-rtx-5090-series?sku=VCG509032TFXXPB1-O',
    },
  ]),
];
