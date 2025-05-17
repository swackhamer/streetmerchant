import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for elkjop 3070 series
 */
export const links: Link[] = [
  // Pny Cards
  ...createBrandSeriesLinks('pny', '3070', [
    {
      model: 'xlr8 epic x',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/215360/pny-rtx-3070-8gb-xlr8-gaming-epic-x-rgb-3-fan-2-7slot',
      cartUrl: 'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=215360&Quantity=1&AddToCart=true',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3070', [
    {
      model: 'xc3 ultra',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/243900/evga-geforce-rtx-3070-xc3-ultra',
      cartUrl: 'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=243900&Quantity=1&AddToCart=true',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3070', [
    {
      model: 'strix oc',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/228205/asus-geforce-rtx-3070-8gb-gddr6-rog-strix-oc-gaming',
      cartUrl: 'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=228205&Quantity=1&AddToCart=true',
    },
    {
      model: 'tuf oc',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/228206/asus-tuf-gaming-geforce-rtx-3070-oc-edition-8gb-gddr6',
      cartUrl: 'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=228206&Quantity=1&AddToCart=true',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3070', [
    {
      model: 'suprim x',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/275718/msi-geforce-rtx-3070-suprim-x-8-gb-grafikkort',
      cartUrl: 'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=275718&Quantity=1&AddToCart=true',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3070', [
    {
      model: 'vision oc',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/252773/gigabyte-geforce-rtx-3070-vision-oc-8gb',
      cartUrl: 'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=252773&Quantity=1&AddToCart=true',
    },
    {
      model: 'aorus master',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/252824/gigabyte-geforce-rtx-3070-aorus-master-8gb',
      cartUrl: 'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=252824&Quantity=1&AddToCart=true',
    },
  ]),

];
