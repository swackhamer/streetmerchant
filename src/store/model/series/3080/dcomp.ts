import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for dcomp 3080 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'tuf',
      url: 'https://dcomp.com.au/productdetail/3172',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080', [
    {
      model: 'xc3 black',
      url: 'https://dcomp.com.au/productdetail/3205',
    },
    {
      model: 'xc3 ultra',
      url: 'https://dcomp.com.au/productdetail/3206',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'aorus master',
      url: 'https://dcomp.com.au/productdetail/3183',
    },
    {
      model: 'aorus xtreme',
      url: 'https://dcomp.com.au/productdetail/3310',
    },
    {
      model: 'aorus xtreme waterforce',
      url: 'https://dcomp.com.au/productdetail/3307',
    },
    {
      model: 'aorus xtreme waterforce wb',
      url: 'https://dcomp.com.au/productdetail/3308',
    },
    {
      model: 'eagle oc',
      url: 'https://dcomp.com.au/productdetail/3136',
    },
    {
      model: 'gaming oc',
      url: 'https://dcomp.com.au/productdetail/3135',
    },
    {
      model: 'vision oc',
      url: 'https://dcomp.com.au/productdetail/3166',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'gaming x trio',
      url: 'https://dcomp.com.au/productdetail/3199',
    },
    {
      model: 'suprim x',
      url: 'https://dcomp.com.au/productdetail/3306',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://dcomp.com.au/productdetail/3141',
    },
  ]),
];
