import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for dcomp 3090 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'tuf',
      url: 'https://dcomp.com.au/productdetail/3226',
    },
    {
      model: 'strix oc',
      url: 'https://dcomp.com.au/productdetail/3281',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3090', [
    {
      model: 'aorus master',
      url: 'https://dcomp.com.au/productdetail/3309',
    },
    {
      model: 'aorus xtreme',
      url: 'https://dcomp.com.au/productdetail/3263',
    },
    {
      model: 'aorus xtreme waterforce',
      url: 'https://dcomp.com.au/productdetail/3388',
    },
    {
      model: 'aorus xtreme waterforce wb',
      url: 'https://dcomp.com.au/productdetail/3417',
    },
    {
      model: 'eagle oc',
      url: 'https://dcomp.com.au/productdetail/3234',
    },
    {
      model: 'gaming oc',
      url: 'https://dcomp.com.au/productdetail/3158',
    },
    {
      model: 'vision oc',
      url: 'https://dcomp.com.au/productdetail/3235',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3090', [
    {
      model: 'ventus 3x oc',
      url: 'https://dcomp.com.au/productdetail/3168',
    },
    {
      model: 'gaming x trio',
      url: 'https://dcomp.com.au/productdetail/3167',
    },
    {
      model: 'suprim x',
      url: 'https://dcomp.com.au/productdetail/3300',
    },
  ]),

];
