import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for vsgamers 3080 series
 */
export const links: Link[] = [
  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3080', [
    {
      model: 'amp holo',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-zotac-gaming-nvidia-geforce-rtxr-3080-10-gb-gddr6x',
    },
    {
      model: 'trinity',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-zotac-geforce-rtx-3080-trinity-10-gb-gddr6x',
    },
    {
      model: 'trinity oc',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-zotac-gaming-nvidia-geforce-rtxr-3080-trinity-oc-10-gb-gddr6x',
    },
    {
      model: 'trinity oc lhr',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-zotac-gaming-geforce-rtx-3080-trinity-oc-lhr-10gb-gddr6x',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'ventus 3x oc',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-msi-geforce-rtx-3080-ventus-3x-10g-oc-10-gb-gddr6x',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-msi-geforce-rtx-3080-gaming-x-trio-10g-10-gb-gddr6x',
    },
    {
      model: 'suprim x',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-msi-geforce-rtx-3080-suprim-x-10g-gddr6x',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'tuf',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-asus-tuf-gaming-geforce-rtx-3080-10g-10-gb-gddr6x',
    },
    {
      model: 'tuf oc',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-asus-tuf-gaming-geforce-rtx-3080-oc-10g-10-gb-gddr6x',
    },
    {
      model: 'strix',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-asus-rog-strix-geforce-rtx-3080-gaming-10g-10-gb-gddr6x',
    },
    {
      model: 'strix white',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-asus-rog-strix-nvidia-geforce-rtx-3080-oc-10gb-gddr6x-white',
    },
    {
      model: 'strix oc',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-asus-rog-strix-geforce-rtx-3080-gaming-oc-10g-10-gb-gddr6x',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'eagle oc',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-gigabyte-geforce-rtx-3080-eagle-oc-10g-10-gb-gddr6x',
    },
    {
      model: 'gaming oc',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-gigabyte-geforce-rtx-3080-gaming-oc-10g-10-gb-gddr6x',
    },
    {
      model: 'aorus xtreme',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-gigabyte-aorus-geforce-rtx-3080-xtreme-10gb-gddr6x',
    },
    {
      model: 'aorus master',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-gigabyte-aorus-geforce-rtx-3080-10-gb-gddr6x',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3080', [
    {
      model: 'xlr8 revel',
      url: 'https://www.vsgamers.es/product/tarjeta-grafica-pny-nvidia-geforce-rtx-3080-10gb-gddrex',
    },
  ]),

];
