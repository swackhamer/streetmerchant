import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for pcdiga 3060ti series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3060ti', [
    {
      model: 'dual',
      url: 'https://www.pcdiga.com/componentes/placas-graficas/placas-graficas-nvidia/placa-grafica-asus-dual-geforce-rtx-3060-ti-8gb-gddr6-90yv0g13-m0na00',
    },
    {
      model: 'dual oc',
      url: 'https://www.pcdiga.com/componentes/placas-graficas/placas-graficas-nvidia/placa-grafica-asus-dual-geforce-rtx-3060-ti-8gb-gddr6-oc-90yv0g12-m0na00',
    },
    {
      model: 'strix',
      url: 'https://www.pcdiga.com/componentes/placas-graficas/placas-graficas-nvidia/placa-grafica-asus-rog-strix-geforce-rtx-3060-ti-8gb-gddr6-90yv0g00-m0na00',
    },
    {
      model: 'strix oc',
      url: 'https://www.pcdiga.com/componentes/placas-graficas/placas-graficas-nvidia/placa-grafica-asus-rog-strix-geforce-rtx-3060-ti-8gb-gddr6-oc-90yv0g02-m0na00',
    },
    {
      model: 'tuf',
      url: 'https://www.pcdiga.com/componentes/placas-graficas/placas-graficas-nvidia/placa-grafica-asus-tuf-gaming-rtx-3060-ti-8gb-gddr6-90yv0g11-m0na00',
    },
    {
      model: 'tuf oc',
      url: 'https://www.pcdiga.com/componentes/placas-graficas/placas-graficas-nvidia/placa-grafica-asus-tuf-gaming-rtx-3060-ti-8gb-gddr6-oc-90yv0g10-m0na00',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3060ti', [
    {
      model: 'aorus master',
      url: 'https://www.pcdiga.com/componentes/placas-graficas/placas-graficas-nvidia/placa-grafica-gigabyte-geforce-rtx-3060-ti-aorus-master-8gb-gddr6-gvn306tam-00-10',
    },
    {
      model: 'eagle',
      url: 'https://www.pcdiga.com/componentes/placas-graficas/placas-graficas-nvidia/placa-grafica-gigabyte-geforce-rtx-3060-ti-eagle-8gb-gddr6-gvn306teo-00-g',
    },
    {
      model: 'eagle oc',
      url: 'https://www.pcdiga.com/componentes/placas-graficas/placas-graficas-nvidia/placa-grafica-gigabyte-geforce-rtx-3060-ti-eagle-oc-8gb-gddr6-gvn306teo-00-10',
    },
    {
      model: 'gaming oc',
      url: 'https://www.pcdiga.com/componentes/placas-graficas/placas-graficas-nvidia/placa-grafica-gigabyte-geforce-rtx-3060-ti-gaming-oc-8gb-gddr6-gvn306tgo-00-10',
    },
    {
      model: 'gaming oc pro',
      url: 'https://www.pcdiga.com/componentes/placas-graficas/placas-graficas-nvidia/placa-grafica-gigabyte-geforce-rtx-3060-ti-gaming-oc-pro-8gb-gddr6-gvn306tgop-00-10',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3060ti', [
    {
      model: 'gaming',
      url: 'https://www.pcdiga.com/componentes/placas-graficas/placas-graficas-nvidia/placa-grafica-msi-geforce-rtx-3060-ti-gaming-x-8gb-gddr6-912-v397-042',
    },
    {
      model: 'gaming trio',
      url: 'https://www.pcdiga.com/componentes/placas-graficas/placas-graficas-nvidia/placa-grafica-msi-geforce-rtx-3060-ti-gaming-x-trio-8gb-gddr6-912-v390-053',
    },
    {
      model: 'ventus 2x',
      url: 'https://www.pcdiga.com/componentes/placas-graficas/placas-graficas-nvidia/placa-grafica-msi-geforce-rtx-3060-ti-ventus-2x-8gb-gddr6-oc-912-v390-009',
    },
    {
      model: 'ventus 2x',
      url: 'https://www.pcdiga.com/componentes/placas-graficas/placas-graficas-nvidia/placa-grafica-msi-geforce-rtx-3060-ti-ventus-2x-ocv1-8gb-gddr6-oc-912-v397-003',
    },
    {
      model: 'ventus 3x',
      url: 'https://www.pcdiga.com/componentes/placas-graficas/placas-graficas-nvidia/placa-grafica-msi-geforce-rtx-3060-ti-ventus-3x-8gb-gddr6-oc-912-v397-001',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3060ti', [
    {
      model: 'dual fan',
      url: 'https://www.pcdiga.com/componentes/placas-graficas/placas-graficas-nvidia/placa-grafica-pny-geforce-rtx-3060-ti-8gb-gddr6-uprising-dual-fan-vcg3060t8dfmpb',
    },
    {
      model: 'xlr8 epic x',
      url: 'https://www.pcdiga.com/componentes/placas-graficas/placas-graficas-nvidia/placa-grafica-pny-geforce-rtx-3060-ti-8gb-gddr6-xlr8-revel-epic-x-dual-fan-vcg3060t8dfxppb',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3060ti', [
    {
      model: 'twin edge oc',
      url: 'https://www.pcdiga.com/componentes/placas-graficas/placas-graficas-nvidia/placa-grafica-zotac-gaming-geforce-rtx-3060-ti-8gb-gddr6-twin-edge-oc-zt-a30610h-10m',
    },
    {
      model: 'twin edge',
      url: 'https://www.pcdiga.com/componentes/placas-graficas/placas-graficas-nvidia/placa-grafica-zotac-gaming-geforce-rtx-3060-ti-8gb-gddr6-twin-edge-zt-a30610e-10m',
    },
  ]),

];
