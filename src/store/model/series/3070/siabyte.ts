import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for siabyte 3070 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3070', [
    {
      model: 'tuf oc',
      url: 'https://siabyte.com/tarjetas-graficas/912-asus-tuf-gaming-geforce-rtx-3070-oc-8gb-gddr6.html',
    },
    {
      model: 'tuf',
      url: 'https://siabyte.com/tarjetas-graficas/930-asus-tuf-rtx-3070-gaming-8gb-gddr6.html',
    },
    {
      model: 'ekwb',
      url: 'https://siabyte.com/tarjetas-graficas/959-asus-ekwb-geforce-rtx-3070-8gb-gddr6.html',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3070', [
    {
      model: 'xc3 black',
      url: 'https://siabyte.com/tarjetas-graficas/853-evga-geforce-rtx-3070-xc3-black-gaming-8gb-gddr6.html',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://siabyte.com/tarjetas-graficas/854-evga-geforce-rtx-3070-ftw3-ultra-gaming-8gb-gddr6.html',
    },
    {
      model: 'xc3 ultra',
      url: 'https://siabyte.com/tarjetas-graficas/883-evga-geforce-rtx-3070-xc3-ultra-gaming-8gb-gddr6.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3070', [
    {
      model: 'gaming oc',
      url: 'https://siabyte.com/tarjetas-graficas/847-gigabyte-geforce-rtx-3070-gaming-oc-8gb-gddr6.html',
    },
    {
      model: 'eagle oc',
      url: 'https://siabyte.com/tarjetas-graficas/857-gigabyte-geforce-rtx-3070-eagle-oc-8gb-gddr6.html',
    },
    {
      model: 'vision oc',
      url: 'https://siabyte.com/tarjetas-graficas/862-gigabyte-geforce-rtx-3070-vision-oc-8gb-gddr6.html',
    },
    {
      model: 'aorus master',
      url: 'https://siabyte.com/tarjetas-graficas/881-gigabyte-aorus-geforce-rtx-3070-master-8gb-gddr6.html',
    },
    {
      model: 'eagle',
      url: 'https://siabyte.com/tarjetas-graficas/926-gigabyte-geforce-rtx-3070-eagle-8gb-gddr6.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3070', [
    {
      model: 'ventus 2x oc',
      url: 'https://siabyte.com/tarjetas-graficas/921-msi-geforce-rtx-3070-ventus-2x-oc-8gb-gddr6.html',
    },
    {
      model: 'suprim x',
      url: 'https://siabyte.com/tarjetas-graficas/972-msi-geforce-rtx-3070-suprim-x-8gb-gddr6.html',
    },
  ]),

  // Palit Cards
  ...createBrandSeriesLinks('palit', '3070', [
    {
      model: 'gaming pro',
      url: 'https://siabyte.com/tarjetas-graficas/879-palit-geforce-rtx-3070-gaming-pro-8gb-gddr6.html',
    },
    {
      model: 'jetstream',
      url: 'https://siabyte.com/tarjetas-graficas/906-palit-rtx-3070-jet-stream-8gb-gddr6.html',
    },
    {
      model: 'jetstream oc',
      url: 'https://siabyte.com/tarjetas-graficas/909-palit-geforce-rtx-3070-jet-stream-oc-8gb-gddr6.html',
    },
    {
      model: 'gamerock oc',
      url: 'https://siabyte.com/tarjetas-graficas/910-palit-geforce-rtx-3070-gamerock-oc-8gb-gddr6.html',
    },
    {
      model: 'gamerock',
      url: 'https://siabyte.com/tarjetas-graficas/911-palit-geforce-rtx-3070-gamerock-8gb-gddr6.html',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3070', [
    {
      model: 'twin edge oc white',
      url: 'https://siabyte.com/tarjetas-graficas/917-zotac-gaming-geforce-rtx-3070-twin-edge-oc-white-edition-8gb-gddr6.html',
    },
  ]),
];
