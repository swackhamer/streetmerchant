import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for elkjop 3060ti series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3060ti', [
    {
      model: 'strix oc',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/255553/asus-geforce-rtx-3060-ti-rog-strix-oc-8gb-gddr6-grafikkort',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=255553&Quantity=1&AddToCart=true',
    },
    {
      model: 'tuf oc',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/255555/asus-geforce-rtx-3060-ti-8gb-gddr6-tuf-oc-grafikkort',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=255555&Quantity=1&AddToCart=true',
    },
  ]),
];
