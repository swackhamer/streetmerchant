import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for eletronicamente 3080 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'tuf',
      url: 'https://www.electronicamente.com/comprar-tarjetas-graficas/34250-tarjeta-grafica-pcie-nvidia-gf-rtx-3080-tuf-gaming-10gb-ddr6-3xdp-2xhdmi-90yv0fb0-m0nm00.html',
    },
    {
      model: 'tuf oc',
      url: 'https://www.electronicamente.com/comprar-tarjetas-graficas/34248-tarjeta-grafica-pcie-nvidia-gf-rtx-3080-oc-tuf-gaming-10gb-ddr6-3xdp-2xhdmi-90yv0fb1-m0nm00.html',
    },
    {
      model: 'strix',
      url: 'https://www.electronicamente.com/comprar-tarjetas-graficas/34249-tarjeta-grafica-pcie-nvidia-gf-rtx-3080-rog-strix-gaming-10gb-ddr6-3xdp-2xhdmi-90yv0fa0-m0nm00.html',
    },
    {
      model: 'strix oc',
      url: 'https://www.electronicamente.com/comprar-tarjetas-graficas/34247-tarjeta-grafica-pcie-nvidia-gf-rtx-3080-oc-rog-strix-gaming-10gb-ddr6-3xdp-2xhdmi-90yv0fa1-m0nm00.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'aorus xtreme',
      url: 'https://www.electronicamente.com/comprar-tarjetas-graficas/34883-tarjeta-grafica-pcie-nvidia-gf-rtx-3080-xtrem-10gb-ddr6-3xdp-3xhdmi-gv-n3080aorus-x-10gd.html',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3080', [
    {
      model: 'xlr8 uprising',
      url: 'https://www.electronicamente.com/comprar-tarjetas-graficas/34246-tarjeta-grafica-pcie-nvidia-gf-rtx-3080-gaming-10gb-ddr6-4xdp-vcg308010tfxmpb.html',
    },
    {
      model: 'xlr8 revel',
      url: 'https://www.electronicamente.com/comprar-tarjetas-graficas/34245-tarjeta-grafica-pcie-nvidia-gf-rtx-3080-gaming-10gb-ddr6-3xdp-hdmi-vcg308010tfxppb.html',
    },
  ]),
];
