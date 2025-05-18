import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for siabyte 3090 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'gaming',
      url: 'https://siabyte.com/tarjetas-graficas/887-asus-rog-strix-geforce-rtx-3090-gaming-24gb-gddr6x.html',
    },
    {
      model: 'tuf',
      url: 'https://siabyte.com/tarjetas-graficas/889-asus-tuf-geforce-rtx-3090-gaming-24gb-gddr6x.html',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3090', [
    {
      model: 'ftw3 ultra',
      url: 'https://siabyte.com/tarjetas-graficas/842-evga-geforce-rtx-3090-ftw3-ultra-gaming-24gb-gddr6x.html',
    },
    {
      model: 'xc3 ultra',
      url: 'https://siabyte.com/tarjetas-graficas/855-evga-geforce-rtx-3090-xc3-ultra-gaming-24gb-gddr6x.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3090', [
    {
      model: 'gaming oc',
      url: 'https://siabyte.com/tarjetas-graficas/863-gigabyte-geforce-rtx-3090-gaming-oc-24g-24gb-gddr6x.html',
    },
    {
      model: 'aorus master',
      url: 'https://siabyte.com/tarjetas-graficas/864-gigabyte-aorus-geforce-rtx-3090-master-24gb-gddr6x.html',
    },
    {
      model: 'turbo',
      url: 'https://siabyte.com/tarjetas-graficas/953-gigabyte-geforce-rtx-3090-turbo-24gb-gddr6x.html',
    },
    {
      model: 'aorus xtreme',
      url: 'https://siabyte.com/tarjetas-graficas/955-gigabyte-aorus-geforce-rtx-3090-xtreme-24gb-gddrx6.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3090', [
    {
      model: 'ventus 3x oc',
      url: 'https://siabyte.com/tarjetas-graficas/922-msi-geforce-rtx-3090-ventus-3x-oc-24gb-gddr6x.html',
    },
  ]),

  // Palit Cards
  ...createBrandSeriesLinks('palit', '3090', [
    {
      model: 'gaming pro oc',
      url: 'https://siabyte.com/tarjetas-graficas/880-palit-geforce-rtx-3090-gaming-pro-oc-24gb-gddr6x.html',
    },
    {
      model: 'gaming pro',
      url: 'https://siabyte.com/tarjetas-graficas/893-palit-geforce-rtx-3090-gaming-pro-24gb-gddr6x.html',
    },
    {
      model: 'gamerock oc',
      url: 'https://siabyte.com/tarjetas-graficas/894-palit-geforce-rtx-3090-gamerock-oc-24gb-gddr6x.html',
    },
    {
      model: 'gamerock',
      url: 'https://siabyte.com/tarjetas-graficas/895-palit-geforce-rtx-3090-gamerock-24gb-gddr6x.html',
    },
    {
      model: 'trinity oc',
      url: 'https://siabyte.com/tarjetas-graficas/938-zotac-gaming-geforce-rtx-3090-trinity-oc-24gb-gddr6x.html',
    },
  ]),
];
