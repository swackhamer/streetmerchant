import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for saveonit 3080 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'tuf',
      url: 'https://www.saveonit.com.au/products/productdetails/65165506',
    },
    {
      model: 'tuf oc',
      url: 'https://www.saveonit.com.au/products/productdetails/65165507',
    },
    {
      model: 'strix oc',
      url: 'https://www.saveonit.com.au/products/productdetails/65165536',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080', [
    {
      model: 'ftw3 ultra',
      url: 'https://www.saveonit.com.au/products/productdetails/65165879',
    },
  ]),

  // Galax Cards
  ...createBrandSeriesLinks('galax', '3080', [
    {
      model: 'sg oc',
      url: 'https://www.saveonit.com.au/products/productdetails/65165599',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'eagle oc',
      url: 'https://www.saveonit.com.au/products/productdetails/65165501',
    },
    {
      model: 'gaming oc',
      url: 'https://www.saveonit.com.au/products/productdetails/65165504',
    },
    {
      model: 'vision oc',
      url: 'https://www.saveonit.com.au/products/productdetails/65165520',
    },
    {
      model: 'aorus master',
      url: 'https://www.saveonit.com.au/products/productdetails/65165519',
    },
    {
      model: 'aorus xtreme',
      url: 'https://www.saveonit.com.au/products/productdetails/65165578',
    },
    {
      model: 'aorus xtreme waterforce',
      url: 'https://www.saveonit.com.au/products/productdetails/65165691',
    },
    {
      model: 'aorus xtreme waterforce wb',
      url: 'https://www.saveonit.com.au/products/productdetails/65165692',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3080', [
    {
      model: 'ichill x4',
      url: 'https://www.saveonit.com.au/products/productdetails/65165575',
    },
    {
      model: 'ichill x3',
      url: 'https://www.saveonit.com.au/products/productdetails/65165564',
    },
    {
      model: 'twin x2 oc',
      url: 'https://www.saveonit.com.au/products/productdetails/65165576',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'suprim x',
      url: 'https://www.saveonit.com.au/products/productdetails/65165827',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.saveonit.com.au/products/productdetails/65165514',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.saveonit.com.au/products/productdetails/65165505',
    },
  ]),
];
