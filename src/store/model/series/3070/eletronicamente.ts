import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for eletronicamente 3070 series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3070', [
    {
      model: 'aorus master',
      url: 'https://www.electronicamente.com/comprar-tarjetas-graficas/34874-tarjeta-grafica-pcie-nvidia-gf-rtx-3070-master-8gb-ddr6-3xdp-3xhdmi-gv-n3070aorus-m-8gd.html',
    },
    {
      model: 'gaming oc',
      url: 'https://www.electronicamente.com/comprar-tarjetas-graficas/34853-tarjeta-grafica-pcie-nvidia-gf-rtx-3070-gaming-oc-8gb-ddr6-2xdp-2xhdmi-gv-n3070gaming-oc-8g.html',
    },
    {
      model: 'vision oc',
      url: 'https://www.electronicamente.com/comprar-tarjetas-graficas/34924-tarjeta-grafica-pcie-nvidia-gf-rtx-3070-vision-oc-8gb-ddr6-2xdp-2xhdmi-gv-n3070vision-oc-8g.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3070', [
    {
      model: 'ventus 2x oc',
      url: 'https://www.electronicamente.com/comprar-tarjetas-graficas/35402-tarjeta-grafica-pcie-nvidia-gf-rtx-3070-ventus-2x-oc-8gb-ddr6-hdmi-3xdp-912-v390-008.html',
    },
    {
      model: 'ventus 3x',
      url: 'https://www.electronicamente.com/comprar-tarjetas-graficas/35403-tarjeta-grafica-pcie-nvidia-gf-rtx-3070-ventus-3x-8gb-ddr6-hdmi-3xdp-912-v390-007.html',
    },
  ]),

];
