import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for elkjop 3080 series
 */
export const links: Link[] = [
  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080', [
    {
      model: 'xc3',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/218419/evga-geforce-rtx-3080-xc3',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=218419&Quantity=1&AddToCart=true',
    },
    {
      model: 'xc3 black',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/218425/evga-geforce-rtx-3080-xc3-black',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=218425&Quantity=1&AddToCart=true',
    },
    {
      model: 'ftw3',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/220655/evga-geforce-rtx-3080-ftw3',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=220655&Quantity=1&AddToCart=true',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/220656/evga-geforce-rtx-3080-ftw3-ultra',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=220656&Quantity=1&AddToCart=true',
    },
  ]),

  // Palit Cards
  ...createBrandSeriesLinks('palit', '3080', [
    {
      model: 'gaming pro oc',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/222470/geforce-rtx-3080-gamingpro-oc',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=222470&Quantity=1&AddToCart=true',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'tuf',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/215364/asus-geforce-rtx-3080-10gb-gddr6x-tuf-gaming',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=215364&Quantity=1&AddToCart=true',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'eagle oc',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/216109/gigabyte-geforce-rtx-3080-10gb-eagle-oc',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=216109&Quantity=1&AddToCart=true',
    },
    {
      model: 'gaming oc',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/216111/gigabyte-geforce-rtx-3080-10gb-gaming-oc',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=216111&Quantity=1&AddToCart=true',
    },
  ]),

  // Gainward Cards
  ...createBrandSeriesLinks('gainward', '3080', [
    {
      model: 'phoenix gs',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/222467/geforce-rtx-3080-phoenix-gs',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=222467&Quantity=1&AddToCart=true',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'suprim x',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/275719/msi-geforce-rtx-3080-suprim-x-10-gb-grafikkort',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=275719&Quantity=1&AddToCart=true',
    },
  ]),
];
