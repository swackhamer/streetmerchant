import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for utlimainformatica 3070 series
 */
export const links: Link[] = [
  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3070', [
    {
      model: 'twin edge',
      url: 'https://ultimainformatica.com/tarjetas-graficas/84334-zotac-zt-a30700e-10p-tarjeta-grafica-nvidia-geforce-rtx-3070-8-gb-gddr6-4895173622472.html',
    },
    {
      model: 'twin edge oc white',
      url: 'https://ultimainformatica.com/tarjetas-graficas/85896-zotac-gaming-geforce-rtx-3070-twin-edge-oc-white-edition-nvidia-8-gb-gddr6-4895173622632.html',
    },
    {
      model: 'twin edge oc',
      url: 'https://ultimainformatica.com/tarjetas-graficas/84814-zotac-gaming-geforce-rtx-3070-twin-edge-oc-nvidia-8-gb-gddr6-4895173622489.html',
    },
    {
      model: 'amp holo',
      url: 'https://ultimainformatica.com/tarjetas-graficas/86776-zotac-geforce-rtx-3070-amp-holo-nvidia-8-gb-gddr6-4895173622700.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3070', [
    {
      model: 'gaming x trio',
      url: 'https://ultimainformatica.com/tarjetas-graficas/84282-msi-geforce-rtx-3070-gaming-x-trio-nvidia-8-gb-gddr6-4719072763053.html',
    },
    {
      model: 'ventus 2x',
      url: 'https://ultimainformatica.com/tarjetas-graficas/84284-msi-geforce-rtx-3070-ventus-2x-oc-nvidia-8-gb-gddr6-4719072763091.html',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://ultimainformatica.com/tarjetas-graficas/84283-msi-geforce-rtx-3070-ventus-3x-oc-nvidia-8-gb-gddr6-4719072763084.html',
    },
    {
      model: 'suprim x',
      url: 'https://ultimainformatica.com/tarjetas-graficas/85530-msi-geforce-rtx-3070-suprim-x-8g-nvidia-8-gb-gddr6-4719072763046.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3070', [
    {
      model: 'gaming oc',
      url: 'https://ultimainformatica.com/tarjetas-graficas/84201-gigabyte-geforce-rtx-3070-gaming-oc-8g-nvidia-8-gb-gddr6-4719331307691.html',
    },
    {
      model: 'eagle',
      url: 'https://ultimainformatica.com/tarjetas-graficas/84768-gigabyte-gv-n3070eagle-8gd-tarjeta-grafica-nvidia-geforce-rtx-3070-8-gb-gddr6-4719331307738.html',
    },
    {
      model: 'eagle oc',
      url: 'https://ultimainformatica.com/tarjetas-graficas/83953-gigabyte-geforce-rtx-3070-eagle-oc-8g-nvidia-8-gb-gddr6-4719331307677.html',
    },
    {
      model: 'vision oc',
      url: 'https://ultimainformatica.com/tarjetas-graficas/84202-gigabyte-geforce-rtx-3070-vision-oc-8g-nvidia-8-gb-gddr6-4719331307790.html',
    },
    {
      model: 'aorus master',
      url: 'https://ultimainformatica.com/tarjetas-graficas/84391-gigabyte-aorus-geforce-rtx-3070-master-8g-nvidia-8-gb-gddr6-4719331307844.html',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3070', [
    {
      model: 'tuf oc',
      url: 'https://ultimainformatica.com/tarjetas-graficas/85296-asus-tuf-gaming-tuf-rtx3070-o8g-gaming-nvidia-geforce-rtx-3070-8-gb-gddr6-4718017948678.html',
    },
    {
      model: 'tuf',
      url: 'https://ultimainformatica.com/tarjetas-graficas/86867-asus-tuf-gaming-tuf-rtx3070-8g-gaming-nvidia-geforce-rtx-3070-8-gb-gddr6-4718017968881.html',
    },
    {
      model: 'ekwb',
      url: 'https://ultimainformatica.com/tarjetas-graficas/85657-asus-rtx3070-8g-ek-nvidia-geforce-rtx-3070-8-gb-gddr6-4718017994002.html',
    },
    {
      model: 'turbo',
      url: 'https://ultimainformatica.com/tarjetas-graficas/87112-asus-turbo-rtx3070-8g-nvidia-geforce-rtx-3070-8-gb-gddr6-4718017998161.html',
    },
    {
      model: 'dual oc',
      url: 'https://ultimainformatica.com/tarjetas-graficas/87512-asus-dual-rtx3070-o8g-nvidia-geforce-rtx-3070-8-gb-gddr6-4718017927864.html',
    },
    {
      model: 'dual',
      url: 'https://ultimainformatica.com/tarjetas-graficas/84134-asus-dual-rtx3070-8g-nvidia-geforce-rtx-3070-8-gb-gddr6-4718017927901.html',
    },
    {
      model: 'strix oc',
      url: 'https://ultimainformatica.com/tarjetas-graficas/84530-asus-rog-strix-rtx3070-o8g-gaming-nvidia-geforce-rtx-3070-8-gb-gddr6-4718017938150.html',
    },
    {
      model: 'strix',
      url: 'https://ultimainformatica.com/tarjetas-graficas/84822-asus-rog-strix-rtx3070-8g-gaming-nvidia-geforce-rtx-3070-8-gb-gddr6-4718017909174.html',
    },
    {
      model: 'strix white',
      url: 'https://ultimainformatica.com/tarjetas-graficas/86031-asus-rog-strix-rtx3070-8g-white-nvidia-geforce-rtx-3070-8-gb-gddr6-4711081014652.html',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3070', [
    {
      model: 'xc3 ultra',
      url: 'https://ultimainformatica.com/tarjetas-graficas/90988-evga-geforce-rtx-3070-xc3-ultra-gaming-nvidia-8-gb-gddr6-4250812438492.html',
    },
    {
      model: 'xc3',
      url: 'https://ultimainformatica.com/tarjetas-graficas/92345-evga-geforce-rtx-3070-xc3-gaming-nvidia-8-gb-gddr6-4250812438515.html',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://ultimainformatica.com/tarjetas-graficas/92289-evga-geforce-rtx-3070-ftw3-ultra-gaming-nvidia-8-gb-gddr6-4250812438478.html',
    },
  ]),
];
