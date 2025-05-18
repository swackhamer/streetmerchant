import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for pbtech 3080 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'strix',
      url: 'https://www.pbtech.com/au/product/VGAAS33087/ASUS-ROG-STRIX-GeForce-RTX-3080-10GB-GDDR6X-PCIE-4',
    },
    {
      model: 'strix oc white',
      url: 'https://www.pbtech.com/au/product/VGAAS33086/ASUS-ROG-STRIX-GeForce-RTX-3080-O10G-Gaming-WHITE',
    },
  ]),
];
