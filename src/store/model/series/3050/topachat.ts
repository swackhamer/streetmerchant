import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for topachat 3050 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3050', [
    {
      model: 'phoenix 8G (LHR)',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20012486.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3050', [
    {
      model: 'ventus 2X (LHR)',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20012331.html',
    },
  ]),
];
