import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for asus 5090 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '5090', [
    {
      model: 'tuf gaming',
      url: 'https://shop.asus.com/us/rog/90yv0ly1-m0aa00-asus-tuf-gaming-geforce-rtxtm-5090-32gb-gddr7.html',
    },
    {
      model: 'tuf gaming oc',
      url: 'https://shop.asus.com/us/90yv0ly0-m0aa00-asus-tuf-gaming-geforce-rtxtm-5090-32gb-gddr7-oc-edition.html',
    },
    {
      model: 'astral lc',
      url: 'https://shop.asus.com/us/90yv0lw2-m0aa00-rog-astral-lc-rtx5090-o32g-gaming.html',
    },
    {
      model: 'astral oc',
      url: 'https://shop.asus.com/us/90yv0lw0-m0aa00-rog-astral-rtx5090-o32g-gaming.html',
    },
  ]),

];
