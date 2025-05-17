import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for bpmpower 3070 series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', '3070', [
    {
      model: 'ventus 3x oc',
      url: 'https://www.bpm-power.com/it/online/componenti-pc/schede-video/nvidia-msi-rtx-3070-b1710142',
    },
  ]),

];
