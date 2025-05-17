import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for pcdiga 3070 series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3070', [
    {
      model: 'eagle',
      url: 'https://www.pcdiga.com/componentes/placas-graficas/placas-graficas-nvidia/placa-grafica-gigabyte-geforce-rtx-3070-eagle-8gb-gddr6-gv-n3070eagle-8gd',
    },
    {
      model: 'gaming oc',
      url: 'https://www.pcdiga.com/componentes/placas-graficas/placas-graficas-nvidia/placa-grafica-gigabyte-geforce-rtx-3070-gaming-oc-8g-gv-n3070gaming-oc-8gd',
    },
    {
      model: 'aorus master',
      url: 'https://www.pcdiga.com/componentes/placas-graficas/placas-graficas-nvidia/placa-grafica-gigabyte-geforce-rtx-3070-aorus-master-8gb-gddr6-gv-n3070aorus-m-8gd',
    },
    {
      model: 'vision oc',
      url: 'https://www.pcdiga.com/componentes/placas-graficas/placas-graficas-nvidia/placa-grafica-gigabyte-geforce-rtx-3070-vision-oc-8gb-gddr6-gv-n3070vision-oc-8gd',
    },
    {
      model: 'eagle oc',
      url: 'https://www.pcdiga.com/componentes/placas-graficas/placas-graficas-nvidia/placa-grafica-gigabyte-geforce-rtx-3070-eagle-8gb-gddr6-oc-edition-gv-n3070eagle-oc-8gd',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3070', [
    {
      model: 'twin edge oc',
      url: 'https://www.pcdiga.com/componentes/placas-graficas/placas-graficas-nvidia/placa-grafica-zotac-gaming-geforce-rtx-3070-8gb-gddr6-twin-edge-oc-zt-a30700h-10p',
    },
    {
      model: 'twin edge',
      url: 'https://www.pcdiga.com/componentes/placas-graficas/placas-graficas-nvidia/placa-grafica-zotac-gaming-geforce-rtx-3070-8gb-gddr6-twin-edge-zt-a30700e-10p',
    },
    {
      model: 'amp holo',
      url: 'https://www.pcdiga.com/componentes/placas-graficas/placas-graficas-nvidia/placa-grafica-zotac-gaming-geforce-rtx-3070-8gb-gddr6-amp-holo-zt-a30700f-10p',
    },
    {
      model: 'twin edge oc',
      url: 'https://www.pcdiga.com/componentes/placas-graficas/placas-graficas-nvidia/placa-grafica-zotac-gaming-geforce-rtx-3070-8gb-gddr6-twin-edge-oc-white-edition-zt-a30700j-10p',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3070', [
    {
      model: 'ventus 2x',
      url: 'https://www.pcdiga.com/componentes/placas-graficas/placas-graficas-nvidia/placa-grafica-msi-geforce-rtx-3070-ventus-2x-8g-oc-912-v390-008',
    },
    {
      model: 'suprim x',
      url: 'https://www.pcdiga.com/componentes/placas-graficas/placas-graficas-nvidia/placa-grafica-msi-geforce-rtx-3070-suprim-x-8g-912-v390-005',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3070', [
    {
      model: 'xlr8 epic x',
      url: 'https://www.pcdiga.com/componentes/placas-graficas/placas-graficas-nvidia/placa-grafica-pny-geforce-rtx-3070-8gb-gddr6-xlr8-gaming-epic-x-rgb-triple-fan-vcg30708tfxppb',
    },
    {
      model: 'dual fan',
      url: 'https://www.pcdiga.com/componentes/placas-graficas/placas-graficas-nvidia/placa-grafica-pny-geforce-rtx-3070-8gb-gddr6-dual-fan-vcg30708dfmpb',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3070', [
    {
      model: 'dual oc',
      url: 'https://www.pcdiga.com/componentes/placas-graficas/placas-graficas-nvidia/placa-grafica-asus-dual-geforce-rtx-3070-8gb-gddr6-oc-editon-90yv0fq0-m0na00',
    },
    {
      model: 'dual',
      url: 'https://www.pcdiga.com/componentes/placas-graficas/placas-graficas-nvidia/placa-grafica-asus-dual-geforce-rtx-3070-8gb-gddr6-90yv0fq1-m0na00',
    },
    {
      model: 'strix oc',
      url: 'https://www.pcdiga.com/componentes/placas-graficas/placas-graficas-nvidia/placa-grafica-asus-rog-strix-geforce-rtx-3070-8gb-gddr6-oc-editon-90yv0fr1-m0na00',
    },
    {
      model: 'strix',
      url: 'https://www.pcdiga.com/componentes/placas-graficas/placas-graficas-nvidia/placa-grafica-asus-rog-strix-geforce-rtx-3070-8gb-gddr6-90yv0fr0-m0na00',
    },
    {
      model: 'tuf oc',
      url: 'https://www.pcdiga.com/componentes/placas-graficas/placas-graficas-nvidia/placa-grafica-asus-tuf-gaming-geforce-rtx-3070-8gb-gddr6-oc-edition-90yv0fq6-m0na00',
    },
  ]),

];
