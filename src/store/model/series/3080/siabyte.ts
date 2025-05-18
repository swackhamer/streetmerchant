import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for siabyte 3080 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'tuf oc',
      url: 'https://siabyte.com/tarjetas-graficas/920-asus-tuf-geforce-rtx-3080-oc-10gb-gddr6x.html',
    },
    {
      model: 'strix oc',
      url: 'https://siabyte.com/tarjetas-graficas/923-asus-rog-strix-geforce-rtx-3080-10g-gaming-oc-10gb-gddr6x.html',
    },
    {
      model: 'strix oc white',
      url: 'https://siabyte.com/tarjetas-graficas/928-asus-rog-strix-geforce-rtx-3080-oc-10gb-gddr6x.html',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080', [
    {
      model: 'xc3 ultra',
      url: 'https://siabyte.com/tarjetas-graficas/838-evga-geforce-rtx-3080-xc3-ultra-gaming-10gb-gddr6x.html',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://siabyte.com/tarjetas-graficas/839-evga-geforce-rtx-3080-ftw3-ultra-gaming-10gb-gddr6x.html',
    },
    {
      model: 'xc3 black',
      url: 'https://siabyte.com/tarjetas-graficas/848-evga-geforce-rtx-3080-xc3-black-gaming-10gb-gddr6x.html',
    },
    {
      model: 'xc3 ultra hybrid',
      url: 'https://siabyte.com/tarjetas-graficas/901-evga-geforce-rtx-3080-xc3-ultra-hybrid-gaming-10gb-gddr6x.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'aorus master',
      url: 'https://siabyte.com/tarjetas-graficas/849-gigabyte-aorus-geforce-rtx-3080-master-10gb-gddr6x.html',
    },
    {
      model: 'aorus xtreme',
      url: 'https://siabyte.com/tarjetas-graficas/852-gigabyte-aorus-geforce-rtx-3080-xtreme-10gb-gddr6x.html',
    },
    {
      model: 'vision oc',
      url: 'https://siabyte.com/tarjetas-graficas/860-gigabyte-geforce-rtx-3080-vision-oc-10gb-gddr6x.html',
    },
    {
      model: 'gaming oc',
      url: 'https://siabyte.com/tarjetas-graficas/861-gigabyte-geforce-rtx-3080-gaming-oc-10g-10gb-gddr6x.html',
    },
    {
      model: 'eagle oc',
      url: 'https://siabyte.com/tarjetas-graficas/865-gigabyte-geforce-rtx-3080-eagle-oc-10g-10gb-gddr6x.html',
    },
    {
      model: 'aorus xtreme waterforce wb',
      url: 'https://siabyte.com/tarjetas-graficas/941-gigabyte-aorus-geforce-rtx-3080-xtreme-waterforce-wb-10gb-gddr6x.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'suprim x',
      url: 'https://siabyte.com/tarjetas-graficas/924-msi-geforce-rtx-3080-suprim-x-10gb-gddr6x.html',
    },
  ]),
];
