import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for elkjop 3060 series
 */
export const links: Link[] = [
  // Pny Cards
  ...createBrandSeriesLinks('pny', '3060', [
    {
      model: 'xlr8 gaming',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/292394/pny-vcg306012sfxppb-video-card',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=292394&Quantity=1&AddToCart=true',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3060', [
    {
      model: 'gaming x trio',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/293925/msi-rtx-3060-gaming-x-trio-12gb-graphics-card',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=293925&Quantity=1&AddToCart=true',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3060', [
    {
      model: 'tuf oc',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/293922/asus-geforce-rtx-3060-tuf-12gb-graphics-card',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=293922&Quantity=1&AddToCart=true',
    },
  ]),
];
