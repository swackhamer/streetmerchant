import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for pny 5070ti series
 */
export const links: Link[] = [
  // Pny Cards
  ...createBrandSeriesLinks('pny', '5070ti', [
    {
      model: 'triple fan',
      url: 'https://www.pny.com/geforce-rtx-5070-ti-series?sku=VCG5070T16TFXPB1',
    },
    {
      model: 'triple fan oc',
      url: 'https://www.pny.com/geforce-rtx-5070-ti-series?sku=VCG5070T16TFXPB1-O',
    },
    {
      model: 'epic x',
      url: 'https://www.pny.com/geforce-rtx-5070-ti-series?sku=VCG5070T16TFXXPB1',
    },
    {
      model: 'epic x oc',
      url: 'https://www.pny.com/geforce-rtx-5070-ti-series?sku=VCG5070T16TFXXPB1-O',
    },
  ]),
];
