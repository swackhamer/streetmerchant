import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for eletronicamente 3090 series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3090', [
    {
      model: 'gaming oc',
      url: 'https://www.electronicamente.com/comprar-tarjetas-graficas/36367-tarjeta-grafica-pcie-nvidia-gf-rtx-3090-gaming-24gb-ddr6-3xdp-2xhdmi-gv-n3090gaming-oc-24.html',
    },
    {
      model: 'gaming',
      url: 'https://www.electronicamente.com/comprar-tarjetas-graficas/34166-tarjeta-grafica-pcie-nvidia-gf-rtx-3090-gaming-24gb-ddr6-3xdp-2xhdmi-gvn3090go-00-g.html',
    },
    {
      model: 'aorus master',
      url: 'https://www.electronicamente.com/comprar-tarjetas-graficas/34875-tarjeta-grafica-pcie-nvidia-gf-rtx-3090-master-24gb-ddr6-3xdp-3xhdmi-gv-n3090aorus-m-24gd.html',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'strix',
      url: 'https://www.electronicamente.com/comprar-tarjetas-graficas/34165-tarjeta-grafica-pcie-nvidia-gf-rtx-3090-24gb-ddr6-3xdp-2xhdmi-90yv0f93-m0nm00.html',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3090', [
    {
      model: 'trinity',
      url: 'https://www.electronicamente.com/comprar-tarjetas-graficas/34167-tarjeta-grafica-pcie-nvidia-gf-rtx-3090-trinity-24gb-ddr6-3xdp-hdmi-zt-a30900d-10p.html',
    },
  ]),
];
