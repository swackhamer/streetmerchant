import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for pny 5070 series
 */
export const links: Link[] = [
  // Pny Cards
  ...createBrandSeriesLinks('pny', '5070', [
    {
      model: 'triple fan',
      url: 'https://www.pny.com/geforce-rtx-5070-series?sku=VCG507012TFXPB1',
    },
    {
      model: 'triple fan oc',
      url: 'https://www.pny.com/geforce-rtx-5070-series?sku=VCG507012TFXPB1-O',
    },
    {
      model: 'epic x',
      url: 'https://www.pny.com/geforce-rtx-5070-series?sku=VCG507012TFXXPB1',
    },
    {
      model: 'epic x oc',
      url: 'https://www.pny.com/geforce-rtx-5070-series?sku=VCG507012TFXXPB1-O',
    },
  ]),
];
