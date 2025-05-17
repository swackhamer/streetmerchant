import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for adorama 3090 series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', '3090', [
    {
      model: 'gaming x trio',
      url: 'https://www.adorama.com/msig390gxt24.html',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.adorama.com/msig39v3x24c.html',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'tuf',
      url: 'https://www.adorama.com/asrtx309024g.html',
    },
    {
      model: 'tuf oc',
      url: 'https://www.adorama.com/ast3090o24g.html',
    },
    {
      model: 'strix oc',
      url: 'https://www.adorama.com/asrx3090o24g.html',
    },
  ]),

];
