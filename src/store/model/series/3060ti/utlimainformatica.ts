import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for utlimainformatica 3060ti series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', '3060ti', [
    {
      model: 'ventus 2x',
      url: 'https://ultimainformatica.com/tarjetas-graficas/87470-msi-geforce-rtx-3060-ti-ventus-2x-ocv1-nvidia-8-gb-gddr6-4719072780784.html',
    },
    {
      model: 'ventus 2x oc',
      url: 'https://ultimainformatica.com/tarjetas-graficas/85672-msi-geforce-rtx-3060-ti-ventus-2x-oc-nvidia-8-gb-gddr6-4719072763121.html',
    },
    {
      model: 'gaming x',
      url: 'https://ultimainformatica.com/tarjetas-graficas/89537-msi-rtx-3060-ti-gaming-x-tarjeta-grafica-nvidia-geforce-rtx-3060-ti-8-gb-gddr6-4719072781767.html',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://ultimainformatica.com/tarjetas-graficas/86316-msi-geforce-rtx-3060-ti-ventus-3x-oc-nvidia-8-gb-gddr6-4719072763152.html',
    },
    {
      model: 'gaming x trio',
      url: 'https://ultimainformatica.com/tarjetas-graficas/85671-msi-geforce-rtx-3060-ti-gaming-x-trio-nvidia-8-gb-gddr6-4719072763145.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3060ti', [
    {
      model: 'eagle',
      url: 'https://ultimainformatica.com/tarjetas-graficas/85669-gigabyte-geforce-rtx-3060-ti-eagle-8g-nvidia-8-gb-gddr6-4719331307776.html',
    },
    {
      model: 'eagle oc',
      url: 'https://ultimainformatica.com/tarjetas-graficas/85667-gigabyte-geforce-rtx-3060-ti-eagle-oc-8g-nvidia-8-gb-gddr6-4719331307769.html',
    },
    {
      model: 'vision oc',
      url: 'https://ultimainformatica.com/tarjetas-graficas/87586-gigabyte-geforce-rtx-3060-ti-vision-oc-8g-nvidia-8-gb-gddr6-4719331308513.html',
    },
    {
      model: 'gaming oc pro',
      url: 'https://ultimainformatica.com/tarjetas-graficas/89358-gigabyte-geforce-rtx-3060-ti-gaming-oc-pro-8g-rev-20-nvidia-8-gb-gddr6-4719331308551.html',
    },
    {
      model: 'gaming oc pro',
      url: 'https://ultimainformatica.com/tarjetas-graficas/85670-gigabyte-geforce-rtx-3060-ti-gaming-oc-pro-8g-nvidia-8-gb-gddr6-4719331307943.html',
    },
    {
      model: 'gaming oc',
      url: 'https://ultimainformatica.com/tarjetas-graficas/85668-gigabyte-geforce-rtx-3060-ti-gaming-oc-8g-nvidia-8-gb-gddr6-4719331307752.html',
    },
    {
      model: 'aorus master',
      url: 'https://ultimainformatica.com/tarjetas-graficas/85666-gigabyte-aorus-geforce-rtx-3060-ti-master-8g-nvidia-8-gb-gddr6-4719331307967.html',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3060ti', [
    {
      model: 'dual',
      url: 'https://ultimainformatica.com/tarjetas-graficas/86861-asus-dual-rtx3060ti-8g-nvidia-geforce-rtx-3060-ti-8-gb-gddr6-4718017962995.html',
    },
    {
      model: 'dual oc',
      url: 'https://ultimainformatica.com/tarjetas-graficas/86118-asus-dual-rtx3060ti-o8g-nvidia-geforce-rtx-3060-ti-8-gb-gddr6-4718017963046.html',
    },
    {
      model: 'dual mini',
      url: 'https://ultimainformatica.com/tarjetas-graficas/86995-asus-dual-rtx3060ti-8g-mini-nvidia-geforce-rtx-3060-ti-8-gb-gddr6-4711081004769.html',
    },
    {
      model: 'dual mini oc',
      url: 'https://ultimainformatica.com/tarjetas-graficas/86996-asus-dual-rtx3060ti-o8g-mini-nvidia-geforce-rtx-3060-ti-8-gb-gddr6-4711081004691.html',
    },
    {
      model: 'strix',
      url: 'https://ultimainformatica.com/tarjetas-graficas/86863-asus-rog-strix-rtx3060ti-8g-gaming-nvidia-geforce-rtx-3060-ti-8-gb-gddr6-4718017952880.html',
    },
    {
      model: 'strix oc',
      url: 'https://ultimainformatica.com/tarjetas-graficas/87166-asus-rog-strix-rtx3060ti-o8g-gaming-nvidia-geforce-rtx-3060-ti-8-gb-gddr6-4718017953085.html',
    },
    {
      model: 'tuf oc',
      url: 'https://ultimainformatica.com/tarjetas-graficas/87362-asus-tuf-gaming-tuf-rtx3060ti-o8g-gaming-nvidia-geforce-rtx-3060-ti-8-gb-gddr6-4718017953221.html',
    },
    {
      model: 'tuf',
      url: 'https://ultimainformatica.com/tarjetas-graficas/86862-asus-tuf-gaming-tuf-rtx3060ti-8g-gaming-nvidia-geforce-rtx-3060-ti-8-gb-gddr6-4718017953184.html',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3060ti', [
    {
      model: 'twin edge',
      url: 'https://ultimainformatica.com/tarjetas-graficas/87948-zotac-zt-a30610e-10m-tarjeta-grafica-nvidia-geforce-rtx-3060-ti-8-gb-gddr6-4895173622502.html',
    },
    {
      model: 'twin edge oc',
      url: 'https://ultimainformatica.com/tarjetas-graficas/87947-zotac-zt-a30610h-10m-tarjeta-grafica-nvidia-geforce-rtx-3060-ti-8-gb-gddr6-4895173622519.html',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3060ti', [
    {
      model: 'xc gaming',
      url: 'https://ultimainformatica.com/tarjetas-graficas/92816-evga-geforce-rtx-3060-ti-xc-gaming-nvidia-8-gb-gddr6-4250812439208.html',
    },
  ]),
];
