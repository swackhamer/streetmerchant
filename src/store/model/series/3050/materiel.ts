import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for materiel 3050 series
 */
export const links: Link[] = [
  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3050', [
    {
      model: 'twin x2',
      url: 'https://www.materiel.net/produit/202201170090.html',
    },
  ]),

];
