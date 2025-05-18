import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for ldlc 3050 series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', '3050', [
    {
      model: 'ventus 2X (LHR)',
      url: 'https://www.ldlc.com/fiche/PB00480344.html',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3050', [
    {
      model: 'twin x2',
      url: 'https://www.ldlc.com/fiche/PB00481183.html',
    },
  ]),
];
