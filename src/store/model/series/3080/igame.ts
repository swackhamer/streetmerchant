import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for igame 3080 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'tuf oc',
      url: 'https://www.igamecomputer.com.au/products/a0068?_pos=5&_sid=42c0f4fc6&_ss=r',
    },
  ]),

  // Colorful Cards
  ...createBrandSeriesLinks('colorful', '3080', [
    {
      model: 'igame ultra oc',
      url: 'https://www.igamecomputer.com.au/products/mc026?_pos=3&_sid=42c0f4fc6&_ss=r',
    },
    {
      model: 'igame advanced',
      url: 'https://www.igamecomputer.com.au/products/mc024?_pos=4&_sid=42c0f4fc6&_ss=r',
    },
    {
      model: 'igame advanced oc',
      url: 'https://www.igamecomputer.com.au/products/mc025?_pos=2&_sid=42c0f4fc6&_ss=r',
    },
    {
      model: 'igame vulcan oc',
      url: 'https://www.igamecomputer.com.au/products/mc023?_pos=1&_sid=42c0f4fc6&_ss=r',
    },
  ]),

];
