import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for adorama 3080 series
 */
export const links: Link[] = [
  // Pny Cards
  ...createBrandSeriesLinks('pny', '3080', [
    {
      model: 'xlr8 revel',
      url: 'https://www.adorama.com/pnv301tfxmpb.html',
    },
    {
      model: 'xlr8 revel',
      url: 'https://www.adorama.com/png30801tfxb.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'gaming x trio',
      url: 'https://www.adorama.com/msig380gxt1.html',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.adorama.com/msig38v3x10c.html',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080', [
    {
      model: 'ftw3 ultra',
      url: 'https://www.adorama.com/ev10g53897kr.html',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.adorama.com/ev10g53885kr.html',
    },
    {
      model: 'ftw3',
      url: 'https://www.adorama.com/ev10g53895kr.html',
    },
    {
      model: 'xc3',
      url: 'https://www.adorama.com/ev10g53883kr.html',
    },
    {
      model: 'xc3 black',
      url: 'https://www.adorama.com/ev10g53881kr.html',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'strix oc',
      url: 'https://www.adorama.com/asrx3080o10g.html',
    },
    {
      model: 'tuf oc',
      url: 'https://www.adorama.com/astr3080o10g.html',
    },
    {
      model: 'tuf',
      url: 'https://www.adorama.com/astrx308010g.html',
    },
  ]),
];
