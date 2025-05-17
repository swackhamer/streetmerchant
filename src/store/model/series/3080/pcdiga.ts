import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for pcdiga 3080 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'ekwb',
      url: 'https://www.pcdiga.com/placa-grafica-asus-ekwb-geforce-rtx-3080-10gb-gddr6x-90yv0f60-m0nm00',
    },
    {
      model: 'strix',
      url: 'https://www.pcdiga.com/placa-grafica-asus-rog-strix-geforce-rtx-3080-10gb-gddr6x-90yv0fa0-m0nm00',
    },
    {
      model: 'tuf',
      url: 'https://www.pcdiga.com/placa-grafica-asus-tuf-gaming-geforce-rtx-3080-10gb-gddr6x-90yv0fb0-m0nm00',
    },
    {
      model: 'strix',
      url: 'https://www.pcdiga.com/placa-grafica-asus-rog-strix-geforce-rtx-3080-10gb-gddr6x-oc-edition-90yv0fa1-m0nm00',
    },
    {
      model: 'tuf oc',
      url: 'https://www.pcdiga.com/placa-grafica-asus-tuf-gaming-geforce-rtx-3080-10gb-gddr6x-oc-edition-90yv0fb1-m0nm00',
    },
    {
      model: 'strix oc white',
      url: 'https://www.pcdiga.com/placa-grafica-asus-rog-strix-geforce-rtx-3080-10gb-gddr6x-oc-white-edition-90yv0fa5-m0nm00',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'ventus 3x',
      url: 'https://www.pcdiga.com/placa-grafica-msi-geforce-rtx-3080-ventus-3x-10g-oc-912-v389-001',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.pcdiga.com/placa-grafica-msi-geforce-rtx-3080-gaming-x-trio-10g-912-v389-005',
    },
    {
      model: 'suprim x',
      url: 'https://www.pcdiga.com/placa-grafica-msi-geforce-rtx-3080-suprim-x-10g-912-v389-006',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3080', [
    {
      model: 'trinity',
      url: 'https://www.pcdiga.com/placa-grafica-zotac-gaming-geforce-rtx-3080-10gb-gddr6x-trinity-zt-a30800d-10p',
    },
    {
      model: 'trinity oc',
      url: 'https://www.pcdiga.com/placa-grafica-zotac-gaming-geforce-rtx-3080-10gb-gddr6x-trinity-oc-zt-a30800j-10p',
    },
    {
      model: 'amp holo',
      url: 'https://www.pcdiga.com/placa-grafica-zotac-gaming-geforce-rtx-3080-10gb-gddr6x-amp-holo-zt-a30800f-10p',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'aorus xtreme',
      url: 'https://www.pcdiga.com/placa-grafica-gigabyte-geforce-rtx-3080-aorus-xtreme-10gb-gddr6x-gv-n3080aorus-x-10gd',
    },
    {
      model: 'aorus master',
      url: 'https://www.pcdiga.com/placa-grafica-gigabyte-geforce-rtx-3080-aorus-master-10gb-gddr6x-gvn3080am-00-10',
    },
    {
      model: 'aorus',
      url: 'https://www.pcdiga.com/placa-grafica-gigabyte-rtx-3080-aorus-gaming-box-10gb-gv-n3080ixeb-10gd',
    },
    {
      model: 'vision',
      url: 'https://www.pcdiga.com/placa-grafica-gigabyte-geforce-rtx-3080-vision-10gb-gddr6x-oc-edition-gv-n3080vision-oc-10',
    },
    {
      model: 'eagle oc',
      url: 'https://www.pcdiga.com/placa-grafica-gigabyte-geforce-rtx-3080-eagle-10gb-gddr6x-oc-edition-gvn3080eo-00-10',
    },
    {
      model: 'gaming oc',
      url: 'https://www.pcdiga.com/placa-grafica-gigabyte-geforce-rtx-3080-gaming-10gb-gddr6x-oc-edition-gvn3080go-00-10',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3080', [
    {
      model: 'xlr8 epic x',
      url: 'https://www.pcdiga.com/placa-grafica-pny-geforce-rtx-3080-10gb-gddr6x-xlr8-gaming-epic-x-rgb-triple-fan-vcg308010tfxppb',
    },
    {
      model: 'xlr8 epic x',
      url: 'https://www.pcdiga.com/placa-grafica-pny-geforce-rtx-3080-10gb-gddr6x-xlr8-gaming-epic-x-rgb-triple-fan-vcg308010tfxmpb',
    },
  ]),

];
