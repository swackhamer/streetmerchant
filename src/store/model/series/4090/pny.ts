import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for pny 4090 series
 */
export const links: Link[] = [
  // Pny Cards
  ...createBrandSeriesLinks('pny', '4090', [
    {
      model: 'xlr8 verto epic x oc',
      url: 'https://www.pny.com/pny-geforce-rtx-4090-24gb-xlr8-rgb-triple-fan-oc',
    },
    {
      model: 'xlr8 verto epic x',
      url: 'https://www.pny.com/pny-geforce-rtx-4090-24gb-xlr8-rgb-triple-fan',
    },
  ]),

];
