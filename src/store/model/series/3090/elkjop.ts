import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for elkjop 3090 series
 */
export const links: Link[] = [
  // Pny Cards
  ...createBrandSeriesLinks('pny', '3090', [
    {
      model: 'xlr8 epic x',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/215370/pny-rtx-3090-24gb-xlr8-gaming-epic-x-rgb-3-fan-2-7slot',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=215370&Quantity=1&AddToCart=true',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3090', [
    {
      model: 'ftw3 ultra',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/224760/evga-geforce-rtx-3090-ftw3-ultra-24gb',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=224760&Quantity=1&AddToCart=true',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/224771/evga-geforce-rtx-3090-xc3-ultra-24gb',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=224771&Quantity=1&AddToCart=true',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'tuf oc',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/215362/asus-geforce-rtx-3090-24gb-gddr6x-tuf-oc-gaming',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=215362&Quantity=1&AddToCart=true',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3090', [
    {
      model: 'gaming oc',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/216110/gigabyte-geforce-rtx-3090-24gb-gaming-oc',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=216110&Quantity=1&AddToCart=true',
    },
  ]),

  // Gainward Cards
  ...createBrandSeriesLinks('gainward', '3090', [
    {
      model: 'phantom gs',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/266679/geforce-rtx-3090-phantom gs',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=266679&Quantity=1&AddToCart=true',
    },
  ]),
];
