import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for pcdiga 3090 series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3090', [
    {
      model: 'aorus',
      url: 'https://www.pcdiga.com/placa-grafica-gigabyte-geforce-rtx-3090-aorus-gaming-box-24gb-gv-n3090ixeb-24gd-1-0',
    },
    {
      model: 'aorus master',
      url: 'https://www.pcdiga.com/placa-grafica-gigabyte-geforce-rtx-3090-aorus-master-24gb-gv-n3090aorus-m-24gd',
    },
    {
      model: 'vision oc',
      url: 'https://www.pcdiga.com/placa-grafica-gigabyte-geforce-rtx-3090-vision-oc-24gb-gvn3090vo-00-g',
    },
    {
      model: 'aorus xtreme',
      url: 'https://www.pcdiga.com/placa-grafica-gigabyte-geforce-rtx-3090-aorus-xtreme-24gb-gvn3090ax-00-10',
    },
    {
      model: 'eagle oc',
      url: 'https://www.pcdiga.com/placa-grafica-gigabyte-geforce-rtx-3090-eagle-24gb-gddr6x-oc-edition-gvn3090eo-00-10',
    },
    {
      model: 'gaming oc',
      url: 'https://www.pcdiga.com/placa-grafica-gigabyte-geforce-rtx-3090-gaming-24gb-gddr6x-oc-edition-gvn3090go-00-10',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3090', [
    {
      model: 'trinity',
      url: 'https://www.pcdiga.com/placa-grafica-zotac-gaming-geforce-rtx-3090-24gb-gddr6x-trinity-zt-a30900d-10p',
    },
    {
      model: 'trinity oc',
      url: 'https://www.pcdiga.com/placa-grafica-zotac-gaming-geforce-rtx-3090-24gb-gddr6x-trinity-oc-zt-a30900j-10p',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'strix',
      url: 'https://www.pcdiga.com/placa-grafica-asus-rog-strix-geforce-rtx-3090-24gb-gddr6x-90yv0f90-m0nm00',
    },
    {
      model: 'tuf',
      url: 'https://www.pcdiga.com/placa-grafica-asus-tuf-gaming-geforce-rtx-3090-24gb-gddr6x-90yv0fd0-m0nm00',
    },
    {
      model: 'ekwb',
      url: 'https://www.pcdiga.com/placa-grafica-asus-ekwb-geforce-rtx-3090-24gb-gddr6x-90yv0f80-m0nm00',
    },
    {
      model: 'strix oc',
      url: 'https://www.pcdiga.com/placa-grafica-asus-rog-strix-geforce-rtx-3090-24gb-gddr6x-oc-edition-90yv0f93-m0nm00',
    },
    {
      model: 'tuf oc',
      url: 'https://www.pcdiga.com/placa-grafica-asus-tuf-gaming-geforce-rtx-3090-24gb-gddr6x-oc-edition-90yv0fd1-m0nm00',
    },
    {
      model: 'strix oc white',
      url: 'https://www.pcdiga.com/placa-grafica-asus-rog-strix-gaming-geforce-rtx-3090-24gb-gddr6x-oc-white-edition-90yv0f96-m0nm00',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3090', [
    {
      model: 'ventus 3x oc',
      url: 'https://www.pcdiga.com/placa-grafica-msi-geforce-rtx-3090-ventus-3x-24g-oc-912-v388-002',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.pcdiga.com/placa-grafica-msi-geforce-rtx-3090-gaming-x-trio-24g-912-v388-011',
    },
    {
      model: 'suprim x',
      url: 'https://www.pcdiga.com/placa-grafica-msi-geforce-rtx-3090-suprim-x-24g-912-v388-010',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3090', [
    {
      model: 'xlr8 epic x',
      url: 'https://www.pcdiga.com/placa-grafica-pny-geforce-rtx-3090-24gb-gddr6x-xlr8-gaming-epic-x-rgb-triple-fan-vcg309024tfxppb',
    },
    {
      model: 'xlr8 epic x',
      url: 'https://www.pcdiga.com/placa-grafica-pny-geforce-rtx-3090-24gb-gddr6x-xlr8-gaming-epic-x-rgb-triple-fan-vcg309024tfxmpb',
    },
  ]),
];
